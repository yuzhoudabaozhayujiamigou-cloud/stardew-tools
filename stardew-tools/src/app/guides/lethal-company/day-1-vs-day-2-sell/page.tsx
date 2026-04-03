import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("day-1-vs-day-2-sell");

export const metadata = createGuideMetadata(GUIDE);

export default function Day1VsDay2SellGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
