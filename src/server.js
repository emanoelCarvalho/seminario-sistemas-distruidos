import app from "./app.js";
import { PORT } from "./config/dotenv.js";

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
