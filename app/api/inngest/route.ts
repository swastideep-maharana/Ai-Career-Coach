import { serve } from "inngest/next";

// Update the import path if necessary, for example:
import { inngest } from "../../../lib/inngest/client";
// Update the import path to match the actual file location and name
import { generateIndustryInsights } from "../../../lib/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});
