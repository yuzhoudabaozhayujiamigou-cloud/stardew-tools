"use client";

import Link from "next/link";

import type { SecretNote } from "@/components/secret-notes/types";

type NoteCardProps = {
  note: SecretNote;
  isCompleted: boolean;
};

export function NoteCard(props: NoteCardProps) {
  const { note, isCompleted } = props;

  return (
    <Link
      href={`/secret-notes/${note.id}`}
      aria-label={`Open ${note.title}`}
      className="flex h-full min-h-[196px] transform-gpu flex-col rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/85 p-4 transition hover:-translate-y-0.5 hover:border-[#9b692f]/70 hover:bg-[#fdf0cd]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 text-left">
          <div className="truncate text-sm font-semibold text-[#4e341f]">{note.title}</div>
          <p className="mt-1 min-h-[3.75rem] overflow-hidden text-sm text-[#614326]/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
            {note.summary}
          </p>
        </div>

        <span
          className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
            isCompleted
              ? "border-emerald-300 bg-emerald-50 text-emerald-800"
              : "border-[#9f744c]/40 bg-[#fff2d2] text-[#6b4a2d]"
          }`}
        >
          {isCompleted ? "✓ Done" : "Open"}
        </span>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex rounded-full border border-[#a77d57]/45 bg-[#fdf2d6] px-2 py-0.5 text-[11px] font-medium text-[#6a4a2d]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
