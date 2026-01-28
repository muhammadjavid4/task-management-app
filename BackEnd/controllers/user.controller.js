const userService = require("../services/user.service");
const { db } = require("../config/db");

// 🔹 Register user profile (after Firebase signup)
const registerUser = async (req, res) => {
  try {
    const { name } = req.body;
    const { uid, email } = req.user;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const user = await userService.createUser({
      uid,
      name,
      email,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Registration failed",
    });
  }
};

// 🔹 Get logged-in user (for role based redirect)
const getMe = async (req, res) => {
  try {
    const { uid } = req.user;

    const userDoc = await db.collection("users").doc(uid).get();

    if (!userDoc.exists) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      uid,
      ...userDoc.data(),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Failed to fetch user",
    });
  }
};

const getAllUsers = async (req, res) => {
  const snap = await db.collection("users").get();

  const users = snap.docs.map(doc => ({
    uid: doc.id,
    ...doc.data(),
  }));
  console.log("USERS 👉", users);
  res.json(users);
};


module.exports = {
  registerUser,
  getMe,
    getAllUsers,
};
