import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk-kXwba5JnzFbSYts6IYYY9S3MsODlhM",
  authDomain: "task-manager-app-dc489.firebaseapp.com",
  projectId: "task-manager-app-dc489",
  storageBucket: "task-manager-app-dc489.firebasestorage.app",
  messagingSenderId: "487166563360",
  appId: "1:487166563360:web:2b8074f1947b35720b9845",
  measurementId: "G-QT1D5F1G2Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);