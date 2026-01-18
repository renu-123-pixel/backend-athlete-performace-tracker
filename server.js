import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import athleteRoutes from "./routes/athlete.routes.js";
import testRoutes from "./routes/test.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";
import scoreRoutes from "./routes/score.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Test root
app.get("/", (req, res) => res.send("Peak Athlete Backend Running"));

// Mount routes at /api/*
app.use("/api/athletes", athleteRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
