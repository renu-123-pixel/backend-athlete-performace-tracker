import express from "express";
import { v4 as uuid } from "uuid";
import { athletes } from "../models/athlete.model.js";
import { coachOnly } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(athletes);
});

router.post("/", coachOnly, (req, res) => {
  const athlete = {
    id: uuid(),
    name: req.body.name,
    age: req.body.age,
    sport: req.body.sport
  };

  athletes.push(athlete);
  res.status(201).json(athlete);
});

router.put("/:id", coachOnly, (req, res) => {
  const athlete = athletes.find(a => a.id === req.params.id);
  if (!athlete) {
    return res.status(404).json({ error: "Athlete not found" });
  }

  athlete.name = req.body.name ?? athlete.name;
  athlete.age = req.body.age ?? athlete.age;
  athlete.sport = req.body.sport ?? athlete.sport;

  res.json(athlete);
});

router.delete("/:id", coachOnly, (req, res) => {
  const index = athletes.findIndex(a => a.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Athlete not found" });
  }

  athletes.splice(index, 1);
  res.json({ message: "Athlete deleted" });
});

export default router;
