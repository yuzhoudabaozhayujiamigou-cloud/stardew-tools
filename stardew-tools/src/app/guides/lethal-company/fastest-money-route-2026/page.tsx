import { LethalGuideTemplate } from "../LethalGuideTemplate";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const guide = getLethalGuide("fastest-money-route-2026");

export const metadata = createGuideMetadata(guide);

export default function FastestMoneyRoute2026Page() {
  return <LethalGuideTemplate guide={guide} />;
}
