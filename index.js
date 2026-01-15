import express from "express";
import { createTextAIService } from "./services/ai/text/index.js";
import { createImageAIService } from "./services/ai/image/index.js";

const app = express();
app.use(express.json());

// 🧠 Inyección de dependencias (como ServiceProvider)
const textAIService = createTextAIService();
const imageAIService = createImageAIService();

app.post("/webhook/youtube", async (req, res) => {
  try {
    const video = req.body;

    console.log("🎥 Webhook YouTube recibido:", {
      videoId: video.videoId,
      title: video.title
    });

    // ============================
    // 1️⃣ IA DE TEXTO
    // ============================
    console.log("🧠 Generando ideas de texto...");
    const textIdeas = await textAIService.generateIdeas(video);

    /*
      textIdeas = {
        images: [prompt1, prompt2, prompt3],
        copies: [copy1, copy2, copy3]
      }
    */

    console.log("✍️ Ideas generadas:", textIdeas);

    // ============================
    // 2️⃣ IA DE IMÁGENES
    // ============================
    console.log("🖼 Generando imágenes...");
    const images = await imageAIService.generateImages(textIdeas.images);

    /*
      images = [
        { id: 1, url: "...", prompt: "..." },
        { id: 2, url: "...", prompt: "..." },
        { id: 3, url: "...", prompt: "..." }
      ]
    */

    console.log("🖼 Imágenes generadas:", images);

    // ============================
    // 3️⃣ ARMADO DEL PAYLOAD FINAL
    // ============================
    const payload = {
      video: {
        id: video.videoId,
        title: video.title,
        url: `https://youtube.com/watch?v=${video.videoId}`
      },
      options: images.map((img, index) => ({
        option: index + 1,
        imageUrl: img.url,
        copy: textIdeas.copies[index]
      }))
    };

    console.log("📦 Payload final:", payload);

    // ============================
    // 4️⃣ WHATSAPP (FUTURO)
    // ============================
    // sendWhatsAppMenu(payload);

    // ============================
    // 5️⃣ GUARDAR ESTADO (FSM)
    // ============================
    // saveState(video.videoId, payload);

    res.sendStatus(200);
  } catch (error) {
    console.error("❌ Error en webhook:", error);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀 Backend escuchando");
});
