import mongoose from "mongoose";
import { MONGO_URI } from "./dotenv";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully on " + MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;