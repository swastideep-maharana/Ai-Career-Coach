import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { functions } from "@/lib/inngest/function";

export const { GET, POST } = serve(inngest, functions);
