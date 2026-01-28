const taskService = require("../services/task.service");

/* CREATE TASK */
const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body, req.user.uid);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET ALL TASKS (ADMIN) */
const getAllTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

const updateTask = async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  res.json(task);
};

const deleteTask = async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.json({ message: "Task deleted" });
};

const assignTask = async (req, res) => {
  const task = await taskService.assignTask(
    req.params.id,
    req.body.userId
  );
  res.json(task);
};

const getMyTasks = async (req, res) => {
  const tasks = await taskService.getMyTasks(req.user.uid);
  res.json(tasks);
};

const updateTaskStatus = async (req, res) => {
  const task = await taskService.updateTaskStatus(
    req.params.id,
    req.user.uid,
    req.body.status
  );
  console.log("🔑 req.user.uid =", req.user.uid);
  res.json(task);
};

const getTaskStats = async (req, res) => {
  const stats = await taskService.getTaskStats();
  res.json(stats);
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  assignTask,
  getMyTasks,
  updateTaskStatus,
  getTaskStats,
};
