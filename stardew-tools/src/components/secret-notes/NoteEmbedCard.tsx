import type { NoteRewardType, SecretNote } from "@/components/secret-notes/types";

type NoteEmbedCardProps = {
  note: SecretNote;
  compact?: boolean;
};

const REWARD_EMOJI_BY_TYPE: Record<NoteRewardType, string> = {
  Item: "🎁",
  Secret: "🔐",
  Furniture: "🪑",
};

function toShortText(input: string, maxLength: number): string {
  const normalizedInput = input.replace(/\s+/g, " ").trim();

  if (normalizedInput.length <= maxLength) {
    return normalizedInput;
  }

  return `${normalizedInput.slice(0, maxLength).trimEnd()}...`;
}

export function NoteEmbedCard(props: NoteEmbedCardProps) {
  const { note, compact = false } = props;
  const rewardIcon = REWARD_EMOJI_BY_TYPE[note.rewardType];

  if (compact) {
    return (
      <section className="flex h-[84px] items-center justify-between overflow-hidden rounded-[18px] border-2 border-[#7c4d2e]/75 bg-[#f3e5bf]/95 px-4 shadow-[0_8px_16px_rgba(56,41,23,0.2)] ring-1 ring-yellow-900/20">
        <span className="inline-flex items-center rounded-full border border-[#8a5b3a]/40 bg-[#fff1cd] px-3 py-1 text-xs font-semibold text-[#5e3f24]">
          #{note.id}
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#9f744c]/35 bg-[#fff8e8]/85 text-base">
          <span aria-hidden="true" className="inline-flex items-center leading-none">
            {rewardIcon}
          </span>
          <span className="sr-only">{note.reward}</span>
        </span>
      </section>
    );
  }

  return (
    <section className="flex h-[190px] flex-col justify-between overflow-hidden rounded-[24px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-4 shadow-[0_10px_24px_rgba(56,41,23,0.25)] ring-1 ring-yellow-900/20">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/80">Hover Preview</p>
        <span className="inline-flex items-center rounded-full border border-[#8a5b3a]/40 bg-[#fff1cd] px-2.5 py-0.5 text-xs font-semibold text-[#5e3f24]">
          #{note.id}
        </span>
      </div>

      <p className="mt-2 text-sm leading-6 text-[#5f4228]/90">{toShortText(note.decodedHint, 112)}</p>

      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#9f744c]/35 bg-[#fff8e8]/85 text-base">
        <span aria-hidden="true" className="inline-flex items-center leading-none">
          {rewardIcon}
        </span>
        <span className="sr-only">{note.reward}</span>
      </div>
    </section>
  );
}
