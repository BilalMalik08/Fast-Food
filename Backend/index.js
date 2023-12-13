// Import required modules
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import passportJwt from "passport-jwt";
import path from "path";
import User from "./models/User.js";
import authRoutes from "./routes/auth.js";
import menuRoutes from "./routes/menuRouter.js";
import reviewRoutes from "./routes/reviewRouter.js";

// Express.js configuration
const app = express();
const port = 5000;

// dotenv configuration
dotenv.config();

// Middleware setup
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
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

// Setup passport-jwt
let opts = {};
opts.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new passportJwt.Strategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

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
