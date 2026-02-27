import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stardew Valley Secret Notes Finder",
  description:
    "Search and decode Stardew Valley Secret Notes with location hints, rewards, and completion tracking.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SecretNotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

