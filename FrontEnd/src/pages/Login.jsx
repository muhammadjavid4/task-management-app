// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1️⃣ Firebase login
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       // 2️⃣ JWT token
//       const token = await userCredential.user.getIdToken();

//       // ✅ token store (IMPORTANT)
//       localStorage.setItem("token", token);

//       // 3️⃣ Backend se user role lao
//       const res = await fetch("http://localhost:4000/api/users/me", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error("Unable to fetch user profile");
//       }

//       const data = await res.json();

//       // 4️⃣ Role based redirect
//       if (data.role === "admin") {
//         navigate("/admin");
//         toast.success("Welcome Admin!");
//       } else {
//         navigate("/user");
//         toast.success("Login successful!");
//       }

//     } catch (err) {
//       if (err.code === "auth/user-not-found") {
//         setError("No account found with this email");
//       } else if (err.code === "auth/wrong-password") {
//         setError("Incorrect password");
//       } else if (err.code === "auth/invalid-credential") {
//         setError("Invalid email or password");
//       } else {
//         setError("Login failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">

//       {/* LEFT SECTION */}
//       <div className="hidden md:flex w-1/2 bg-indigo-100 items-center justify-center">
//         <div className="w-3/4 h-3/4 bg-indigo-200 rounded-xl flex items-center justify-center text-indigo-700 font-semibold">
//           Illustration
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="w-full md:w-1/2 flex items-center justify-center px-6 bg-white">
//         <form
//           onSubmit={handleLogin}
//           className="w-full max-w-md space-y-5"
//         >
//           <h2 className="text-3xl font-bold text-gray-800">
//             Welcome back 👋
//           </h2>
//           <p className="text-gray-500">
//             Log in to manage your tasks and track progress.
//           </p>

//           {error && (
//             <p className="text-red-600 bg-red-100 p-2 rounded text-sm">
//               {error}
//             </p>
//           )}

//           <div>
//             <label className="block text-sm text-gray-600 mb-1">
//               Email address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition disabled:opacity-60"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>

//           <p className="text-center text-sm text-gray-500">
//             Don’t have an account?{" "}
//             <Link to="/register" className="text-indigo-600 hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1️⃣ Firebase login
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       // 2️⃣ JWT token
//       const token = await userCredential.user.getIdToken();

//       // ✅ token store
//       localStorage.setItem("token", token);

//       // 3️⃣ Backend se user role lao
//       const res = await fetch("http://localhost:4000/api/users/me", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error("Unable to fetch user profile");
//       }

//       const data = await res.json();

//       // 4️⃣ Role based redirect
//       if (data.role === "admin") {
//         navigate("/admin");
//         toast.success("Welcome Admin!");
//       } else {
//         navigate("/user");
//         toast.success("Login successful!");
//       }
//     } catch (err) {
//       if (err.code === "auth/user-not-found") {
//         setError("No account found with this email");
//       } else if (err.code === "auth/wrong-password") {
//         setError("Incorrect password");
//       } else if (err.code === "auth/invalid-credential") {
//         setError("Invalid email or password");
//       } else {
//         setError("Login failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">

//       {/* LEFT SECTION */}
//       <div className="hidden md:flex w-1/2 bg-indigo-100 items-center justify-center">
//         <div className="w-3/4 h-3/4 bg-indigo-200 rounded-xl flex items-center justify-center text-indigo-700 font-semibold">
//           Illustration
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="w-full md:w-1/2 flex items-center justify-center px-6 bg-white">
//         <form
//           onSubmit={handleLogin}
//           className="w-full max-w-md space-y-5"
//         >
//           <h2 className="text-3xl font-bold text-gray-800">
//             Welcome back 👋
//           </h2>
//           <p className="text-gray-500">
//             Log in to manage your tasks and track progress.
//           </p>

//           {error && (
//             <p className="text-red-600 bg-red-100 p-2 rounded text-sm">
//               {error}
//             </p>
//           )}

//           <div>
//             <label className="block text-sm text-gray-600 mb-1">
//               Email address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 hover:bg-indigo-700
//                        text-white py-3 rounded-md
//                        flex items-center justify-center gap-2
//                        transition-all active:scale-95
//                        disabled:opacity-60 disabled:cursor-not-allowed"
//           >
//             {loading && (
//               <svg
//                 className="w-4 h-4 animate-spin"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                 />
//               </svg>
//             )}

//             {loading ? "Signing in..." : "Sign In"}
//           </button>

//           <p className="text-center text-sm text-gray-500">
//             Don’t have an account?{" "}
//             <Link to="/register" className="text-indigo-600 hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginIllustration from "../assets/illustrations/login.svg";
import { apiFetch } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   if (!email || !password) {
  //     setError("Email and password are required");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );

  //     const token = await userCredential.user.getIdToken();
  //     localStorage.setItem("token", token);

  //     const res = await fetch("http://localhost:4000/api/users/me", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!res.ok) {
  //       throw new Error("Unable to fetch user profile");
  //     }

  //     const data = await res.json();

  //     if (data.role === "admin") {
  //       navigate("/admin");
  //       toast.success("Welcome Admin!");
  //     } else {
  //       navigate("/user");
  //       toast.success("Login successful!");
  //     }
  //   } catch (err) {
  //     if (err.code === "auth/user-not-found") {
  //       setError("No account found with this email");
  //     } else if (err.code === "auth/wrong-password") {
  //       setError("Incorrect password");
  //     } else if (err.code === "auth/invalid-credential") {
  //       setError("Invalid email or password");
  //     } else {
  //       setError("Login failed. Please try again.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  if (!email || !password) {
    setError("Email and password are required");
    return;
  }

  setLoading(true);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const token = await userCredential.user.getIdToken();
    localStorage.setItem("token", token);

    // ✅ apiFetch already returns data
    const data = await apiFetch("/api/users/me");

    if (data.role === "admin") {
      navigate("/admin");
      toast.success("Welcome Admin!");
    } else {
      navigate("/user");
      toast.success("Login successful!");
    }
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      setError("No account found with this email");
    } else if (err.code === "auth/wrong-password") {
      setError("Incorrect password");
    } else if (err.code === "auth/invalid-credential") {
      setError("Invalid email or password");
    } else {
      setError("Login failed. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex">

      {/* LEFT – ILLUSTRATION (FIGMA STYLE) */}
      <div className="hidden md:flex w-1/2 bg-indigo-100 items-center justify-center">
        <div className="w-[420px] h-[420px] flex items-center justify-center">
          {/* Replace this div with actual SVG later if needed */}
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

      {/* RIGHT – LOGIN CARD */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-sm">

          <h2 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
            Welcome back 👋
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Log in to manage your tasks and track progress
          </p>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

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

            {/* FORGOT */}
            <div className="text-right">
              <Link to="/forgot-password" className="text-xs text-red-500 cursor-pointer hover:underline">
                Forgot your password?
              </Link>
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
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
