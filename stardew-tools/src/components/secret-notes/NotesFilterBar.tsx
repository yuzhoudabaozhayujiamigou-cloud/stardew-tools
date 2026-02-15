import {
  NOTE_REGIONS,
  NOTE_REWARD_TYPES,
  type NoteRegion,
  type NoteRewardType,
} from "@/components/secret-notes/types";

type NotesFilterBarProps = {
  region: "all" | NoteRegion;
  rewardType: "all" | NoteRewardType;
  onRegionChange: (value: "all" | NoteRegion) => void;
  onRewardTypeChange: (value: "all" | NoteRewardType) => void;
};

export function NotesFilterBar(props: NotesFilterBarProps) {
  const { region, rewardType, onRegionChange, onRewardTypeChange } = props;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#5a3d25]">Region</span>
        <select
          value={region}
          onChange={(event) => onRegionChange(event.target.value as "all" | NoteRegion)}
          className="h-10 rounded-2xl border border-[#a87a4d]/50 bg-[#fff8e7] px-3 text-sm text-[#4b331f] shadow-sm focus:border-[#7f5731] focus:outline-none"
        >
          <option value="all">All Regions</option>
          {NOTE_REGIONS.map((regionOption) => (
            <option key={regionOption} value={regionOption}>
              {regionOption}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[#5a3d25]">Reward Type</span>
        <select
          value={rewardType}
          onChange={(event) => onRewardTypeChange(event.target.value as "all" | NoteRewardType)}
          className="h-10 rounded-2xl border border-[#a87a4d]/50 bg-[#fff8e7] px-3 text-sm text-[#4b331f] shadow-sm focus:border-[#7f5731] focus:outline-none"
        >
          <option value="all">All Reward Types</option>
          {NOTE_REWARD_TYPES.map((rewardTypeOption) => (
            <option key={rewardTypeOption} value={rewardTypeOption}>
              {rewardTypeOption}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
