import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent to your email 📧");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleReset} className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Forgot Password
        </h2>

        {error && (
          <p className="text-red-600 bg-red-100 p-2 rounded text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border px-4 py-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p className="text-center text-sm">
          <Link to="/login" className="text-indigo-600">
            Back to login
          </Link>
        </p>
      </form>
    </div>
  );
}
