"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "stardew-notes-completed";
const WRITE_DEBOUNCE_MS = 180;

function normalizeCompletedIds(input: unknown): number[] {
  if (!Array.isArray(input)) {
    return [];
  }

  return input
    .map((value) => Number(value))
    .filter((value) => Number.isInteger(value) && value > 0);
}

export function useCompletionStorage() {
  const [completedNoteIds, setCompletedNoteIds] = useState<Set<number>>(new Set());
  const [isStorageReady, setIsStorageReady] = useState(false);
  const writeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        const normalized = normalizeCompletedIds(parsed);
        setCompletedNoteIds(new Set(normalized));
      }
    } catch {
      setCompletedNoteIds(new Set());
    }

    setIsStorageReady(true);

    return () => {
      if (writeTimerRef.current !== null) {
        window.clearTimeout(writeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isStorageReady || typeof window === "undefined") {
      return;
    }

    if (writeTimerRef.current !== null) {
      window.clearTimeout(writeTimerRef.current);
    }

    writeTimerRef.current = window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedNoteIds)));
      } catch {
        return;
      }
    }, WRITE_DEBOUNCE_MS);

    return () => {
      if (writeTimerRef.current !== null) {
        window.clearTimeout(writeTimerRef.current);
      }
    };
  }, [completedNoteIds, isStorageReady]);

  const setCompleted = useCallback((id: number, checked: boolean) => {
    setCompletedNoteIds((previous) => {
      const next = new Set(previous);

      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }

      return next;
    });
  }, []);

  return {
    completedNoteIds,
    setCompleted,
    isStorageReady,
  };
}

