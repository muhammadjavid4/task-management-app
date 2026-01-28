// import { useEffect, useState } from "react";
// import UserLayout from "../layouts/UserLayout";
// import UserStatCard from "../components/UserStatCard";
// import { apiFetch } from "../services/api";
// import TaskDetailsPanel from "../components/TaskDetailsPanel";

// const STATUS_STYLES = {
//   pending: "bg-orange-100 text-orange-600",
//   "in-progress": "bg-blue-100 text-blue-600",
//   completed: "bg-green-100 text-green-600",
// };

// export default function UserDashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [stats, setStats] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMyTasks = async () => {
//     try {
//       setLoading(true);
//       const data = await apiFetch("http://localhost:4000/api/tasks/my");
//       setTasks(data);

//       // 🔥 USER STATS
//       const pending = data.filter(t => t.status === "pending").length;
//       const inProgress = data.filter(t => t.status === "in-progress").length;
//       const completed = data.filter(t => t.status === "completed").length;

//       setStats({
//         total: data.length,
//         pending,
//         inProgress,
//         completed,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyTasks();
//   }, []);

//   const filteredTasks =
//     filter === "all"
//       ? tasks
//       : tasks.filter((t) => t.status === filter);

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleDateString();
//   };

//   return (
//     <UserLayout>
//       {(search) => {
//         const searchedTasks = filteredTasks.filter((task) => {
//           if (!search) return true;
//           const q = search.toLowerCase();
//           return (
//             task.title?.toLowerCase().includes(q) ||
//             task.id?.toLowerCase().includes(q)
//           );
//         });

//         return (
//           <>
//             <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>

//             {/* 🔥 STAT CARDS */}
//             {stats && (
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//                 <UserStatCard
//                   title="My Tasks"
//                   count={stats.total}
//                   color="from-blue-400 to-blue-600"
//                 />
//                 <UserStatCard
//                   title="Pending Tasks"
//                   count={stats.pending}
//                   color="from-orange-400 to-orange-600"
//                 />
//                 <UserStatCard
//                   title="In Progress"
//                   count={stats.inProgress}
//                   color="from-purple-400 to-purple-600"
//                 />
//                 <UserStatCard
//                   title="Completed"
//                   count={stats.completed}
//                   color="from-green-400 to-green-600"
//                 />
//               </div>
//             )}

//             {/* FILTERS */}
//             <div className="flex gap-2 mb-4">
//               {["all", "pending", "in-progress", "completed"].map((f) => (
//                 <button
//                   key={f}
//                   onClick={() => setFilter(f)}
//                   className={`px-3 py-1 rounded-full text-sm border ${
//                     filter === f
//                       ? "bg-indigo-600 text-white border-indigo-600"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   {f === "all" ? "All" : f.replace("-", " ")}
//                 </button>
//               ))}
//             </div>

//             {/* TABLE */}
//             <div className="flex gap-6">
//               <div
//                 className={`transition-all duration-300 ${
//                   selectedTask ? "w-[calc(100%-420px)]" : "w-full"
//                 }`}
//               >
//                 <div className="bg-white rounded-xl border overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead className="bg-gray-50 text-gray-500">
//                       <tr>
//                         <th className="p-4 text-left">Task ID</th>
//                         <th className="p-4 text-left">Task Title</th>
//                         <th className="p-4 text-left">Status</th>
//                         <th className="p-4 text-left">Created On</th>
//                         <th className="p-4 text-left">Action</th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       {searchedTasks.map((task) => (
//                         <tr key={task.id} className="border-t">
//                           <td className="p-4 text-gray-500">
//                             #{task.id.slice(0, 6)}
//                           </td>
//                           <td className="p-4 font-medium">
//                             {task.title}
//                           </td>
//                           <td className="p-4">
//                             <span
//                               className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[task.status]}`}
//                             >
//                               {task.status.replace("-", " ")}
//                             </span>
//                           </td>
//                           <td className="p-4">
//                             {formatDate(task.createdAt)}
//                           </td>
//                           <td className="p-4">
//                             <button
//                               onClick={() => setSelectedTask(task)}
//                               className="bg-gray-100 px-3 py-1 rounded text-sm hover:bg-gray-200"
//                             >
//                               View
//                             </button>
//                           </td>
//                         </tr>
//                       ))}

//                       {searchedTasks.length === 0 && (
//                         <tr>
//                           <td colSpan="5" className="p-6 text-center text-gray-500">
//                             No tasks found
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* 👉 SAME ADMIN PANEL */}
//               {selectedTask && (
//                 <TaskDetailsPanel
//                   task={selectedTask}
//                   onClose={() => setSelectedTask(null)}
//                   onDeleted={fetchMyTasks}
//                 />
//               )}
//             </div>
//           </>
//         );
//       }}
//     </UserLayout>
//   );
// }


// import { useEffect, useState } from "react";
// import UserLayout from "../layouts/UserLayout";
// import UserStatCard from "../components/UserStatCard";
// import { apiFetch } from "../services/api";
// import MyTasks from "./MyTasks";

// export default function UserDashboard() {
//   const [stats, setStats] = useState(null);

//   const fetchStats = async () => {
//     const data = await apiFetch("http://localhost:4000/api/tasks/my");

//     const pending = data.filter(t => t.status === "pending").length;
//     const inProgress = data.filter(t => t.status === "in-progress").length;
//     const completed = data.filter(t => t.status === "completed").length;

