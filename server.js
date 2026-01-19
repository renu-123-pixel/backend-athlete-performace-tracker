import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import testRoutes from "./routes/test.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";
import scoreRoutes from "./routes/score.routes.js";
import athleteRoutes from "./routes/athlete.routes.js"; // ✅ IMPORTANT

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

// API routes
app.use("/api/tests", testRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/athletes", athleteRoutes);      // CRUD
app.use("/api/leaderboard", leaderboardRoutes); // ranking view

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
