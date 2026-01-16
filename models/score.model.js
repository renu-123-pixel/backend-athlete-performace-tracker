import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  athlete: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Athlete",
    required: true
  },
  test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    required: true
  },
  scoreValue: Number,
  testDate: { type: Date, default: Date.now }
});

export default mongoose.model("Score", scoreSchema);
