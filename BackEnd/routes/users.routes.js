const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const userController = require("../controllers/user.controller");

const {
  registerUser,
  getMe,
} = require("../controllers/user.controller");

const router = express.Router();

// 🔹 Create user profile
router.post("/register", authMiddleware, registerUser);

// 🔹 Get logged-in user details
router.get("/me", authMiddleware, getMe);

// get all users (admin only)
router.get("/", authMiddleware, adminMiddleware, userController.getAllUsers);

module.exports = router;
