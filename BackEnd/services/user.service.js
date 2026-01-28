const { db } = require("../config/db");

const createUser = async ({ uid, name, email }) => {
  const userRef = db.collection("users").doc(uid);
  const userSnap = await userRef.get();

  // 🛑 Duplicate user check
  if (userSnap.exists) {
    throw new Error("User already registered");
  }

  const userData = {
    name,
    email,
    role: "user", // default role
    createdAt: new Date(),
  };

  await userRef.set(userData);

  return {
    uid,
    ...userData,
  };
};

module.exports = {
  createUser,
};
