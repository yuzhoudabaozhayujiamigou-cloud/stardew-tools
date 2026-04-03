import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("terminal-commands-list");

export const metadata = createGuideMetadata(GUIDE);

export default function TerminalCommandsListGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
