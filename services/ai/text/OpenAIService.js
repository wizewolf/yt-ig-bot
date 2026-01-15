import OpenAI from "openai";
import { AIService } from "./TextAIService.js";

export class OpenAIService extends AIService {
  constructor() {
    super();
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateIdeas(video) {
    // llamada real a OpenAI
  }
}