// Import required modules
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/authRouter.js";
import menuRoutes from "./routes/menuRouter.js";
import reviewRoutes from "./routes/reviewRouter.js";

// Express.js configuration
const app = express();
const port = 5000;

// dotenv configuration
dotenv.config();

// Middleware setup
app.use(cors({ origin: "https://fast-food-app-rose.vercel.app" }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection setup
const url =
  "mongodb+srv://fast-food:" +
  process.env.MONGO_PASSWORD +
  "@cluster0.yeflsll.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Not Connected to MongoDB"));

// Use express.static with the correct directory
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "uploads")));

// Routes setup
app.use("/auth", authRoutes);
app.use("/menu", menuRoutes);
app.use("/review", reviewRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello Bilal");
});

// Server setup
app.listen(port, () => {
  console.log("App is running on port: " + port);
});
