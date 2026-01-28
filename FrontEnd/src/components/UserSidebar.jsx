// import { LayoutDashboard, LogOut } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function UserSidebar() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//     toast.info("Logged out successfully");
//   };

//   const isActive = (path) =>
//     location.pathname === path
//       ? "bg-indigo-50 text-indigo-600"
//       : "text-gray-600 hover:bg-gray-100";

//   return (
//     <aside className="w-64 bg-white border-r min-h-screen hidden md:flex flex-col">
//       <div className="px-6 py-5 text-xl font-bold text-gray-800">
//         Task Management
//       </div>

//       <nav className="flex-1 px-4 space-y-2">
//         <Link
//           to="/user"
//           className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${isActive("/user")}`}
//         >
//           <LayoutDashboard size={18} />
//           Dashboard
//         </Link>
//       </nav>

//       <div className="px-4 py-4 border-t">
//         <button
//           onClick={logout}
//           className="flex items-center gap-2 text-gray-600 hover:text-red-500"
//         >
//           <LogOut size={18} />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

import { LayoutDashboard, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.info("Logged out successfully");
  };

  const isActive = (path) =>
    location.pathname === path
      ? "bg-indigo-50 text-indigo-600"
      : "text-gray-600 hover:bg-gray-100";

  return (
    <aside className="w-64 bg-white border-r min-h-screen hidden md:flex flex-col">
      <div className="px-6 py-5 text-xl font-bold text-gray-800">
        Task Management
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <Link
          to="/user"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive(
            "/user"
          )}`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>
      </nav>

      <div className="px-4 py-4 border-t">
        <button
          onClick={logout}
          className="
            flex items-center gap-2 text-gray-600
            transition-all duration-200
            hover:text-red-500 hover:translate-x-1
            active:scale-95
          "
        >
          <LogOut size={18} className="transition-transform duration-200 group-hover:rotate-12" />
          Logout
        </button>
      </div>
    </aside>
  );
}
