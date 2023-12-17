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

const validateEmailFormat = (email) => {
  // Regular expression for a simple email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, contact, password } = req.body;

    // Check if the email is in a valid format
    if (!validateEmailFormat(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email address already exists" });
    }

    // If the email doesn't exist and has a valid format, proceed with user creation
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      contact,
      password,
    });
    await newUser.save();

    const token = generateToken(newUser._id);

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

    const token = generateToken(user._id);

    // Include the user's first name in the response
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
