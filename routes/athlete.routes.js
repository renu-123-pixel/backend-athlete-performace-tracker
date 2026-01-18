import express from "express";
import Athlete from "../models/athlete.model.js";

const router = express.Router();

// GET all athletes
router.get("/", async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.json(athletes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new athlete
router.post("/", async (req, res) => {
  try {
    const athlete = new Athlete(req.body);
    await athlete.save();
    res.status(201).json(athlete);
  } catch (err) {
    res.status(500).json({ error: err.message });
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
