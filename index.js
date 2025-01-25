import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";

const app = express();
const PORT = 3000;

const apiKey = new GoogleGenerativeAI(
  "AIzaSyBIgCe5nDp3XAfD1ljb-rCBaM2K0uE3iIc"
);
const model = apiKey.getGenerativeModel({
  model: "gemini-1.5-flash",
});

app.use(cors());
app.use(bodyParser.json());

async function generateItinerary() {
  try {
    const prompt = `
        Crie um roteiro de viagem personalizado para o seguinte destino: Nova York.
        Inclua atividades como: Natureza e trilhas.
        Preferências do viajante: Viagem relaxante.
        Forneça um roteiro detalhado com horários, sugestões de transporte, locais para refeições e pontos turísticos.
      `;

    const result = await model.generateContent([prompt]);

    // Adicione verificações antes de acessar `.text()`
    if (!result || !result.response) {
      throw new Error("Resposta da API veio vazia ou inválida.");
    }

    const responseText = result.response.text(); // Pode lançar erro se estiver indefinido
    console.log("Roteiro Gerado:\n", responseText);
  } catch (error) {
    console.error("Erro ao gerar roteiro:", error.message);
  }
}

generateItinerary();
app.post("/generate-itinerary", async (req, res) => {
  try {
    const filePath = await generateItinerary(req.body);
    res.download(filePath, "itinerary.txt", () => {
      fs.unlinkSync(filePath);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
