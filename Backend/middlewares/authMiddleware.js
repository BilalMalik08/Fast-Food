import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if token is not provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Attach the decoded user to the request object for later use in routes
    req.user = decoded;

    // Check if the route is restricted to admins
    if (req.originalUrl.startsWith("/admin") && decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden: Admin access required" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authMiddleware;
