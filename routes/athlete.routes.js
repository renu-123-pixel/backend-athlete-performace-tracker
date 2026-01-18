import express from "express";
import Athlete from "../models/athlete.model.js"; // Mongoose model
import { coachOnly } from "../middleware/role.middleware.js";

const router = express.Router();

// Get all athletes
router.get("/", async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.json(athletes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new athlete
router.post("/", async (req, res) => {
  try {
    const athlete = new Athlete({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      sport: req.body.sport,
      heartRate: req.body.heartRate,
      speed: req.body.speed,
      agility: req.body.agility,
      strength: req.body.strength,
      reaction: req.body.reaction,
      performanceScore: req.body.performanceScore,
    });

    await athlete.save();
    res.status(201).json(athlete);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Athlete.findByIdAndDelete(req.params.id);
    res.json({ message: "Athlete deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
});


export default router;
