"use client";

import type { SecretNote } from "@/components/secret-notes/types";

type NoteCardProps = {
  note: SecretNote;
  isActive: boolean;
  isCompleted: boolean;
  onSelect: (id: number) => void;
  onToggleCompleted: (id: number, checked: boolean) => void;
};

export function NoteCard(props: NoteCardProps) {
  const { note, isActive, isCompleted, onSelect, onToggleCompleted } = props;

  return (
    <article
      className={`rounded-2xl border p-4 transition ${
        isActive
          ? "border-[#9b692f] bg-[#f7e7b9] shadow-inner"
          : "border-[#9f744c]/35 bg-[#fff8e8]/85 hover:border-[#9b692f]/70"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelect(note.id)}
          className="flex-1 text-left"
          aria-label={`Open ${note.title}`}
        >
          <div className="text-sm font-semibold text-[#4e341f]">{note.title}</div>
          <p className="mt-1 text-sm text-[#614326]/90">{note.summary}</p>
        </button>

        <label className="inline-flex shrink-0 items-center gap-2 text-xs text-[#5f432a]/90">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(event) => onToggleCompleted(note.id, event.target.checked)}
            className="h-4 w-4 rounded border-[#8b603a] text-[#7c4d2e] focus:ring-[#8b603a]"
          />
          Done
        </label>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex rounded-full border border-[#a77d57]/45 bg-[#fdf2d6] px-2 py-0.5 text-[11px] font-medium text-[#6a4a2d]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

