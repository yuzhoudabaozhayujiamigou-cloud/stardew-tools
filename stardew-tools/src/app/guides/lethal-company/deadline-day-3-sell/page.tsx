import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("deadline-day-3-sell");

export const metadata = createGuideMetadata(GUIDE);

export default function DeadlineDay3SellGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
