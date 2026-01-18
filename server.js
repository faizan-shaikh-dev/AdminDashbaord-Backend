import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js"
import { adminAuth } from "./middleware/auth.middleware.js";
dotenv.config();
connectDB();
const app = express();

app.use(cors({ origin: "https://dashboard-app-fawn-two.vercel.app/login", credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server  is running");
});

//Auth Base Route
app.use('/api/auth',authRoutes);

//Product Base Route
app.use('/api/product',adminAuth, productRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
