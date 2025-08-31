import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected : Youhou !");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
