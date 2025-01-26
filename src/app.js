import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { generateItineraryHandler } from "./controllers/itineraryController.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-itinerary", generateItineraryHandler);

export default app;
