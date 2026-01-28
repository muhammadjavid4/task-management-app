const { db } = require("../config/db");

const adminMiddleware = async (req, res, next) => {
  try {
    const userRef = db.collection("users").doc(req.user.uid);
    const userSnap = await userRef.get();

    if (!userSnap.exists || userSnap.data().role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: "Role check failed" });
  }
};

module.exports = adminMiddleware;
