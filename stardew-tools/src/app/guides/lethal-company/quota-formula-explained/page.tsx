import { LethalGuidePage } from "../LethalGuidePage";
import { createGuideMetadata, getLethalGuide } from "../guide-config";

const GUIDE = getLethalGuide("quota-formula-explained");

export const metadata = createGuideMetadata(GUIDE);

export default function QuotaFormulaExplainedGuidePage() {
  return <LethalGuidePage guide={GUIDE} />;
}
