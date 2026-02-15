import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { PwaRegisterScript } from "@/components/PwaRegisterScript";
import { NoteEmbedCard } from "@/components/secret-notes/NoteEmbedCard";
import { NoteDetailPanel } from "@/components/secret-notes/NoteDetailPanel";
import type { SecretNote } from "@/components/secret-notes/types";
import { SiteFooter } from "@/components/SiteFooter";
import { secretNotes } from "@/data/secretNotes";

type SecretNoteDetailPageProps = {
  params: Promise<{
    noteId: string;
  }>;
  searchParams?: Promise<{
    embed?: string | string[];
    compact?: string | string[];
  }>;
};

const MIN_SECRET_NOTE_ID = 1;
const MAX_SECRET_NOTE_ID = 25;
const DEFAULT_SITE_URL = "https://stardew-tools.vercel.app";
const ARTICLE_AUTHOR_NAME = "Stardew Tools Guide";
const SECRET_NOTES_PUBLISHED_AT = "2026-02-15T00:00:00.000Z";

type EmbedMode = "none" | "panel" | "card";

function parseCompactMode(input: string | string[] | undefined): boolean {
  if (typeof input === "undefined") {
    return false;
  }

  const value = Array.isArray(input) ? input[0] : input;

  return value === "1" || value === "true";
}

function parseNoteId(input: string): number | null {
  const parsed = Number.parseInt(input, 10);

  if (!Number.isInteger(parsed)) {
    return null;
  }

  return parsed;
}

function isInValidRange(noteId: number): boolean {
  return noteId >= MIN_SECRET_NOTE_ID && noteId <= MAX_SECRET_NOTE_ID;
}

function getNoteById(noteId: number) {
  return secretNotes.find((note) => note.id === noteId) ?? null;
}

function getNoteIds(): number[] {
  return secretNotes.map((note) => note.id);
}

