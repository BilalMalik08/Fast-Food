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
const port = process.env.PORT || 5000;

// dotenv configuration
dotenv.config();

// Middleware setup
// const corsOptions = {
//   origin: "https://fast-food-app-omega.vercel.app",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// Use CORS middleware in your Express app
// app.use(cors(corsOptions));
app.use(cors());
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

// Server setup
app.listen(port, () => {
  console.log("App is running on port: " + port);
});
