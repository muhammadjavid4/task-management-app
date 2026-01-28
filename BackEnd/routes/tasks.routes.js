const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const taskController = require("../controllers/task.controller");

const router = express.Router();

/* 🔴 ADMIN ROUTES */
router.post("/", authMiddleware, adminMiddleware, taskController.createTask);
router.get("/", authMiddleware, adminMiddleware, taskController.getAllTasks);
router.put("/:id", authMiddleware, adminMiddleware, taskController.updateTask);
router.delete("/:id", authMiddleware, adminMiddleware, taskController.deleteTask);
router.put("/:id/assign", authMiddleware, adminMiddleware, taskController.assignTask);
router.get("/stats", authMiddleware, adminMiddleware, taskController.getTaskStats);


/* 🟢 USER ROUTES */
router.get("/my", authMiddleware, taskController.getMyTasks);
router.patch("/:id/status", authMiddleware, taskController.updateTaskStatus);

module.exports = router;
