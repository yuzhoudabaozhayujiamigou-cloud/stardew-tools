#!/usr/bin/env python3
"""
Run Antigravity tasks from terminal/headless automation.

Examples:
  python3 scripts/call_antigravity.py \
    --workspace /root/.openclaw/workspace/stardew-tools/stardew-tools \
    --model MODEL_PLACEHOLDER_M35 \
    --prompt "Review this repo and list top 5 risks."

  python3 scripts/call_antigravity.py \
    --workflow ai-topic-discovery \
    --workspace /root/.openclaw/workspace/stardew-tools/stardew-tools
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import time
from typing import Any, Dict, List, Optional
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen


def _to_file_uri(workspace: str) -> str:
    if workspace.startswith("file://"):
        return workspace
    path = os.path.abspath(workspace)
    return f"file://{path}"


def _http_json(
    method: str,
    url: str,
    body: Optional[Dict[str, Any]] = None,
    timeout: int = 30,
    allow_not_found: bool = False,
) -> Any:
    data = None
    headers = {"Accept": "application/json"}
    if body is not None:
        data = json.dumps(body).encode("utf-8")
        headers["Content-Type"] = "application/json"

    req = Request(url=url, data=data, headers=headers, method=method.upper())
    try:
        with urlopen(req, timeout=timeout) as resp:
            payload = resp.read().decode("utf-8")
            if not payload:
                return {}
            return json.loads(payload)
    except HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="ignore")
        if allow_not_found and exc.code == 404:
            return None
        raise RuntimeError(f"HTTP {exc.code} {url}: {detail}") from exc
    except URLError as exc:
        raise RuntimeError(f"Network error calling {url}: {exc}") from exc


def _pick_workspace(base_url: str) -> str:
    servers = _http_json("GET", f"{base_url}/api/servers")
    if isinstance(servers, list) and servers:
        ws = servers[0].get("workspace")
        if ws:
            return ws
    raise RuntimeError("No running language_server found from /api/servers; pass --workspace explicitly.")


def _create_conversation(base_url: str, workspace: str) -> str:
    data = _http_json(
        "POST",
        f"{base_url}/api/conversations",
        {"workspace": workspace},
    )
    cid = data.get("cascadeId")
    if not cid:
        raise RuntimeError(f"Failed to create conversation: {json.dumps(data, ensure_ascii=False)}")
    return cid


def _read_steps(base_url: str, cascade_id: str, allow_missing: bool = False) -> List[Dict[str, Any]]:
    safe_id = quote(cascade_id, safe="")
    data = _http_json(
        "GET",
        f"{base_url}/api/conversations/{safe_id}/steps",
        allow_not_found=allow_missing,
    )
    if data is None:
        return []
    steps = data.get("steps", [])
    if not isinstance(steps, list):
        return []
    return steps


def _extract_response(step: Dict[str, Any]) -> str:
    planner = step.get("plannerResponse") or {}
    if not isinstance(planner, dict):
        return ""
    return str(planner.get("modifiedResponse") or planner.get("response") or "").strip()


def main() -> int:
    parser = argparse.ArgumentParser(description="Dispatch prompt/workflow to Antigravity Gateway.")
    parser.add_argument("--base-url", default=os.environ.get("AG_BASE_URL", "http://127.0.0.1:3000"))
    parser.add_argument("--workspace", help="Path or file:// URI. If omitted, auto-pick first /api/servers workspace.")
    parser.add_argument("--cid", help="Reuse existing conversation cascadeId.")
    parser.add_argument("--model", help="Model id, e.g. MODEL_PLACEHOLDER_M35")
    parser.add_argument("--prompt", help="Prompt text to send.")
    parser.add_argument("--workflow", help="Workflow name, e.g. ai-topic-discovery (slash optional).")
    parser.add_argument("--workflow-args", default="", help="Optional args appended after /workflow.")
    parser.add_argument("--wait-seconds", type=int, default=240)
    parser.add_argument("--poll-interval", type=float, default=3.0)
    parser.add_argument(
        "--auto-proceed",
        action="store_true",
        help="Periodically call /proceed while waiting (useful for workflow approval gates).",
    )
    parser.add_argument("--json", action="store_true", help="Print structured JSON output.")
    args = parser.parse_args()

    if not args.prompt and not args.workflow:
        print("Need one of: --prompt or --workflow", file=sys.stderr)
        return 2

    base_url = args.base_url.rstrip("/")
    workflow_text = ""
    if args.workflow:
        workflow = args.workflow
        if not workflow.startswith("/"):
            workflow = f"/{workflow}"
        workflow_text = workflow
        if args.workflow_args.strip():
            workflow_text = f"{workflow_text} {args.workflow_args.strip()}"

    text = args.prompt if args.prompt else workflow_text

    # Health probe to fail fast with a clear error.
    _http_json("GET", f"{base_url}/api/servers")

    cid = args.cid
    initial_len = 0
    if not cid:
        workspace = args.workspace
        if not workspace:
            workspace = _pick_workspace(base_url)
        else:
            workspace = _to_file_uri(workspace)
        cid = _create_conversation(base_url, workspace)
    else:
        initial_steps = _read_steps(base_url, cid, allow_missing=True)
        initial_len = len(initial_steps)

    send_body: Dict[str, Any] = {"text": text}
    if args.model:
        send_body["model"] = args.model

    safe_id = quote(cid, safe="")
    _http_json("POST", f"{base_url}/api/conversations/{safe_id}/send", send_body)

    deadline = time.time() + max(args.wait_seconds, 1)
    latest_response = ""
    latest_step_index = -1
    last_steps: List[Dict[str, Any]] = []
    last_proceed_at = 0.0

    while time.time() < deadline:
        if args.auto_proceed and time.time() - last_proceed_at >= 15:
            try:
                _http_json("POST", f"{base_url}/api/conversations/{safe_id}/proceed", {})
            except Exception:
                pass
            last_proceed_at = time.time()

        steps = _read_steps(base_url, cid)
        last_steps = steps
        if len(steps) > initial_len:
            for idx in range(initial_len, len(steps)):
                resp = _extract_response(steps[idx])
                if resp:
                    latest_response = resp
                    latest_step_index = idx
            if latest_response:
                break
        time.sleep(max(args.poll_interval, 0.5))

    if not latest_response:
        tail = []
        for step in last_steps[-5:]:
            tail.append(
                {
                    "type": step.get("type"),
                    "status": step.get("status"),
                    "hasPlannerResponse": bool(_extract_response(step)),
                }
            )
        result = {
            "ok": False,
            "cascadeId": cid,
            "message": "Timed out waiting for plannerResponse.",
            "waitSeconds": args.wait_seconds,
            "lastStepsTail": tail,
        }
        print(json.dumps(result, ensure_ascii=False, indent=2))
        return 1

    if args.json:
        result = {
            "ok": True,
            "cascadeId": cid,
            "stepIndex": latest_step_index,
            "response": latest_response,
        }
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        print(f"cascadeId: {cid}")
        print("")
        print(latest_response)

    return 0


if __name__ == "__main__":
    sys.exit(main())
