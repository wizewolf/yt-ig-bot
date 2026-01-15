import { ImageAiService } from "./ImageAiService.js";

export class MockImage extends ImageAiService {
  async generateImages(prompts) {
    return prompts.map((p, i) => ({
      id: i + 1,
      url: `https://placehold.co/1080x1920?text=${encodeURIComponent(p)}`
    }));
  }
}