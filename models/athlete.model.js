import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  sport: String,
  heartRate: Number,
  speed: Number,
  agility: Number,
  strength: Number,
  reaction: Number,
  performanceScore: Number,
});

const Athlete= mongoose.model("Athlete", athleteSchema);

export default Athlete;

