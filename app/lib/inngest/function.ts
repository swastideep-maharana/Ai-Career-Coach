// lib/inngest/function.ts
import { inngest } from "./client";

// Define a basic function
export const functions = [
  inngest.createFunction(
    { id: "log-user-signup", name: "Log User Signup" },
    { event: "user/signup" },
    async ({ event, step }) => {
      console.log("User signed up:", event.data);
      return { message: "Signup event logged" };
    }
  ),
];
