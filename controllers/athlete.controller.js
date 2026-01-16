
import Athlete from "../models/athlete.model.js";

// Create athlete
export const createAthlete = async (req, res) => {
  try {
    const athlete = await Athlete.create(req.body);
    res.status(201).json(athlete);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all athletes
export const getAthletes = async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.json(athletes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
