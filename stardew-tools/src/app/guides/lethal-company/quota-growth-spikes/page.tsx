import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("quota-growth-spikes");

export const metadata = createGuideMetadata(GUIDE);

export default function QuotaGrowthSpikesGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
