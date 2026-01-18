import express from "express";
import { v4 as uuid } from "uuid";
import Test from "../models/test.model.js"; // Mongoose model
import { coachOnly } from "../middleware/role.middleware.js";

const router = express.Router();

// Add a new test
router.post("/", async (req, res) => {
  try {
    const test = new Test({
      id: uuid(),
      athleteId: req.body.athleteId,
      sprint30m: Number(req.body.sprint30m),
      verticalJump: Number(req.body.verticalJump), // fixed typo
      createdAt: new Date()
    });

    await test.save();
    res.status(201).json(test);
  } catch (err) {
    console.error("Error adding test:", err);
    res.status(400).json({ error: err.message });
  }
});

// Get all tests for a specific athlete
router.get("/:athleteId", async (req, res) => {
  try {
    const athleteTests = await Test.find({ athleteId: req.params.athleteId });
    res.json(athleteTests);
  } catch (err) {
    console.error("Error fetching tests:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
