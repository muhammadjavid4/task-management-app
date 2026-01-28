const { db } = require("../config/db");

/* CREATE TASK */
const createTask = async (data, adminId) => {
  const task = {
    title: data.title,
    description: data.description || "",
    status: "pending",
    assignedTo: data.assignedTo || null, // ✅ FIX
    createdBy: adminId,
    createdAt: new Date(),
  };

  console.log("SAVING TASK 👉", task);

  const ref = await db.collection("tasks").add(task);
  return { id: ref.id, ...task };
};

/* GET ALL TASKS */
const getAllTasks = async () => {
  const snap = await db.collection("tasks").get();
  const tasks = [];

  for (const doc of snap.docs) {
    const data = doc.data();
    let assignedUser = null;

    if (data.assignedTo) {
      const userSnap = await db
        .collection("users")
        .doc(data.assignedTo)
        .get();

      if (userSnap.exists) {
        assignedUser = {
          uid: userSnap.id,
          ...userSnap.data(),
        };
      }
    }

    tasks.push({
      id: doc.id,
      ...data,
      assignedUser,
    });
  }

  return tasks;
};

const updateTask = async (id, data) => {
  await db.collection("tasks").doc(id).update(data);
  return { id, ...data };
};

const deleteTask = async (id) => {
  await db.collection("tasks").doc(id).delete();
};

const assignTask = async (id, userId) => {
  await db.collection("tasks").doc(id).update({
    assignedTo: userId,
  });
};

const getMyTasks = async (userId) => {
  const snap = await db
    .collection("tasks")
    .where("assignedTo", "==", userId)
    .get();

  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

const updateTaskStatus = async (taskId, userId, status) => {
  const ref = db.collection("tasks").doc(taskId);
  const snap = await ref.get();
  console.log("📌 TASK assignedTo =", snap.data()?.assignedTo);
  console.log("👤 USER uid =", userId);

  if (!snap.exists || snap.data().assignedTo !== userId) {
    throw new Error("Not authorized");
  }

  await ref.update({ status });
};

const getTaskStats = async () => {
  const snap = await db.collection("tasks").get();

  let total = 0,
    pending = 0,
    inProgress = 0,
    completed = 0;

  snap.forEach((doc) => {
    total++;
    const s = doc.data().status;
    if (s === "pending") pending++;
    else if (s === "in-progress") inProgress++;
    else if (s === "completed") completed++;
  });

  return { total, pending, inProgress, completed };
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
