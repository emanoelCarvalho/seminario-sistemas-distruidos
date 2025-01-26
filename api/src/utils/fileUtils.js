import fs from "fs";

export function saveItineraryToFile(destination, activities, preferences, content) {
  const filePath = "./itinerary.md";
  const markdownContent = `# Roteiro de Viagem para ${destination}

## 📍 Destino
${destination}

## 🎯 Atividades
${activities}

## 🏖️ Preferências do Viajante
${preferences}

---

${content}
`;

  fs.writeFileSync(filePath, markdownContent);
  return filePath;
}

export function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}
