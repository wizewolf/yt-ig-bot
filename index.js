import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook/youtube", (req, res) => {
  console.log("🎥 Video recibido desde Apps Script:");
  console.log(req.body);

  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});
