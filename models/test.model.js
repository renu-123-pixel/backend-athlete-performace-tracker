import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  unit: String,
  description: String
});

export default mongoose.model("Test", testSchema);

