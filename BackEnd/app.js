const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
// app.use(cors());
const allowedOrigins = [
  "http://localhost:5173",        // Vite local
  "http://localhost:3000",
  "https://your-frontend.vercel.app",
  "https://task-management-app-lime-three.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
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