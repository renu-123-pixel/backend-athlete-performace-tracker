import Score from "../models/score.model.js";

// Add score
export const addScore = async (req, res) => {
  try {
    const score = await Score.create({
      ...req.body,
      performanceScore: Number(req.body.performanceScore),
      heartRate: Number(req.body.heartRate),
      speed: Number(req.body.speed),
      agility: Number(req.body.agility),
      strength: Number(req.body.strength),
      reaction: Number(req.body.reaction)
    });

    res.status(201).json(score);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get all scores with athlete + test details
export const getScores = async (req, res) => {
  try {
    const scores = await Score.find()
    .sort({ performanceScore: -1 })
      .populate("athlete")
      .populate("test");

    console.log(
      "✅ Sorted scores from DB:",
      scores.map(s => s.performanceScore)
    );

    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

