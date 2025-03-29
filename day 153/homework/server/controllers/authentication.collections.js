// controllers/auth.controller.js
import User from "../models/user.model.js";

export const signUp = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { name, surname, gmail, age, password } = req.body;
    
    if (!gmail || !password || !name || !surname) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    const existingUser = await User.findOne({ gmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const newUser = new User({
      name,
      surname,
      gmail,
      age,
      password,
      verificationToken: "simple-token-" + Date.now(),
      verificationTokenExpireDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });
    
    await newUser.save();
    res.status(201).json({ message: "User created successfully. Please verify your account." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { gmail, password } = req.body;
    if (!gmail || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    
    const user = await User.findOne({ gmail });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        surname: user.surname,
        gmail: user.gmail,
        role: user.role,
        avatar: user.avatar
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { gmail } = req.body;
    const user = await User.findOne({ gmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const resetToken = "reset-" + Date.now();
    user.verificationToken = resetToken;
    user.verificationTokenExpireDate = new Date(Date.now() + 1 * 60 * 60 * 1000);
    await user.save();
    
    res.status(200).json({ message: "Password reset link has been generated", resetToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required" });
    }
    
    const user = await User.findOne({ 
      verificationToken: token, 
      verificationTokenExpireDate: { $gt: Date.now() } 
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired link" });
    }
    
    user.password = newPassword;
    user.verificationToken = undefined;
    user.verificationTokenExpireDate = undefined;
    await user.save();
    
    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};