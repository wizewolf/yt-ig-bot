import { ReplicateImage } from "./ReplicateImage.js";
import { MockImage } from "./MockImage.js";

export function createImageAiService() {
  switch (process.env.IMAGE_AI_PROVIDER) {
    case "replicate":
      return new ReplicateImage();
    case "mock":
    default:
      return new MockImage();
  }
}