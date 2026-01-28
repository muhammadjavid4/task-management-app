const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const testRoutes = require("./routes/test.routes");
const userRoutes = require("./routes/users.routes");
const taskRoutes = require("./routes/tasks.routes");


app.use("/api/tasks", taskRoutes);
app.use("/api", testRoutes);
app.use("/api/users", userRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API");
});

module.exports = app;