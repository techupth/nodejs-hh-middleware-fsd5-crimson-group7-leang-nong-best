export const validateUserCredentials = (req, res, next) => {
  const { email, password } = req.body;

  // Check if email is provided and is a valid email format
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({
      message: "Please provide a valid email address",
    });
  }

  // Check if password is provided and meets certain criteria
  if (!password || password.length < 8) {
    return res.status(400).json({
      message: "Password must be at least 8 characters long",
    });
  }

  next();
};

// Helper function to validate email format
const isValidEmail = (email) => {
  // Use a regular expression for basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

//Using Validation----------------------------------

const express = require("express");
const app = express();

// Import the validation middleware
import { validateUserCredentials } from "./middlewares/validation";

// Route that uses the validation middleware
app.post("/register", validateUserCredentials, (req, res) => {
  // If the request passes the validation, handle the registration logic here
  res.status(200).json({ message: "User registered successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
