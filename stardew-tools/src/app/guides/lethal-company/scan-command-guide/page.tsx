import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("scan-command-guide");

export const metadata = createGuideMetadata(GUIDE);

export default function ScanCommandGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
