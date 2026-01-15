# 🎬 YouTube → IA → Instagram Automation

Automatización end-to-end que detecta cuando un video de YouTube se publica, genera contenido con IA (texto e imágenes), interactúa por WhatsApp para aprobación y publica historias en Instagram.

Proyecto pensado para **creadores de contenido** que quieren ahorrar tiempo y mantener control humano antes de publicar.

---

## 🚀 Flujo general

1. Subís un video a YouTube y lo programás
2. YouTube lo pasa a **Público**
3. Un **sistema de automatización / scheduler** detecta el cambio (polling o eventos)
4. Se dispara el backend
5. IA genera:
   - Texto sugerido
   - 3 imágenes sugeridas
6. El bot envía opciones por WhatsApp
7. Elegís imagen, texto, menciones y link
8. Se publica automáticamente como **Historia de Instagram**

---

## 🧠 Arquitectura

```text
YouTube
   ↓
Automation / Scheduler
   ↓
Node.js Backend
   ↓
IA (Texto + Imágenes)
   ↓
WhatsApp (Aprobación)
   ↓
Instagram Stories
```

> El sistema de automatización puede ser n8n, cron jobs, cloud workflows o cualquier orquestador compatible con webhooks.

---

## 🛠️ Tecnologías

- **Node.js (ES Modules)**
- **Express**
- **Automation / Scheduler** (polling o eventos)
- **Render** (hosting backend)
- **GitHub Actions** (deploy automático)
- **IA (pluggable)**:
  - Texto: OpenAI / HuggingFace / Mock
  - Imagen: Replicate / Stable Diffusion / Mock
- **WhatsApp API** (pendiente de implementación)
- **Instagram Graph API** (pendiente de implementación)

---

## 📁 Estructura del proyecto

```text
src/
 ├─ index.js
 ├─ routes/
 │   └─ youtubeWebhook.js
 ├─ services/
 │   └─ ai/
 │      ├─ text/
 │      │  ├─ index.js
 │      │  ├─ TextAIService.js
 │      │  └─ OpenAIService.js
 │      └─ image/
 │         ├─ index.js
 │         ├─ ImageAIService.js
 │         └─ ReplicateImageService.js
```

---

## 🧩 Diseño por Interfaces (Strategy Pattern)

El sistema de IA está desacoplado para permitir cambiar proveedores sin tocar el resto del código.

### Texto
```text
TextAIService
  ├─ OpenAIService
  ├─ HuggingFaceService
  └─ MockTextService
```

### Imágenes
```text
ImageAIService
  ├─ ReplicateImageService
  ├─ StableDiffusionService
  └─ MockImageService
```

---

## 🔌 Webhook

El backend expone un endpoint que puede ser consumido por cualquier sistema de automatización:

```http
POST /webhook/youtube
```

Ejemplo de payload esperado:

```json
{
  "videoId": "abc123",
  "title": "Nuevo video",
  "publishedAt": "2026-01-14T18:00:00Z",
  "url": "https://youtube.com/watch?v=abc123"
}
```

> YouTube no ofrece webhooks nativos para publicaciones, por lo que se utiliza **polling o detección indirecta**.

---

## 💬 WhatsApp (pendiente de implementación)

Flujo conversacional esperado:

```text
Bot: Elegí una imagen
1 - Imagen 1
2 - Imagen 2
3 - Imagen 3

Usuario: 2
Bot: ¿Agrego el link de YouTube?
Usuario: Sí
Bot: ¿A quién mencionamos? (@usuario)
Usuario: @lima
Bot: Preview final
Usuario: Confirmar
Bot: Publicado 🎉
```

---

## 📦 Instalación local

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
npm run dev
```

---

## 🌍 Variables de entorno

```env
PORT=3000

# IA
OPENAI_API_KEY=
REPLICATE_API_TOKEN=

# Futuro
WHATSAPP_TOKEN=
INSTAGRAM_TOKEN=
```

---

## ☁️ Deploy

- **Backend**: Render
- **Trigger**: cualquier sistema de automatización compatible con HTTP
- **Deploy automático** desde `main`

---

## 🔐 Git Flow

- Rama `main` protegida
- Push directo bloqueado
- Pull Request obligatorio
- Aprobación requerida
- Deploy automático

---

## 🧪 Estado del proyecto

- ✅ Webhook funcionando
- ✅ Arquitectura IA desacoplada
- ⏳ WhatsApp API
- ⏳ Instagram API
- ⏳ Análisis de video

---

## 📄 Licencia

MIT

---

## ✨ Autor

Matias  
Desarrollador Backend (PHP / Node.js)