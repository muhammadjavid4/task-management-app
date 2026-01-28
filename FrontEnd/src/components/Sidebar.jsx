// import { LayoutDashboard, ListTodo, LogOut } from "lucide-react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
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
//           to="/admin"
//           className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${isActive("/admin")}`}
//         >
//           <LayoutDashboard size={18} />
//           Dashboard
//         </Link>

//         <Link
//           to="/admin/tasks"
//           className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive("/admin/tasks")}`}
//         >
//           <ListTodo size={18} />
//           Tasks
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


import { LayoutDashboard, ListTodo, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

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
          to="/admin"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${isActive("/admin")}`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          to="/admin/tasks"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive("/admin/tasks")}`}
        >
          <ListTodo size={18} />
          Tasks
        </Link>
      </nav>

      <div className="px-4 py-4 border-t">
        <button
          onClick={logout}
          className="group flex items-center gap-2 text-gray-600
                     transition-all duration-200
                     hover:text-red-500 hover:translate-x-1"
        >
          <LogOut
            size={18}
            className="transition-transform duration-200 group-hover:rotate-[-12deg]"
          />
          Logout
        </button>
      </div>
    </aside>
  );
}
