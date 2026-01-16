import express from "express";
import { v4 as uuid } from "uuid";
import tests from "../models/test.model.js";
import { coachOnly } from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/", coachOnly, (req, res) => {
  const test = {
    id: uuid(),
    athleteId: req.body.athleteId,
    sprint30m: Number(req.body.sprint30m),
    verticalJump: Number(req.body.verticalJump),
    createdAt: new Date()
  };

  tests.push(test);
  res.status(201).json(test);
});

router.get("/:athleteId", (req, res) => {
  const result = tests.filter(
    t => t.athleteId === req.params.athleteId
  );
  res.json(result);
});

export default router;
