import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("store-command-guide");

export const metadata = createGuideMetadata(GUIDE);

export default function StoreCommandGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
