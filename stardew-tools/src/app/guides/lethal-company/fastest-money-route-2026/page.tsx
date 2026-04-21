import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const guide = getLethalGuide("fastest-money-route-2026");

export const metadata = createGuideMetadata(guide);

export default function FastestMoneyRoute2026Page() {
  return <LethalGuidePage guide={guide} />;
}
