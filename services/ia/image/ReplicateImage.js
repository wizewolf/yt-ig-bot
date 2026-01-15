import Replicate from "replicate";
import { ImageAiService } from "./ImageAiService.js";

export class ReplicateImage extends ImageAiService {
  constructor() {
    super();
    this.client = new Replicate({
      auth: process.env.REPLICATE_API_KEY
    });
  }

  async generateImages(prompts) {
    const images = [];

    for (const prompt of prompts) {
      const output = await this.client.run(
        "stability-ai/stable-diffusion",
        { input: { prompt } }
      );

      images.push({ prompt, url: output[0] });
    }

    return images;
  }
}