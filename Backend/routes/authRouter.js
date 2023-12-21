// authRouter.js

import express from "express";
import passport from "passport";
import {
  signup,
  login,
  fetchUserInfo,
  fetchAdminInfo,
  fetchAdminDashboard,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// User Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/userinfo", authMiddleware, fetchUserInfo);

// Admin Routes
router.get("/admin/info", authMiddleware, fetchAdminInfo);
router.get("/admin/dashboard", authMiddleware, fetchAdminDashboard);

// Protected Route for testing authentication middleware
router.get("/test", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Protected route accessed successfully" });
});

// Google OAuth Routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Redirect the user to Google for authentication
router.get(
  "/google/signup",
  passport.authenticate("google-signup", { scope: ["profile", "email"] })
);

// Google callback for sign-up
router.get(
  "/google/signup/callback",
  passport.authenticate("google-signup", {
    successRedirect: "/signup-success", // Redirect to signup success page
    failureRedirect: "/signup-failure", // Redirect to signup failure page
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/google/error" }),
  (req, res) => {
    res.redirect("/google/success"); // Successful authentication, redirect success.
  }
);

router.get("/google/success", async (req, res) => {
  // Handle success, e.g., register or log in the user
  res.send("Google login successful");
});

router.get("/google/error", (req, res) => {
  // Handle error during Google login
  res.send("Error logging in via Google");
});

router.get("/signout", (req, res) => {
  try {
    req.logout();
    res.render("auth");
  } catch (err) {
    res.status(400).send({ message: "Failed to sign out user" });
  }
});

export default router;
