import express from "express";
import { signup, login } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected route - Example of using the authMiddleware
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Accessed protected route", user: req.user });
});

export default router;
