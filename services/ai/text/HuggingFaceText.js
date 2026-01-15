import fetch from "node-fetch";
import { IaService } from "./TextIaService.js";

export class HuggingFaceService extends IaService {
  async generateIdeas(video) {
    return {
      images: [
        `Escena épica de ${video.title}`,
        `Estilo minimal para ${video.title}`,
        `Thumbnail con texto grande`
      ],
      copies: [
        "🔥 Nuevo video arriba",
        "🎮 Ya disponible en YouTube",
        "🚀 Miralo ahora"
      ]
    };
  }
}