function NoteQuickNav(props: { noteIds: number[]; currentNoteId: number }) {
  const { noteIds, currentNoteId } = props;

  return (
    <section className="mx-auto w-full max-w-5xl rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 px-2.5 py-2.5 shadow-[0_10px_22px_rgba(56,41,23,0.24)] ring-1 ring-yellow-900/20 sm:px-3 sm:py-3">
      <nav
        aria-label="Secret notes inline quick navigation"
        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {noteIds.map((noteId) => {
          const isActive = noteId === currentNoteId;

          return (
            <Link
              key={noteId}
              href={`/secret-notes/${noteId}`}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-lg border px-2 text-xs font-semibold transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8e623d]/70 ${
                isActive
                  ? "border-[#7f5731] bg-[#f9e6b0] text-[#4a321e] shadow-inner"
                  : "border-[#a77d57]/40 bg-[#fff8e8]/85 text-[#5f432a] hover:-translate-y-0.5 hover:border-[#8e623d]/70 hover:bg-[#f6ebcf] active:translate-y-0.5 active:shadow-inner"
              }`}
            >
              {noteId}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

function parseEmbedMode(input: string | string[] | undefined): EmbedMode {
  if (typeof input === "undefined") {
    return "none";
  }

  const value = Array.isArray(input) ? input[0] : input;

  if (value === "card") {
    return "card";
  }

  if (value === "true" || value === "1" || value === "panel") {
    return "panel";
  }

  return "none";
}

function toHintExcerpt(decodedHint: string): string {
  const collapsedHint = decodedHint.replace(/\s+/g, " ").trim();

  if (collapsedHint.length <= 100) {
    return collapsedHint;
  }

  return `${collapsedHint.slice(0, 100).trimEnd()}...`;
}

function getSiteUrl(): string {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!configuredSiteUrl) {
    return DEFAULT_SITE_URL;
  }

  return configuredSiteUrl.replace(/\/$/, "");
}

function getAbsoluteImageUrl(relativeImagePath: string | undefined): string | undefined {
  if (!relativeImagePath) {
    return undefined;
  }

  return `${getSiteUrl()}${relativeImagePath}`;
}

function buildArticleJsonLd(note: SecretNote) {
  const noteUrl = `${getSiteUrl()}/secret-notes/${note.id}`;
  const imageUrl = getAbsoluteImageUrl(note.locationImage);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: `Location: ${note.location}. ${toHintExcerpt(note.decodedHint)}`,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      "@type": "Person",
      name: ARTICLE_AUTHOR_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: "Stardew Tools",
    },
    datePublished: SECRET_NOTES_PUBLISHED_AT,
    dateModified: SECRET_NOTES_PUBLISHED_AT,
    mainEntityOfPage: noteUrl,
  };
}

export function generateStaticParams() {
  return secretNotes.map((note) => ({ noteId: String(note.id) }));
}

export async function generateMetadata(props: SecretNoteDetailPageProps): Promise<Metadata> {
  const { noteId } = await props.params;
  const parsedNoteId = parseNoteId(noteId);

  if (parsedNoteId === null || !isInValidRange(parsedNoteId)) {
    return {
      title: "Stardew Valley Secret Notes Finder",
      description: "Browse Stardew Valley Secret Notes and decode every clue.",
    };
  }

  const note = getNoteById(parsedNoteId);

  if (!note) {
    return {
      title: "Stardew Valley Secret Notes Finder",
      description: "Browse Stardew Valley Secret Notes and decode every clue.",
    };
  }

  const title = `Stardew Valley Secret Note #${note.id} Location & Reward`;
  const description = `Location: ${note.location}. ${toHintExcerpt(note.decodedHint)}`;
  const canonicalUrl = `${getSiteUrl()}/secret-notes/${note.id}`;
  const imageUrl = getAbsoluteImageUrl(note.locationImage);

  return {
    title,
    description,
    authors: [{ name: ARTICLE_AUTHOR_NAME }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      siteName: "Stardew Tools",
      publishedTime: SECRET_NOTES_PUBLISHED_AT,
      authors: [ARTICLE_AUTHOR_NAME],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: `${note.title} location map`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function SecretNoteDetailPage(props: SecretNoteDetailPageProps) {
  const { noteId } = await props.params;
  const resolvedSearchParams = props.searchParams ? await props.searchParams : undefined;
  const embedMode = parseEmbedMode(resolvedSearchParams?.embed);
  const isCompact = parseCompactMode(resolvedSearchParams?.compact);
  const isEmbed = embedMode !== "none";
  const isEmbedCard = embedMode === "card";
  const isCompactEmbedCard = isEmbedCard && isCompact;
  const parsedNoteId = parseNoteId(noteId);

  if (parsedNoteId === null || !isInValidRange(parsedNoteId)) {
    redirect("/secret-notes");
  }

  const note = getNoteById(parsedNoteId);

  if (!note) {
    redirect("/secret-notes");
  }

  const articleJsonLd = !isEmbedCard ? buildArticleJsonLd(note) : null;
  const noteIds = getNoteIds();

  return (
    <div
      className={`relative overflow-hidden ${
        isCompactEmbedCard
          ? "h-[84px] bg-transparent"
          : isEmbedCard
            ? "h-[190px] bg-transparent"
            : isEmbed
              ? "bg-transparent"
              : "min-h-screen bg-[#9ed7a4]"
      }`}
    >
      {!isEmbed ? (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "radial-gradient(circle at 12% 20%, rgba(255,255,255,0.24) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.2) 0 3%, transparent 4%), repeating-linear-gradient(135deg, rgba(121,176,77,0.22) 0 16px, rgba(96,154,66,0.18) 16px 32px)",
              backgroundColor: "#9ecf77",
            }}
          />
        </div>
      ) : null}

      <main
        className={`relative z-10 mx-auto w-full ${
          isEmbedCard
            ? isCompactEmbedCard
              ? "h-full max-w-sm overflow-hidden px-0 py-0"
              : "h-full max-w-xl overflow-hidden px-0 py-0"
            : isEmbed
              ? "max-w-2xl px-2 py-2 sm:px-3 sm:py-3"
              : "max-w-5xl px-4 py-8 sm:px-6"
        }`}
      >
        {!isEmbed ? <PwaRegisterScript /> : null}

        <div className={isEmbedCard ? "h-full" : "grid gap-6"}>
          {!isEmbed ? (
            <section className="mx-auto w-full max-w-5xl rounded-[28px] border-4 border-[#7c4d2e]/80 bg-[#f3e5bf]/95 p-4 shadow-[0_12px_30px_rgba(56,41,23,0.3)] ring-1 ring-yellow-900/20 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f4b2a]/75">Secret Note Detail</p>
              <h1 className="mt-1 text-xl font-semibold text-[#4a321e] sm:text-2xl">{note.title}</h1>
              <p className="mt-2 text-sm leading-6 text-[#5f4228]/85">
                Check location, reward, and decoded hint details for this note. Share this URL directly with other
                players.
              </p>

              <div className="mt-3">
                <Link
                  href="/secret-notes"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#8a5b3a]/45 bg-[#fff2c8] px-4 py-2 text-sm font-semibold text-[#5c3d23] shadow-sm transition hover:bg-[#fce8b1]"
                >
                  <span aria-hidden="true" className="inline-flex items-center leading-none opacity-80">
                    ↩️
                  </span>
                  Back to Secret Notes
                </Link>
              </div>
            </section>
          ) : null}

          {isEmbedCard ? (
            <NoteEmbedCard note={note} compact={isCompactEmbedCard} />
          ) : isEmbed ? (
            <NoteDetailPanel note={note} isCompleted={false} />
          ) : (
            <section className="mx-auto grid w-full max-w-5xl gap-6">
              <NoteQuickNav noteIds={noteIds} currentNoteId={note.id} />
              <NoteDetailPanel note={note} isCompleted={false} />
              <NoteQuickNav noteIds={noteIds} currentNoteId={note.id} />
            </section>
          )}

          {!isEmbed ? <SiteFooter className="mt-2" /> : null}
        </div>
      </main>

      {articleJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
      ) : null}
    </div>
  );
}
