import express from "express";
import {
  signup,
  login,
  adminSignup,
  adminLogin,
  fetchUserInfo,
  fetchAdminInfo,
  fetchAdminDashboard, // Import the new controller
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// User Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/userinfo", authMiddleware, fetchUserInfo);

// Admin Routes
router.post("/admin/signup", adminSignup);
router.post("/admin/login", adminLogin);
router.get("/admin/info", authMiddleware, fetchAdminInfo);
router.get("/admin/dashboard", authMiddleware, fetchAdminDashboard); // Add this route

// Protected Route for testing authentication middleware
router.get("/test", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Protected route accessed successfully" });
});

export default router;
