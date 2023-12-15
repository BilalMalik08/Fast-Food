import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (userId) => {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign({ userId }, secretKey, { expiresIn: "1h" });
  return token;
};

export const signup = async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, email, contact, password } = req.body;

    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email address already exists" });
    }

    // Create a new user
    const newUser = new UserModel({ name, email, contact, password });
    await newUser.save();

    // Generate a token for the new user
    const token = generateToken(newUser._id);

    // Return the user and token in the response
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a token for the authenticated user
    const token = generateToken(user._id);

    // Respond with user data and token
    res.status(200).json({ user, token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
