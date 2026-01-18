
import express from "express";
import Athlete from "../models/athlete.model.js";
import { coachOnly } from "../middleware/role.middleware.js";

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const athletes = await Athlete.find()
      .sort({ performanceScore: -1 })
      .populate("athlete");

    console.log(
      "Sorted athletes:",
      athletes.map(a => a.performanceScore)
    );

    res.json(athletes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new athlete
router.post("/", async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      sport,
      heartRate = 0,
      speed = 0,
      agility = 0,
      strength = 0,
      reaction = 0,
      performanceScore
    } = req.body;

    // Calculate performanceScore if not provided
    const finalPerformanceScore =
      performanceScore !== undefined && performanceScore !== null
        ? performanceScore
        : Math.round((heartRate + speed + agility + strength + reaction) / 5);

    const athlete = new Athlete({
      name,
      age,
      gender,
      sport,
      heartRate,
      speed,
      agility,
      strength,
      reaction,
      performanceScore: finalPerformanceScore
    });

    await athlete.save();
    res.status(201).json(athlete);
  } catch (err) {
    console.error("Error adding athlete:", err);
    res.status(400).json({ error: err.message });
  }
});

export default router;
