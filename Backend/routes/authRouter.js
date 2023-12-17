import express from "express";
import { signup, login } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Accessed protected route", user: req.user });
});

export default router;
