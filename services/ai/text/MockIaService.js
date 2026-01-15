import { AIService } from "./TextAIService.js";

export class MockIaService extends AIService {
  async generateIdeas() {
    return {
      images: ["Mock 1", "Mock 2", "Mock 3"],
      copies: ["Texto mock A", "Texto mock B", "Texto mock C"]
    };
  }
}