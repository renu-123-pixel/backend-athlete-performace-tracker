import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
    unique: true
  },

  unit: {
    type: String,
    enum: ["bpm", "sec", "ms", "kg", "score"],
    default: "score"
  },

  description: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Test", testSchema);
