"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { NoteCard } from "@/components/secret-notes/NoteCard";
import { NotesFilterBar } from "@/components/secret-notes/NotesFilterBar";
import {
  NOTE_REGIONS,
  NOTE_REWARD_TYPES,
  type NoteRegion,
  type NoteRewardType,
  type SecretNote,
} from "@/components/secret-notes/types";
import { useCompletionStorage } from "@/components/secret-notes/useCompletionStorage";

type SecretNotesClientProps = {
  notes: SecretNote[];
};

function isRegion(value: string | null): value is NoteRegion {
  if (!value) {
    return false;
  }

  return (NOTE_REGIONS as readonly string[]).includes(value);
}

function isRewardType(value: string | null): value is NoteRewardType {
  if (!value) {
    return false;
  }

  return (NOTE_REWARD_TYPES as readonly string[]).includes(value);
}

export function SecretNotesClient(props: SecretNotesClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { completedNoteIds } = useCompletionStorage();

  const regionParam = searchParams.get("region");
  const rewardParam = searchParams.get("reward");
  const query = searchParams.get("q") ?? "";
  const region: "all" | NoteRegion = isRegion(regionParam) ? regionParam : "all";
  const rewardType: "all" | NoteRewardType = isRewardType(rewardParam) ? rewardParam : "all";

  const updateSearchParams = (updates: {
    q?: string;
    region?: "all" | NoteRegion;
    reward?: "all" | NoteRewardType;
  }) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (typeof updates.q !== "undefined") {
      const nextQuery = updates.q.trim();

      if (nextQuery) {
        nextParams.set("q", nextQuery);
      } else {
        nextParams.delete("q");
      }
    }

    if (typeof updates.region !== "undefined") {
      if (updates.region === "all") {
        nextParams.delete("region");
      } else {
        nextParams.set("region", updates.region);
      }
    }

    if (typeof updates.reward !== "undefined") {
      if (updates.reward === "all") {
        nextParams.delete("reward");
      } else {
        nextParams.set("reward", updates.reward);
      }
    }

    const queryString = nextParams.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  };

  const filteredNotes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return props.notes.filter((note) => {
      const haystack = `${note.title} ${note.summary} ${note.location} ${note.reward} ${note.region} ${note.rewardType} ${note.tags.join(" ")}`.toLowerCase();
      const matchesQuery = normalizedQuery ? haystack.includes(normalizedQuery) : true;
      const matchesRegion = region === "all" ? true : note.region === region;
      const matchesRewardType = rewardType === "all" ? true : note.rewardType === rewardType;

      return matchesQuery && matchesRegion && matchesRewardType;
    });
  }, [props.notes, query, region, rewardType]);

  return (
    <section className="rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-5 shadow-[0_12px_28px_rgba(56,41,23,0.28)] ring-1 ring-yellow-900/20 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Finder</p>
          <h2 className="mt-1 text-xl font-semibold text-[#4a321e]">Secret Notes</h2>
        </div>
        <span aria-hidden="true" className="inline-flex items-center text-lg leading-none opacity-80">
          🔎
        </span>
      </div>

      <div className="mt-4 grid gap-3">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[#5a3d25]">Search notes</span>
          <input
            value={query}
            onChange={(event) => updateSearchParams({ q: event.target.value })}
            placeholder="Search by title, location, reward..."
            className="h-11 rounded-2xl border border-[#a87a4d]/50 bg-[#fff8e7] px-4 text-sm text-[#4b331f] shadow-sm focus:border-[#7f5731] focus:outline-none"
          />
        </label>

        <NotesFilterBar
          region={region}
          rewardType={rewardType}
          onRegionChange={(value) => updateSearchParams({ region: value })}
          onRewardTypeChange={(value) => updateSearchParams({ reward: value })}
        />

        <div className="flex flex-wrap items-center gap-2 text-xs text-[#6f4b2a]/85">
          <span className="inline-flex rounded-full border border-[#a77d57]/40 bg-[#fff4dc] px-2.5 py-1">
            Total: {props.notes.length}
          </span>
          <span className="inline-flex rounded-full border border-[#a77d57]/40 bg-[#fff4dc] px-2.5 py-1">
            Filtered: {filteredNotes.length}
          </span>
          <span className="inline-flex rounded-full border border-[#a77d57]/40 bg-[#fff4dc] px-2.5 py-1">
            Completed: {completedNoteIds.size}
          </span>
        </div>
      </div>

      <div className="mt-5 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} isCompleted={completedNoteIds.has(note.id)} />
          ))
        ) : (
          <div className="rounded-2xl border border-[#9f744c]/35 bg-[#fff8e8]/85 px-4 py-3 text-sm text-[#614326]/90 sm:col-span-2 lg:col-span-3 xl:col-span-4">
            No notes found for this search keyword.
          </div>
        )}
      </div>
    </section>
  );
}
