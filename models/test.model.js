import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  testName: { type: String, required: true },
  unit: String,
  description: String
});

 const tests = mongoose.model("Test", testSchema);

export default tests;