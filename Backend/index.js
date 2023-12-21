// Import required modules
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import session from "express-session";
import passport from "passport";
import { googleOAuthSetup } from "./passport-setup.js";
import authRoutes from "./routes/authRouter.js";
import menuRoutes from "./routes/menuRouter.js";
import reviewRoutes from "./routes/reviewRouter.js";

// Express.js configuration
const app = express();
const port = process.env.PORT || 4000;

app.use(
  session({
    secret: "thisKeyIsSupposedToBeSecret",
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// dotenv configuration
dotenv.config();

// Middleware setup
app.use(
  cors({
    origin: ["https://fast-food-frontend-mocha.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Google OAuth setup
googleOAuthSetup(passport);

// MongoDB connection setup
const url =
  "mongodb+srv://fast-food:bilalfastfood11@cluster0.yeflsll.mongodb.net/?retryWrites=true&w=majority";

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
