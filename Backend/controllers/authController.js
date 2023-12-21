import UserModel from "../models/userModel.js";
import AdminModel from "../models/adminModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (userId, role) => {
  const secretKey = "thisKeyIsSupposedToBeSecret";
  const token = jwt.sign({ userId, role }, secretKey, { expiresIn: "1h" });
  return token;
};

const validateEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, contact, password } = req.body;

    if (!validateEmailFormat(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email address already exists" });
    }

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      contact,
      password,
      role: "user", // Set the role for regular users
    });
    await newUser.save();

    const token = generateToken(newUser._id, newUser.role);

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error("Error during registration:", error);
    console.error("Detailed error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid credentials: User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid credentials: Incorrect password" });
    }

    const token = generateToken(user._id, user.role);

    res.status(200).json({ user: { firstName: user.firstName }, token });
  } catch (error) {
    console.error("Error during login:", error);

    if (error.message.includes("Invalid credentials")) {
      res.status(401).json({
        message:
          "Invalid credentials: The email or password you entered is incorrect",
      });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export const adminSignup = async (req, res) => {
  try {
    const { firstName, lastName, email, contact, password } = req.body;

    if (!validateEmailFormat(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email address already exists" });
    }

    const newAdmin = new AdminModel({
      firstName,
      lastName,
      email,
      contact,
      password,
      role: "admin", // Set the role for admin users
    });
    await newAdmin.save();

    const token = generateToken(newAdmin._id, newAdmin.role);

    res.status(201).json({ admin: newAdmin, token });
  } catch (error) {
    console.error("Error during admin registration:", error);
    console.error("Detailed error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return res
        .status(401)
        .json({ message: "Invalid credentials: Admin not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid credentials: Incorrect password" });
    }

    const token = generateToken(admin._id, admin.role);

    res.status(200).json({ admin: { firstName: admin.firstName }, token });
  } catch (error) {
    console.error("Error during admin login:", error);

    if (error.message.includes("Invalid credentials")) {
      res.status(401).json({
        message:
          "Invalid credentials: The email or password you entered is incorrect",
      });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export const fetchUserInfo = async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming you store user ID in the token

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: { firstName: user.firstName } });
  } catch (error) {
    console.error("Error fetching user information:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const fetchAdminInfo = async (req, res) => {
  try {
    const adminId = req.user.userId; // Assuming you store admin ID in the token

    const admin = await AdminModel.findById(adminId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ admin: { firstName: admin.firstName } });
  } catch (error) {
    console.error("Error fetching admin information:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const fetchAdminDashboard = (req, res) => {
  try {
    // Access the admin details from the req.user object
    const admin = req.user;

    // Your custom logic for the admin dashboard
    const dashboardData = {
      adminId: admin.userId,
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      // Add any other admin-related data you want to include
    };

    res
      .status(200)
      .json({ message: "Admin dashboard accessed", dashboardData });
  } catch (error) {
    console.error("Error in fetchAdminDashboard:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
