import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("moons-command-guide");

export const metadata = createGuideMetadata(GUIDE);

export default function MoonsCommandGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
