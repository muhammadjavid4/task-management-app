const { admin } = require("../config/db");

const authMiddleware = async (req, res, next) => {
  try {
    // 1️⃣ Token header se lo
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    // 2️⃣ Firebase se token verify karo
    const decodedToken = await admin.auth().verifyIdToken(token);

    // 3️⃣ Request me user info attach karo
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
    };

    // 4️⃣ Next middleware / controller
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;
