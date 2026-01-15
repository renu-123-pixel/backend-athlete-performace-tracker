import express from "express";
import { athletes } from "../models/athlete.model.js";
import { tests } from "../models/test.model.js";

const router = express.Router();

router.get("/", (req, res) => {
  const leaderboard = [];

  for (const athlete of athletes) {
    const athleteTests = tests.filter(
      t => t.athleteId === athlete.id
    );

    if (athleteTests.length === 0) continue;

    const latestTest = athleteTests[athleteTests.length - 1];

    const sprintScore = (10 / latestTest.sprint30m) * 50;
    const jumpScore = (latestTest.verticalJump / 100) * 50;

    const totalScore = Math.round(sprintScore + jumpScore);

    leaderboard.push({
      athleteName: athlete.name,
      totalScore,
      badge: totalScore >= 80 ? "Level 1 Athlete" : "—"
    });
  }

  leaderboard.sort((a, b) => b.totalScore - a.totalScore);
  res.json(leaderboard);
});

export default router;
