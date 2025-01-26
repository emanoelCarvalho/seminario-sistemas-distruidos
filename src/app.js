import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { generateItineraryHandler } from "./controllers/itineraryController.js";
import { PORT } from "./config/dotenv.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-itinerary", generateItineraryHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
