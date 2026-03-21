#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CALLER="$SCRIPT_DIR/call_antigravity.py"

usage() {
  cat <<'EOF'
Usage:
  oc-ag.sh prompt "<text>" [options]
  oc-ag.sh workflow <name> [options]

Options:
  --model <alias_or_id>      Model alias or full ID (M26/M35/M36/M37/M47/OSS120B)
  --workspace <path_or_uri>  Workspace path or file:// URI
  --out <path>               Output path (.json or .jsonl). Default: /tmp/antigravity/<date>/...
  --retry <n>                Retry count on failure (default: 0)
  --auto-proceed             Auto call /proceed while waiting (approval gates)
  --base-url <url>           Gateway URL (default: http://127.0.0.1:3000)
  --wait-seconds <sec>       Max wait per attempt (default: 240)
  --poll-interval <sec>      Poll interval in seconds (default: 3)
  --workflow-args "<args>"   Extra args appended after /workflow

Examples:
  oc-ag.sh prompt "Explain this repo" --model M35 --workspace /root/project --out /tmp/ag.jsonl --retry 2
  oc-ag.sh workflow ai-topic-discovery --model M47 --auto-proceed --out /tmp/ag.json
EOF
}

if [[ ! -f "$CALLER" ]]; then
  echo "call_antigravity.py not found: $CALLER" >&2
  exit 1
fi

if [[ $# -lt 2 ]]; then
  usage >&2
  exit 2
fi

MODE="$1"
shift

case "$MODE" in
  prompt)
    TASK_INPUT="$1"
    shift
    ;;
  workflow)
    TASK_INPUT="$1"
    shift
    ;;
  *)
    usage >&2
    exit 2
    ;;
esac

BASE_URL="${AG_BASE_URL:-http://127.0.0.1:3000}"
MODEL=""
WORKSPACE=""
OUT=""
RETRY=0
AUTO_PROCEED=0
WAIT_SECONDS=240
POLL_INTERVAL=3
WORKFLOW_ARGS=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --model)
      MODEL="${2:-}"
      shift 2
      ;;
    --workspace)
      WORKSPACE="${2:-}"
      shift 2
      ;;
    --out)
      OUT="${2:-}"
      shift 2
      ;;
    --retry)
      RETRY="${2:-0}"
      shift 2
      ;;
    --auto-proceed)
      AUTO_PROCEED=1
      shift
      ;;
    --base-url)
      BASE_URL="${2:-}"
      shift 2
      ;;
    --wait-seconds)
      WAIT_SECONDS="${2:-240}"
      shift 2
      ;;
    --poll-interval)
      POLL_INTERVAL="${2:-3}"
      shift 2
      ;;
    --workflow-args)
      WORKFLOW_ARGS="${2:-}"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

if ! [[ "$RETRY" =~ ^[0-9]+$ ]]; then
  echo "--retry must be a non-negative integer" >&2
  exit 2
fi

resolve_model() {
  local raw="$1"
  local upper
  upper="$(printf '%s' "$raw" | tr '[:lower:]' '[:upper:]')"
  case "$upper" in
    "" ) echo "" ;;
    M26|OPUS|OPUS46) echo "MODEL_PLACEHOLDER_M26" ;;
    M35|SONNET|SONNET46) echo "MODEL_PLACEHOLDER_M35" ;;
    M36|GPROLOW|GEMINIPROLOW) echo "MODEL_PLACEHOLDER_M36" ;;
    M37|GPRO|GPROHIGH|GEMINIPROHIGH) echo "MODEL_PLACEHOLDER_M37" ;;
    M47|FLASH|GFLASH) echo "MODEL_PLACEHOLDER_M47" ;;
    OSS120B|GPTOSS120B|MOSS) echo "MODEL_OPENAI_GPT_OSS_120B_MEDIUM" ;;
    *)
      echo "$raw"
      ;;
  esac
}

MODEL_ID="$(resolve_model "$MODEL")"

DAY="$(date +%F)"
TS="$(date +%Y%m%d_%H%M%S)"
RUN_ROOT="/tmp/antigravity/$DAY"
mkdir -p "$RUN_ROOT"

if [[ -z "$OUT" ]]; then
  OUT="$RUN_ROOT/${MODE}_${TS}.json"
else
  mkdir -p "$(dirname "$OUT")"
fi

TOTAL_ATTEMPTS=$((RETRY + 1))
TMP_DIR="$RUN_ROOT/.oc-ag-${MODE}-${TS}-$$"
mkdir -p "$TMP_DIR"

RECORDS=()
FINAL_OK=0
FINAL_RECORD=""

