import OpenAI from "openai";
import { IaService } from "./TextIaService.js";

export class OpenAIService extends IaService {
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