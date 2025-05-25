// app/api/inngest/route.ts
import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
// Update the import path below if the correct file is 'functions' (plural) or adjust to the actual file name
import { functions } from "@/lib/inngest/functions";

export const { GET, POST } = serve({ client: inngest, functions });
