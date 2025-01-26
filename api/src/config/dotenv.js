import dotenv from "dotenv";

dotenv.config();

export const API_KEY = process.env.APIKEY || "";
export const PORT = process.env.PORT || 3000;
