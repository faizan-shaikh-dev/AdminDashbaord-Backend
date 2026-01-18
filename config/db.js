import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection successfull");
  } catch (error) {
    console.log("Database connection error");
    process.exit(1);
  }
};

export default connectDB;