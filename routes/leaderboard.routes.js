
import express from "express";
import Athlete from "../models/athlete.model.js";
import { coachOnly } from "../middleware/role.middleware.js";

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const athletes = await Athlete.find()
      .sort({ performanceScore: -1 });

    console.log(
      "Sorted athletes:",
      athletes.map(a => a.performanceScore)
    );

    res.json(athletes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