for ((attempt=1; attempt<=TOTAL_ATTEMPTS; attempt++)); do
  ATTEMPT_TAG="attempt-${attempt}"
  CALL_STDOUT="$TMP_DIR/${ATTEMPT_TAG}.stdout.json"
  CALL_STDERR="$TMP_DIR/${ATTEMPT_TAG}.stderr.log"
  RECORD_FILE="$TMP_DIR/${ATTEMPT_TAG}.record.json"
  STEPS_FILE="$RUN_ROOT/${MODE}_${TS}_${ATTEMPT_TAG}.steps.json"

  cmd=(python3 "$CALLER" --base-url "$BASE_URL" --wait-seconds "$WAIT_SECONDS" --poll-interval "$POLL_INTERVAL" --json)
  if [[ -n "$WORKSPACE" ]]; then
    cmd+=(--workspace "$WORKSPACE")
  fi
  if [[ -n "$MODEL_ID" ]]; then
    cmd+=(--model "$MODEL_ID")
  fi
  if [[ "$AUTO_PROCEED" -eq 1 ]]; then
    cmd+=(--auto-proceed)
  fi
  if [[ "$MODE" == "prompt" ]]; then
    cmd+=(--prompt "$TASK_INPUT")
  else
    cmd+=(--workflow "$TASK_INPUT")
    if [[ -n "$WORKFLOW_ARGS" ]]; then
      cmd+=(--workflow-args "$WORKFLOW_ARGS")
    fi
  fi

  set +e
  "${cmd[@]}" >"$CALL_STDOUT" 2>"$CALL_STDERR"
  CMD_RC=$?
  set -e

  if jq -e . >/dev/null 2>&1 <"$CALL_STDOUT"; then
    CALL_JSON="$(cat "$CALL_STDOUT")"
  else
    ESCAPED="$(python3 - <<'PY' "$CALL_STDOUT"
import json,sys,pathlib
p=pathlib.Path(sys.argv[1])
print(json.dumps(p.read_text(encoding='utf-8', errors='ignore')))
PY
)"
    CALL_JSON="{\"ok\":false,\"parseError\":true,\"raw\":$ESCAPED}"
  fi

  CID="$(jq -r '.cascadeId // empty' "$CALL_STDOUT" 2>/dev/null || true)"
  if [[ -n "$CID" ]]; then
    if curl -sS "$BASE_URL/api/conversations/$CID/steps" >"$STEPS_FILE"; then
      :
    else
      echo '{"error":"failed to fetch steps"}' >"$STEPS_FILE"
    fi
  else
    echo '{"error":"missing cascadeId"}' >"$STEPS_FILE"
  fi

  jq -n \
    --arg mode "$MODE" \
    --arg taskInput "$TASK_INPUT" \
    --arg model "$MODEL_ID" \
    --arg workspace "$WORKSPACE" \
    --arg baseUrl "$BASE_URL" \
    --argjson attempt "$attempt" \
    --argjson totalAttempts "$TOTAL_ATTEMPTS" \
    --argjson commandExit "$CMD_RC" \
    --arg stepsPath "$STEPS_FILE" \
    --arg stderrPath "$CALL_STDERR" \
    --arg timestamp "$(date -Iseconds)" \
    --argjson call "$CALL_JSON" \
    '{
      mode: $mode,
      taskInput: $taskInput,
      model: $model,
      workspace: $workspace,
      baseUrl: $baseUrl,
      attempt: $attempt,
      totalAttempts: $totalAttempts,
      commandExit: $commandExit,
      timestamp: $timestamp,
      stepsPath: $stepsPath,
      stderrPath: $stderrPath,
      call: $call
    }' >"$RECORD_FILE"

  RECORDS+=("$RECORD_FILE")

  CALL_OK="$(jq -r '.ok // false' "$CALL_STDOUT" 2>/dev/null || echo "false")"
  if [[ "$CMD_RC" -eq 0 && "$CALL_OK" == "true" ]]; then
    FINAL_OK=1
    FINAL_RECORD="$RECORD_FILE"
    break
  fi

  FINAL_RECORD="$RECORD_FILE"
  if (( attempt < TOTAL_ATTEMPTS )); then
    sleep 2
  fi
done

if [[ "$OUT" == *.jsonl ]]; then
  : >"$OUT"
  for rf in "${RECORDS[@]}"; do
    jq -c . "$rf" >>"$OUT"
  done
else
  jq -n --arg out "$OUT" --argjson ok "$FINAL_OK" \
    --arg generatedAt "$(date -Iseconds)" \
    --arg mode "$MODE" \
    --arg taskInput "$TASK_INPUT" \
    --arg model "$MODEL_ID" \
    --arg workspace "$WORKSPACE" \
    --arg baseUrl "$BASE_URL" \
    --argjson retry "$RETRY" \
    --arg finalRecord "$FINAL_RECORD" \
    --argjson records "$(for rf in "${RECORDS[@]}"; do cat "$rf"; done | jq -s .)" \
    '{
      ok: ($ok == 1),
      generatedAt: $generatedAt,
      mode: $mode,
      taskInput: $taskInput,
      model: $model,
      workspace: $workspace,
      baseUrl: $baseUrl,
      retry: $retry,
      finalRecordPath: $finalRecord,
      attempts: $records
    }' >"$OUT"
fi

if [[ -n "$FINAL_RECORD" && -f "$FINAL_RECORD" ]]; then
  RESPONSE="$(jq -r '.call.response // empty' "$FINAL_RECORD")"
  CID="$(jq -r '.call.cascadeId // empty' "$FINAL_RECORD")"
  STEPS_PATH="$(jq -r '.stepsPath // empty' "$FINAL_RECORD")"
  echo "ok: $([[ "$FINAL_OK" -eq 1 ]] && echo true || echo false)"
  echo "cascadeId: ${CID:-N/A}"
  echo "output: $OUT"
  echo "steps: ${STEPS_PATH:-N/A}"
  echo "----- plannerResponse (first 40 lines) -----"
  if [[ -n "$RESPONSE" ]]; then
    printf '%s\n' "$RESPONSE" | sed -n '1,40p'
  else
    echo "(empty)"
  fi
fi

if [[ "$FINAL_OK" -eq 1 ]]; then
  exit 0
fi
exit 1
