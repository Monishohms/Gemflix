import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPEN_API_KEY } from "./Constant";
export const OpenAI = () => {
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(OPEN_API_KEY);

  // ...

  // The Gemini 1.5 models are versatile and work with most use cases
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
};
