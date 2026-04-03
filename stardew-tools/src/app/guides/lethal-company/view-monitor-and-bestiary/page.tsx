import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("view-monitor-and-bestiary");

export const metadata = createGuideMetadata(GUIDE);

export default function ViewMonitorAndBestiaryGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
