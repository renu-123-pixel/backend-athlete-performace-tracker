
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import athleteRoutes from "./routes/athlete.routes.js";
import testRoutes from "./routes/test.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";
import scoreRoutes from "./routes/score.routes.js";
import Score from "./models/score.model.js"; // ← IMPORT MISSING

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/athletes", athleteRoutes);
app.use("/tests", testRoutes);
app.use("/scores", scoreRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/api/athletes", athleteRoutes);

app.get("/", (req, res) => res.send("Peak Athlete Backend Running"));
 const PORT = process.env.PORT || 5000;;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


