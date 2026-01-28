// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

// export default function Landing() {
//   return (
//     <>
//       <Navbar />

//       <main className="pt-24 bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

//           {/* Left */}
//           <div className="flex justify-center">
//             <div className="w-full h-64 md:h-96 bg-indigo-100 rounded-xl flex items-center justify-center">
//               Illustration Area
//             </div>
//           </div>

//           {/* Right */}
//           <div className="text-center md:text-left">
//             <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
//               Manage your tasks <br />
//               <span className="text-indigo-600">efficiently</span>
//             </h1>

//             <p className="mt-4 text-gray-600 text-lg">
//               Assign, track and manage tasks easily with role-based dashboards.
//             </p>

//             <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Link
//                 to="/login"
//                 className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 text-center"
//               >
//                 Get Started
//               </Link>

//               <Link
//                 to="/login"
//                 className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 text-center"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>

//         </div>
//       </main>
//     </>
//   );
// }


import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginIllustration from "../assets/illustrations/login.svg";

export default function Landing() {
    return (
        <>
            <Navbar />

            <main className="pt-24 bg-gray-50 overflow-hidden">
                {/* ================= HERO ================= */}
                <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6 animate-fadeInUp">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Manage your tasks <br />
                            <span className="text-indigo-600">
                                efficiently & smarter
                            </span>
                        </h1>

                        <p className="text-gray-600 text-lg max-w-lg">
                            A modern task management platform with role-based dashboards
                            to assign, track and complete tasks faster.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/register"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all active:scale-95 text-center"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/login"
                                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition-all text-center"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT ILLUSTRATION */}
                    <div className="relative flex justify-center animate-fadeIn">
                        <div className="w-full h-72 md:h-96 bg-indigo-100 rounded-2xl shadow-lg flex items-center justify-center">
                            {/* <span className="text-indigo-600 font-semibold">
                Illustration Area
              </span> */}
                            <img
                                src={LoginIllustration}
                                alt="Login Illustration"
                                className="w-full h-full object-contain"
                            />

                        </div>

                        {/* floating blob */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    </div>
                </section>

                {/* ================= FEATURES ================= */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            Why choose our platform?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Role Based Access",
                                    desc: "Admins manage tasks, users focus on execution.",
                                },
                                {
                                    title: "Real-Time Updates",
                                    desc: "Task status updates reflect instantly.",
                                },
                                {
                                    title: "Clean Dashboard",
                                    desc: "Minimal UI focused on productivity.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-50 p-6 rounded-xl border hover:shadow-lg transition-all hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold mb-4">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="py-20 bg-indigo-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
                        <h2 className="text-3xl font-bold">
                            Ready to boost productivity?
                        </h2>
                        <p className="text-indigo-100">
                            Start managing your tasks effectively today.
                        </p>

                        <Link
                            to="/register"
                            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-all active:scale-95"
                        >
                            Create Free Account
                        </Link>
                    </div>
                </section>

                {/* ================= FOOTER ================= */}
                <footer className="bg-gray-900 text-gray-400 py-10">
                    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">
                                TaskManager
                            </h3>
                            <p className="text-sm">
                                A simple and efficient task management solution
                                for teams and individuals.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-3">
                                Quick Links
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link to="/login" className="hover:text-white">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="hover:text-white">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-3">
                                Contact
                            </h4>
                            <p className="text-sm">
                                support@taskmanager.app
                            </p>
                        </div>
                    </div>

                    <div className="text-center text-xs text-gray-500 mt-8">
                        © {new Date().getFullYear()} TaskManager. All rights reserved.
                    </div>
                </footer>
            </main>

            {/* SIMPLE ANIMATIONS */}
            <style>
                {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
            </style>
        </>
    );
}
