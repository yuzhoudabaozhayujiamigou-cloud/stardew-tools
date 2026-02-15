import type { SecretNote } from "@/components/secret-notes/types";

type NoteDetailPanelProps = {
  note: SecretNote | null;
  isCompleted: boolean;
};

export function NoteDetailPanel(props: NoteDetailPanelProps) {
  const { note, isCompleted } = props;

  if (!note) {
    return (
      <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
        <h2 className="text-lg font-semibold text-[#4a321e]">Note Detail</h2>
        <p className="mt-3 text-sm text-[#614326]/90">Select a secret note from the left to view details.</p>
      </section>
    );
  }

  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7 lg:sticky lg:top-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Detail</p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e]">{note.title}</h2>
        </div>
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
            isCompleted
              ? "border-[#7f9a43] bg-[#dff0bc] text-[#4a5b24]"
              : "border-[#9f744c]/40 bg-[#fff2d2] text-[#6b4a2d]"
          }`}
        >
          {isCompleted ? "Completed" : "In Progress"}
        </span>
      </div>

      <div className="mt-4 grid gap-3 text-sm text-[#5f432a]/90">
        <div className="rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/80 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6f4b2a]/75">Raw Note</div>
          <p className="mt-1 leading-6">{note.rawText}</p>
        </div>

        <div className="rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/80 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6f4b2a]/75">Decoded Hint</div>
          <p className="mt-1 leading-6">{note.decodedHint}</p>
        </div>

        <div className="rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/80 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#6f4b2a]/75">Location Preview</div>
          <div className="mt-2 overflow-hidden rounded-xl border border-[#9f744c]/30 bg-[#f8ebce]">
            {note.locationImage ? (
              <img
                src={note.locationImage}
                alt={`${note.location} map preview`}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-44 items-center justify-center px-4 text-center text-xs text-[#7a5a37]/80">
                Location image placeholder. Add `locationImage` in data to render an in-game map preview.
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/80 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#6f4b2a]/75">Location</div>
            <p className="mt-1">{note.location}</p>
          </div>
          <div className="rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/80 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#6f4b2a]/75">Reward</div>
            <p className="mt-1">{note.reward}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
