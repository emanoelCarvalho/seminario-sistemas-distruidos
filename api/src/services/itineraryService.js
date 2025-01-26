import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "../config/dotenv.js";

const apiKey = new GoogleGenerativeAI(API_KEY);
const model = apiKey.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateItinerary(destination, activities, preferences) {
  const activitiesList = Array.isArray(activities) ? activities.join(", ") : activities;

  const prompt = `
    Crie um roteiro de viagem personalizado para o seguinte destino: ${destination}.
    Inclua atividades como: ${activitiesList}.
    Preferências do viajante: ${preferences}.
    Forneça um roteiro detalhado com horários, sugestões de transporte, locais para refeições e pontos turísticos.
  `;

  try {
    const result = await model.generateContent([prompt]);

    if (!result || !result.response) {
      throw new Error("Resposta da API veio vazia ou inválida.");
    }

    return result.response.text();
  } catch (error) {
    console.error("Erro ao gerar roteiro:", error.message);
    throw new Error("Erro ao processar roteiro de viagem.");
  }
}
