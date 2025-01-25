import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const apiKey = new GoogleGenerativeAI(process.env.APIKEY);
console.log(apiKey)
const model = apiKey.getGenerativeModel({
  model: "gemini-1.5-flash",
});

app.use(cors());
app.use(bodyParser.json());

app.post("/generate-itinerary", async (req, res) => {
  try {
    const { destination, activities, preferences } = req.body;

    if (!destination || !activities || !preferences) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    // Garantir que activities seja um array
    const activitiesList = Array.isArray(activities)
      ? activities.join(", ")
      : activities;

    const prompt = `
      Crie um roteiro de viagem personalizado para o seguinte destino: ${destination}.
      Inclua atividades como: ${activitiesList}.
      Preferências do viajante: ${preferences}.
      Forneça um roteiro detalhado com horários, sugestões de transporte, locais para refeições e pontos turísticos.
    `;

    const result = await model.generateContent([prompt]);

    if (!result || !result.response) {
      throw new Error("Resposta da API veio vazia ou inválida.");
    }

    const responseText = result.response.text();

    // Criar conteúdo Markdown formatado
    const markdownContent = `# Roteiro de Viagem para ${destination}

## 📍 Destino
${destination}

## 🎯 Atividades
${activitiesList}

## 🏖️ Preferências do Viajante
${preferences}

---

${responseText}
`;

    // Criar arquivo Markdown
    const filePath = "./itinerary.md";
    fs.writeFileSync(filePath, markdownContent);

    res.download(filePath, "roteiro_viagem.md", () => {
      fs.unlinkSync(filePath); // Remove o arquivo após o download
    });
  } catch (error) {
    console.error("Erro ao gerar roteiro:", error.message);
    res.status(500).send("Erro interno do servidor.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
