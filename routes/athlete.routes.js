import express from "express";
import Athlete from "../models/athlete.model.js";

const router = express.Router();

// GET all athletes (sorted)
router.get("/", async (req, res) => {
  try {
    const athletes = await Athlete.find().sort({ performanceScore: -1 });

    console.log(
      "Sorted athletes:",
      athletes.map(a => a.performanceScore)
    );

    res.json(athletes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD athlete
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

    const finalPerformanceScore =
      performanceScore ?? Math.round(
        (heartRate + speed + agility + strength + reaction) / 5
      );

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

// DELETE athlete
router.delete("/:id", async (req, res) => {
  try {
    await Athlete.findByIdAndDelete(req.params.id);
    res.json({ message: "Athlete deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
