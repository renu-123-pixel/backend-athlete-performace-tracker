import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  athlete: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Athlete",
    required: true
  },

  heartRate: {
    type: Number,
    required: true
  },

  speed: {
    type: Number,
    required: true
  },

  agility: {
    type: Number,
    required: true
  },

  strength: {
    type: Number,
    required: true
  },

  reaction: {
    type: Number,
    required: true
  },

  performanceScore: {
    type: Number,
    required: true
  },

  testDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Score", scoreSchema);
