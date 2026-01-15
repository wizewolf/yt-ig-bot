import { OpenAIService } from "./OpenAIService.js";
import { HuggingFaceService } from "./HuggingFaceService.js";
import { MockIaService } from "./MockIaService.js";

export function createIaService() {
  switch (process.env.TEXT_AI_PROVIDER) {
    case "openai":
      return new OpenAIService();
    case "huggingface":
      return new HuggingFaceService();
    case "mock":
    default:
      return new MockIaService();
  }
}