// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const validate = () => {
//     const trimmedName = name.trim();

//     if (trimmedName.length < 3 || trimmedName.length > 30) {
//       return "Name must be between 3 and 30 characters";
//     }

//     // 1️⃣ Basic email structure
//     const emailRegex =
//       /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!emailRegex.test(email)) {
//       return "Please enter a valid email address";
//     }

//     // 2️⃣ Allowed domains only
//     const allowedDomains = [
//       "gmail.com",
//       "yahoo.com",
//       "outlook.com",
//       "hotmail.com",
//       "icloud.com",
//       "proton.me",
//       "protonmail.com",
//     ];

//     const domain = email.split("@")[1]?.toLowerCase();

//     if (!allowedDomains.includes(domain)) {
//       return "Please use a valid email provider (Gmail, Yahoo, Outlook etc.)";
//     }

//     // 3️⃣ Password rules
//     if (password.length < 8) {
//       return "Password must be at least 8 characters";
//     }

//     if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
//       return "Password must contain 1 uppercase letter and 1 number";
//     }

//     return null;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");

//     const validationError = validate();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setLoading(true);

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       // 🔐 Email verification (VERY IMPORTANT)
//       await sendEmailVerification(userCredential.user);

//       const token = await userCredential.user.getIdToken();

//       const res = await fetch("http://localhost:4000/api/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ name }),
//       });

//       if (!res.ok) throw new Error("Backend error");
//       toast.success("Account created 🎉 Please verify your email.");

//     //   alert("Account created 🎉 Please verify your email.");
//     } catch (err) {
//       if (err.code === "auth/email-already-in-use") {
//         setError("Email already registered");
//       } else {
//         setError(err.message || "Something went wrong");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* LEFT */}
//       <div className="hidden md:flex w-1/2 bg-indigo-100 items-center justify-center">
//         <div className="w-3/4 h-3/4 bg-indigo-200 rounded-xl flex items-center justify-center">
//           Illustration
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="w-full md:w-1/2 flex items-center justify-center px-6">
//         <form onSubmit={handleRegister} className="w-full max-w-md space-y-4">
//           <h2 className="text-3xl font-bold">Create account</h2>

//           {error && (
//             <p className="text-red-600 bg-red-100 p-2 rounded text-sm">
//               {error}
//             </p>
//           )}

//           <input
//             type="text"
//             placeholder="Full name"
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <p className="text-xs text-gray-500">
//             Min 8 chars, 1 uppercase, 1 number
//           </p>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-2 rounded disabled:opacity-60"
//           >
//             {loading ? "Creating..." : "Create Account"}
//           </button>

//           <p className="text-center text-sm text-gray-500">
//             Already have an account?{" "}
//             <Link to="/login" className="text-indigo-600 underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const validate = () => {
//     const trimmedName = name.trim();

//     if (trimmedName.length < 3 || trimmedName.length > 30) {
//       return "Name must be between 3 and 30 characters";
//     }

//     const emailRegex =
//       /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!emailRegex.test(email)) {
//       return "Please enter a valid email address";
//     }

//     const allowedDomains = [
//       "gmail.com",
//       "yahoo.com",
//       "outlook.com",
//       "hotmail.com",
//       "icloud.com",
//       "proton.me",
//       "protonmail.com",
//     ];

//     const domain = email.split("@")[1]?.toLowerCase();

//     if (!allowedDomains.includes(domain)) {
//       return "Please use a valid email provider (Gmail, Yahoo, Outlook etc.)";
//     }

//     if (password.length < 8) {
//       return "Password must be at least 8 characters";
//     }

//     if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
//       return "Password must contain 1 uppercase letter and 1 number";
//     }

//     return null;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");

//     const validationError = validate();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1️⃣ Firebase signup
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       // 2️⃣ Email verification
//       await sendEmailVerification(userCredential.user);

//       // 3️⃣ JWT token
//       const token = await userCredential.user.getIdToken();
//       localStorage.setItem("token", token);

//       // 4️⃣ Register user in backend
//       const res = await fetch("http://localhost:4000/api/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ name }),
//       });

//       if (!res.ok) throw new Error("Backend error");

//       // 5️⃣ Fetch user role (SAME AS LOGIN)
//       const meRes = await fetch("http://localhost:4000/api/users/me", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!meRes.ok) throw new Error("Failed to fetch user profile");

//       const data = await meRes.json();

//       toast.success("Registration successful 🎉 Please verify your email.");

//       // 6️⃣ Role based redirect
//       if (data.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/user");
//       }
//     } catch (err) {
//       if (err.code === "auth/email-already-in-use") {
//         setError("Email already registered");
//       } else {
//         setError(err.message || "Something went wrong");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* LEFT */}
//       <div className="hidden md:flex w-1/2 bg-indigo-100 items-center justify-center">
//         <div className="w-3/4 h-3/4 bg-indigo-200 rounded-xl flex items-center justify-center">
//           Illustration
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="w-full md:w-1/2 flex items-center justify-center px-6">
//         <form onSubmit={handleRegister} className="w-full max-w-md space-y-4">
//           <h2 className="text-3xl font-bold">Create account</h2>

//           {error && (
//             <p className="text-red-600 bg-red-100 p-2 rounded text-sm">
//               {error}
//             </p>
//           )}

//           <input
//             type="text"
//             placeholder="Full name"
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <p className="text-xs text-gray-500">
//             Min 8 chars, 1 uppercase, 1 number
//           </p>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-2 rounded disabled:opacity-60"
//           >
//             {loading ? "Creating..." : "Create Account"}
//           </button>

//           <p className="text-center text-sm text-gray-500">
//             Already have an account?{" "}
//             <Link to="/login" className="text-indigo-600 underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginIllustration from "../assets/illustrations/login.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ================= LOGIC (UNCHANGED) =================
  const validate = () => {
    const trimmedName = name.trim();

    if (trimmedName.length < 3 || trimmedName.length > 30) {
      return "Name must be between 3 and 30 characters";
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    const allowedDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
      "proton.me",
      "protonmail.com",
    ];

    const domain = email.split("@")[1]?.toLowerCase();

    if (!allowedDomains.includes(domain)) {
      return "Please use a valid email provider (Gmail, Yahoo, Outlook etc.)";
    }

    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      return "Password must contain 1 uppercase letter and 1 number";
    }

    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCredential.user);

      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);

      const res = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) throw new Error("Backend error");

      const meRes = await fetch("http://localhost:4000/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!meRes.ok) throw new Error("Failed to fetch user profile");

      const data = await meRes.json();

      toast.success("Registration successful 🎉 Please verify your email.");

      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email already registered");
      } else {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // ================= UI (FIGMA MATCHED) =================
  return (
    <div className="min-h-screen flex">

      {/* LEFT – ILLUSTRATION */}
      <div className="hidden md:flex w-1/2 bg-indigo-100 items-center justify-center">
        <div className="w-[420px] h-[420px] flex items-center justify-center">
          {/* Replace with SVG later if needed */}
          {/* <div className="w-full h-full bg-indigo-200 rounded-xl flex items-center justify-center text-indigo-600 font-medium">
            Illustration
          </div> */}
          <img
  src={LoginIllustration}
  alt="Login Illustration"
  className="w-full h-full object-contain"
/>

        </div>
      </div>

      {/* RIGHT – REGISTER FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-sm">

          <h2 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
            Create your account
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Get started with task management in seconds.
          </p>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700
                         text-white py-3 rounded-md text-sm font-medium
                         transition-all active:scale-95
                         disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
