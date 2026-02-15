"use client";

import Link from "next/link";

import { useCompletionStorage } from "@/components/secret-notes/useCompletionStorage";

type NotesSidebarProps = {
  currentNoteId: number;
  noteIds: number[];
};

function getNoteItemClassName(isActive: boolean, isCompleted: boolean): string {
  if (isActive) {
    return "border-[#7f5731] bg-[#f9e6b0] text-[#4a321e] shadow-inner";
  }

  if (isCompleted) {
    return "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100";
  }

  return "border-[#a77d57]/40 bg-[#fff8e8]/85 text-[#5f432a] hover:bg-[#f6ebcf]";
}

export function NotesSidebar(props: NotesSidebarProps) {
  const { currentNoteId, noteIds } = props;
  const { completedNoteIds } = useCompletionStorage();

  return (
    <>
      <aside className="hidden lg:block lg:self-start">
        <div className="sticky top-6 rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f4b2a]/75">Notes Index</p>

          <nav aria-label="Secret notes index" className="mt-4 grid grid-cols-5 gap-2 px-1 pb-1">
            {noteIds.map((noteId) => {
              const isActive = noteId === currentNoteId;
              const isCompleted = completedNoteIds.has(noteId);

              return (
                <Link
                  key={noteId}
                  href={`/secret-notes/${noteId}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-flex h-9 items-center justify-center rounded-xl border text-xs font-semibold transition ${getNoteItemClassName(
                    isActive,
                    isCompleted,
                  )}`}
                >
                  <span>{noteId}</span>
                  {isCompleted ? (
                    <span
                      aria-hidden="true"
                      className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white"
                    >
                      ✓
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <section className="lg:hidden">
        <div className="rounded-[20px] border-2 border-[#7c4d2e]/70 bg-[#f3e5bf]/95 p-3 shadow-[0_8px_18px_rgba(56,41,23,0.2)] ring-1 ring-yellow-900/20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f4b2a]/75">Quick Jump</p>

          <nav
            aria-label="Secret notes quick jump"
            className="mt-2 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {noteIds.map((noteId) => {
              const isActive = noteId === currentNoteId;
              const isCompleted = completedNoteIds.has(noteId);

              return (
                <Link
                  key={noteId}
                  href={`/secret-notes/${noteId}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-lg border px-2 text-xs font-semibold transition ${getNoteItemClassName(
                    isActive,
                    isCompleted,
                  )}`}
                >
                  <span>{noteId}</span>
                  {isCompleted ? (
                    <span
                      aria-hidden="true"
                      className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white"
                    >
                      ✓
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>
    </>
  );
}
