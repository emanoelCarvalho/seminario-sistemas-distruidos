import { generateItinerary } from "../services/itineraryService.js";
import { saveItineraryToFile, deleteFile } from "../utils/fileUtils.js";

export async function generateItineraryHandler(req, res) {
  try {
    const { destination, activities, preferences } = req.body;

    if (!destination || !activities || !preferences) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    const itineraryContent = await generateItinerary(destination, activities, preferences);
    const filePath = saveItineraryToFile(destination, activities, preferences, itineraryContent);

    res.download(filePath, "roteiro_viagem.md", () => {
      deleteFile(filePath);
    });
  } catch (error) {
    console.error("Erro ao gerar roteiro:", error.message);
    res.status(500).send("Erro interno do servidor.");
  }
}
