export const NOTE_REGIONS = [
  "General",
  "Town",
  "Forest",
  "Desert",
  "Beach",
  "Railroad",
  "Tunnel",
  "Mountain",
  "Skull Cavern",
] as const;

export type NoteRegion = (typeof NOTE_REGIONS)[number];

export const NOTE_REWARD_TYPES = ["Item", "Secret", "Furniture"] as const;

export type NoteRewardType = (typeof NOTE_REWARD_TYPES)[number];

export type SecretNote = {
  id: number;
  title: string;
  summary: string;
  rawText: string;
  decodedHint: string;
  location: string;
  reward: string;
  region: NoteRegion;
  rewardType: NoteRewardType;
  tags: string[];
  locationImage?: string;
};
