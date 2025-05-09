import { GoogleGenerativeAI } from "@google/generative-ai";
import { geminiRateLimiter } from "./rate-limiter";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getGeminiResponse(prompt, retries = 3) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  let lastError;
  
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      await geminiRateLimiter.waitForAvailableSlot();
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      lastError = error;
      if (error.message.includes('429') && attempt < retries - 1) {
        // Exponential backoff
        await new Promise(resolve => 
          setTimeout(resolve, Math.pow(2, attempt) * 1000)
        );
        continue;
      }
      break;
    }
  }
  
  throw new Error(`AI service unavailable: ${lastError.message}`);
}