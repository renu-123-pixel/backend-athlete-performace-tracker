import Score from "../models/score.model.js";

// Add score
export const addScore = async (req, res) => {
  try {
    const score = await Score.create(req.body);
    res.status(201).json(score);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all scores with athlete + test details
export const getScores = async (req, res) => {
  try {
    const scores = await Score.find()
      .populate("athlete")
      .populate("test");
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
