import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  sport: String,
  country: String
}, { timestamps: true });

const Athlete= mongoose.model("Athlete", athleteSchema);

export default Athlete;