//     setStats({
//       total: data.length,
//       pending,
//       inProgress,
//       completed,
//     });
//   };

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   return (
//     <UserLayout>
//   {(search) => (
//     <>
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

//       {stats && (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <UserStatCard title="My Tasks" count={stats.total} color="from-blue-400 to-blue-600" />
//           <UserStatCard title="Pending Tasks" count={stats.pending} color="from-orange-400 to-orange-600" />
//           <UserStatCard title="In Progress" count={stats.inProgress} color="from-purple-400 to-purple-600" />
//           <UserStatCard title="Completed" count={stats.completed} color="from-green-400 to-green-600" />
//         </div>
//       )}

//       {/* 👇 search yahin se MyTasks ko milega */}
//       <MyTasks search={search} />
//     </>
//   )}
// </UserLayout>
//   );
// }


// import { useEffect, useState } from "react";
// import UserLayout from "../layouts/UserLayout";
// import UserStatCard from "../components/UserStatCard";
// import { apiFetch } from "../services/api";
// import MyTasks from "./MyTasks";

// export default function UserDashboard() {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true); // 🔥 sirf animation ke liye

//   const fetchStats = async () => {
//     setLoading(true);
//     const data = await apiFetch("http://localhost:4000/api/tasks/my");

//     const pending = data.filter(t => t.status === "pending").length;
//     const inProgress = data.filter(t => t.status === "in-progress").length;
//     const completed = data.filter(t => t.status === "completed").length;

//     setStats({
//       total: data.length,
//       pending,
//       inProgress,
//       completed,
//     });

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   return (
//     <UserLayout>
      
//       {(search) => (
//         <>
//           {/* DASHBOARD FADE */}
//           <div
//             className={`transition-all duration-500 ${
//               loading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
//             }`}
//           >
//             <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

//             {stats && (
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//                 {[
//                   {
//                     title: "My Tasks",
//                     count: stats.total,
//                     color: "from-blue-400 to-blue-600",
//                   },
//                   {
//                     title: "Pending Tasks",
//                     count: stats.pending,
//                     color: "from-orange-400 to-orange-600",
//                   },
//                   {
//                     title: "In Progress",
//                     count: stats.inProgress,
//                     color: "from-purple-400 to-purple-600",
//                   },
//                   {
//                     title: "Completed",
//                     count: stats.completed,
//                     color: "from-green-400 to-green-600",
//                   },
//                 ].map((card, index) => (
//                   <div
//                     key={card.title}
//                     className="animate-scaleIn"
//                     style={{ animationDelay: `${index * 80}ms` }}
//                   >
//                     <UserStatCard
//                       title={card.title}
//                       count={card.count}
//                       color={card.color}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* 👇 search yahin se MyTasks ko milega */}
//             <MyTasks search={search} onStatusUpdated={fetchStats} />
//           </div>

//           {/* 🔥 STAT CARD ANIMATION */}
//           <style>
//             {`
//               @keyframes scaleIn {
//                 from {
//                   opacity: 0;
//                   transform: scale(0.95) translateY(6px);
//                 }
//                 to {
//                   opacity: 1;
//                   transform: scale(1) translateY(0);
//                 }
//               }
//               .animate-scaleIn {
//                 animation: scaleIn 0.4s ease forwards;
//                 opacity: 0;
//               }
//             `}
//           </style>
//         </>
//       )}
//     </UserLayout>
//   );
// }


import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import UserStatCard from "../components/UserStatCard";
import { apiFetch } from "../services/api";
import MyTasks from "./MyTasks";

export default function UserDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true); // 🔥 sirf animation ke liye

  const fetchStats = async () => {
    setLoading(true);
    const data = await apiFetch("http://localhost:4000/api/tasks/my");

    const pending = data.filter((t) => t.status === "pending").length;
    const inProgress = data.filter((t) => t.status === "in-progress").length;
    const completed = data.filter((t) => t.status === "completed").length;

    setStats({
      total: data.length,
      pending,
      inProgress,
      completed,
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <UserLayout>
      {(search) => (
        <>
          {/* 👇 DASHBOARD AREA LOADING (SIRF YAHI DIKHEGA) */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-gray-500 text-sm tracking-wide">
                  Dashboard loading...
                </p>
              </div>
            </div>
          )}

          {/* DASHBOARD FADE (AS-IT-IS) */}
          <div
            className={`transition-all duration-500 ${
              loading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    title: "My Tasks",
                    count: stats.total,
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    title: "Pending Tasks",
                    count: stats.pending,
                    color: "from-orange-400 to-orange-600",
                  },
                  {
                    title: "In Progress",
                    count: stats.inProgress,
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    title: "Completed",
                    count: stats.completed,
                    color: "from-green-400 to-green-600",
                  },
                ].map((card, index) => (
                  <div
                    key={card.title}
                    className="animate-scaleIn"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <UserStatCard
                      title={card.title}
                      count={card.count}
                      color={card.color}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* 👇 search yahin se MyTasks ko milega */}
            <MyTasks search={search} onStatusUpdated={fetchStats} />
          </div>

          {/* 🔥 STAT CARD ANIMATION (UNCHANGED) */}
          <style>
            {`
              @keyframes scaleIn {
                from {
                  opacity: 0;
                  transform: scale(0.95) translateY(6px);
                }
                to {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                }
              }
              .animate-scaleIn {
                animation: scaleIn 0.4s ease forwards;
                opacity: 0;
              }
            `}
          </style>
        </>
      )}
    </UserLayout>
  );
}
