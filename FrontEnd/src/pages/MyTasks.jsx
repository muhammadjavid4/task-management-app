// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import TaskDetailsPanel from "../components/TaskDetailsPanel";

// const STATUS_STYLES = {
//   pending: "bg-orange-100 text-orange-600",
//   "in-progress": "bg-blue-100 text-blue-600",
//   completed: "bg-green-100 text-green-600",
// };

// export default function MyTasks() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [selectedTask, setSelectedTask] = useState(null);

//   const fetchMyTasks = async () => {
//     const data = await apiFetch("http://localhost:4000/api/tasks/my");
//     setTasks(data);
//   };

//   useEffect(() => {
//     fetchMyTasks();
//   }, []);

//   const filteredTasks =
//     filter === "all" ? tasks : tasks.filter(t => t.status === filter);

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleDateString();
//   };

//   return (
//     <>
//       <h2 className="text-lg font-semibold mb-4">My Tasks</h2>

//       {/* FILTERS */}
//       <div className="flex gap-2 mb-4">
//         {["all", "pending", "in-progress", "completed"].map((f) => (
//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             className={`px-3 py-1 rounded-full text-sm border ${
//               filter === f
//                 ? "bg-indigo-600 text-white border-indigo-600"
//                 : "text-gray-600 hover:bg-gray-100"
//             }`}
//           >
//             {f === "all" ? "All" : f.replace("-", " ")}
//           </button>
//         ))}
//       </div>

//       <div className="flex gap-6">
//         <div className={`${selectedTask ? "w-[calc(100%-420px)]" : "w-full"}`}>
//           <div className="bg-white rounded-xl border">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-50 text-gray-500">
//                 <tr>
//                   <th className="p-4 text-left">Task ID</th>
//                   <th className="p-4 text-left">Title</th>
//                   <th className="p-4 text-left">Status</th>
//                   <th className="p-4 text-left">Created</th>
//                   <th className="p-4 text-left">Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredTasks.map(task => (
//                   <tr key={task.id} className="border-t">
//                     <td className="p-4">#{task.id.slice(0, 6)}</td>
//                     <td className="p-4 font-medium">{task.title}</td>
//                     <td className="p-4">
//                       <span className={`px-3 py-1 rounded-full text-xs ${STATUS_STYLES[task.status]}`}>
//                         {task.status.replace("-", " ")}
//                       </span>
//                     </td>
//                     <td className="p-4">{formatDate(task.createdAt)}</td>
//                     <td className="p-4">
//                       <button
//                         onClick={() => setSelectedTask(task)}
//                         className="bg-gray-100 px-3 py-1 rounded"
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {selectedTask && (
//           <TaskDetailsPanel
//             task={selectedTask}
//             onClose={() => setSelectedTask(null)}
//             onDeleted={fetchMyTasks}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import UserTaskDetailsPanel from "../components/UserTaskDetailsPanel";

// const STATUS_BADGE = {
//   pending: "border-orange-400 text-orange-500",
//   "in-progress": "border-blue-400 text-blue-500",
//   completed: "border-green-400 text-green-500",
// };

// export default function MyTasks() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [selectedTask, setSelectedTask] = useState(null);

//   const fetchMyTasks = async () => {
//     const data = await apiFetch("http://localhost:4000/api/tasks/my");
//     setTasks(data);
//   };

//   useEffect(() => {
//     fetchMyTasks();
//   }, []);

//   const filteredTasks =
//     filter === "all" ? tasks : tasks.filter(t => t.status === filter);

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleDateString();
//   };

//   return (
//     <>
//       <h2 className="text-lg font-semibold mb-1">My Tasks</h2>
//       <p className="text-sm text-gray-400 mb-4">
//         Track and update your assigned tasks.
//       </p>

//       {/* FILTERS */}
//       <div className="flex gap-2 mb-6">
//         {["all", "pending", "completed", "in-progress"].map((f) => (
//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             className={`px-4 py-1.5 rounded-full text-sm border ${
//               filter === f
//                 ? "bg-indigo-600 text-white border-indigo-600"
//                 : "text-gray-500 hover:bg-gray-100"
//             }`}
//           >
//             {f === "all"
//               ? "All"
//               : f === "in-progress"
//               ? "In Progress"
//               : f.charAt(0).toUpperCase() + f.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="flex gap-6">
//         {/* TABLE */}
//         <div className={`${selectedTask ? "w-[calc(100%-420px)]" : "w-full"}`}>
//           <div className="bg-white rounded-xl border overflow-hidden">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-50 text-gray-400">
//                 <tr>
//                   <th className="p-4 text-left">Assigned To</th>
//                   <th className="p-4 text-left">Task Title</th>
//                   <th className="p-4 text-left">Assigned By</th>
//                   <th className="p-4 text-left">Status</th>
//                   <th className="p-4 text-left">Created On</th>
//                   <th className="p-4 text-left">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredTasks.map(task => (
//                   <tr key={task.id} className="border-t">
//                     <td className="p-4 text-gray-600">
//                       #{task.id.slice(0, 6)}
//                     </td>

//                     <td className="p-4 font-medium">
//                       {task.title}
//                     </td>

//                     <td className="p-4 text-gray-600">
//                       Admin
//                     </td>

//                     <td className="p-4">
//                       <span className={`px-3 py-1 rounded-full text-xs border ${STATUS_BADGE[task.status]}`}>
//                         {task.status === "in-progress"
//                           ? "In Progress"
//                           : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
//                       </span>
//                     </td>

//                     <td className="p-4 text-gray-600">
//                       {formatDate(task.createdAt)}
//                     </td>

//                     <td className="p-4 flex gap-2">
//                       <button
//                         onClick={() => setSelectedTask(task)}
//                         className="px-3 py-1.5 rounded-md bg-gray-100"
//                       >
//                         View
//                       </button>

//                       <button
//                         onClick={() => setSelectedTask(task)}
//                         className="px-4 py-1.5 rounded-md bg-indigo-600 text-white"
//                       >
//                         Update Status
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {filteredTasks.length === 0 && (
//                   <tr>
//                     <td colSpan="6" className="p-6 text-center text-gray-400">
//                       No tasks found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* DETAILS PANEL */}
//         {selectedTask && (
//           <UserTaskDetailsPanel
//             task={selectedTask}
//             onClose={() => setSelectedTask(null)}
//             onUpdated={fetchMyTasks}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import UserTaskDetailsPanel from "../components/UserTaskDetailsPanel";
// import UserUpdateStatusModal from "../components/UserUpdateStatusModal";

// const STATUS_BADGE = {
//   pending: "border-orange-400 text-orange-500",
//   "in-progress": "border-blue-400 text-blue-500",
//   completed: "border-green-400 text-green-500",
// };

// export default function MyTasks({search}) {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [statusTask, setStatusTask] = useState(null); // 🔥 for direct update

//   const fetchMyTasks = async () => {
//     const data = await apiFetch("http://localhost:4000/api/tasks/my");
//     setTasks(data);
//     setSelectedTask(null);
//   };

//   useEffect(() => {
//     fetchMyTasks();
//   }, []);

// //   const filteredTasks =
// //     filter === "all" ? tasks : tasks.filter((t) => t.status === filter);
// const filteredTasks = tasks.filter((task) => {
//   const matchesStatus =
//     filter === "all" ? true : task.status === filter;

//   const matchesSearch =
//     task.title.toLowerCase().includes(search.toLowerCase()) ||
//     task.id.toLowerCase().includes(search.toLowerCase());

//   return matchesStatus && matchesSearch;
// });

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleDateString();
//   };

//   return (
//     <>
//       <h2 className="text-lg font-semibold mb-1">My Tasks</h2>
//       <p className="text-sm text-gray-400 mb-4">
//         Track and update your assigned tasks.
//       </p>

//       {/* FILTERS */}
//       <div className="flex gap-2 mb-6">
//         {["all", "pending", "completed", "in-progress"].map((f) => (
//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             className={`px-4 py-1.5 rounded-full text-sm border ${
//               filter === f
//                 ? "bg-indigo-600 text-white border-indigo-600"
//                 : "text-gray-500 hover:bg-gray-100"
//             }`}
//           >
//             {f === "all"
//               ? "All"
//               : f === "in-progress"
//               ? "In Progress"
//               : f.charAt(0).toUpperCase() + f.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="flex gap-6">
//         {/* TABLE */}
//         <div className={`${selectedTask ? "w-[calc(100%-420px)]" : "w-full"}`}>
//           <div className="bg-white rounded-xl border overflow-hidden">
//             <table className="w-full text-sm">
//               <thead className="bg-gray-50 text-gray-400">
//                 <tr>
//                   <th className="p-4 text-left">Assigned To</th>
//                   <th className="p-4 text-left">Task Title</th>
//                   <th className="p-4 text-left">Assigned By</th>
//                   <th className="p-4 text-left">Status</th>
//                   <th className="p-4 text-left">Created On</th>
//                   <th className="p-4 text-left">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredTasks.map((task) => (
//                   <tr key={task.id} className="border-t">
//                     <td className="p-4 text-gray-600">
//                       #{task.id.slice(0, 6)}
//                     </td>

//                     <td className="p-4 font-medium">{task.title}</td>

//                     <td className="p-4 text-gray-600">Admin</td>

//                     <td className="p-4">
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs border ${STATUS_BADGE[task.status]}`}
//                       >
//                         {task.status === "in-progress"
//                           ? "In Progress"
//                           : task.status.charAt(0).toUpperCase() +
//                             task.status.slice(1)}
//                       </span>
//                     </td>

//                     <td className="p-4 text-gray-600">
//                       {formatDate(task.createdAt)}
//                     </td>

//                     <td className="p-4 flex gap-2">
//                       {/* VIEW */}
//                       <button
//                         onClick={() => setSelectedTask(task)}
//                         className="px-3 py-1.5 rounded-md bg-gray-100"
//                       >
//                         View
//                       </button>

//                       {/* UPDATE STATUS */}
//                       <button
//                         onClick={() => setStatusTask(task)}
//                         className="px-4 py-1.5 rounded-md bg-indigo-600 text-white"
//                       >
//                         Update Status
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {filteredTasks.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan="6"
//                       className="p-6 text-center text-gray-400"
//                     >
//                       No tasks found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* DETAILS PANEL (VIEW ONLY) */}
//         {selectedTask && (
//           <UserTaskDetailsPanel
//             task={selectedTask}
//             onClose={() => setSelectedTask(null)}
//             onUpdated={fetchMyTasks}
//           />
//         )}
//       </div>

//       {/* UPDATE STATUS MODAL (DIRECT) */}
//       {statusTask && (
//         <UserUpdateStatusModal
//           open={!!statusTask}
//           task={statusTask}
//           onClose={() => setStatusTask(null)}
//           onUpdated={fetchMyTasks}
//         />
//       )}
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import UserTaskDetailsPanel from "../components/UserTaskDetailsPanel";
// import UserUpdateStatusModal from "../components/UserUpdateStatusModal";

// const STATUS_BADGE = {
//   pending: "border-orange-400 text-orange-500",
//   "in-progress": "border-blue-400 text-blue-500",
//   completed: "border-green-400 text-green-500",
// };

// export default function MyTasks({ search }) {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [statusTask, setStatusTask] = useState(null);
//   const [loading, setLoading] = useState(true); // 🔥 only for animation

//   const fetchMyTasks = async () => {
//     setLoading(true);
//     const data = await apiFetch("http://localhost:4000/api/tasks/my");
//     setTasks(data);
//     setSelectedTask(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchMyTasks();
//   }, []);

//   const filteredTasks = tasks.filter((task) => {
//     const matchesStatus =
//       filter === "all" ? true : task.status === filter;

//     const matchesSearch =
//       task.title.toLowerCase().includes(search.toLowerCase()) ||
//       task.id.toLowerCase().includes(search.toLowerCase());

//     return matchesStatus && matchesSearch;
//   });

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleDateString();
//   };

//   return (
//     <>
//       {/* PAGE FADE IN */}
//       <div
//         className={`transition-all duration-500 ${
//           loading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
//         }`}
//       >
//         <h2 className="text-lg font-semibold mb-1">My Tasks</h2>
//         <p className="text-sm text-gray-400 mb-4">
//           Track and update your assigned tasks.
//         </p>

//         {/* FILTERS */}
//         <div className="flex gap-2 mb-6">
//           {["all", "pending", "completed", "in-progress"].map((f) => (
//             <button
//               key={f}
//               onClick={() => setFilter(f)}
//               className={`px-4 py-1.5 rounded-full text-sm border transition ${
//                 filter === f
//                   ? "bg-indigo-600 text-white border-indigo-600"
//                   : "text-gray-500 hover:bg-gray-100"
//               }`}
//             >
//               {f === "all"
//                 ? "All"
//                 : f === "in-progress"
//                 ? "In Progress"
//                 : f.charAt(0).toUpperCase() + f.slice(1)}
//             </button>
//           ))}
//         </div>

//         <div className="flex gap-6">
//           {/* TABLE */}
//           <div className={`${selectedTask ? "w-[calc(100%-420px)]" : "w-full"}`}>
//             <div className="bg-white rounded-xl border overflow-hidden">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-50 text-gray-400">
//                   <tr>
//                     <th className="p-4 text-left">Assigned To</th>
//                     <th className="p-4 text-left">Task Title</th>
//                     <th className="p-4 text-left">Assigned By</th>
//                     <th className="p-4 text-left">Status</th>
//                     <th className="p-4 text-left">Created On</th>
//                     <th className="p-4 text-left">Actions</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filteredTasks.map((task, index) => (
//                     <tr
//                       key={task.id}
//                       className="border-t animate-fadeUp"
//                       style={{ animationDelay: `${index * 60}ms` }}
//                     >
//                       <td className="p-4 text-gray-600">
//                         #{task.id.slice(0, 6)}
//                       </td>

//                       <td className="p-4 font-medium">{task.title}</td>

//                       <td className="p-4 text-gray-600">Admin</td>

//                       <td className="p-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs border ${STATUS_BADGE[task.status]}`}
//                         >
//                           {task.status === "in-progress"
//                             ? "In Progress"
//                             : task.status.charAt(0).toUpperCase() +
//                               task.status.slice(1)}
//                         </span>
//                       </td>

//                       <td className="p-4 text-gray-600">
//                         {formatDate(task.createdAt)}
//                       </td>

//                       <td className="p-4 flex gap-2">
//                         <button
//                           onClick={() => setSelectedTask(task)}
//                           className="px-3 py-1.5 rounded-md bg-gray-100"
//                         >
//                           View
//                         </button>

//                         <button
//                           onClick={() => setStatusTask(task)}
//                           className="px-4 py-1.5 rounded-md bg-indigo-600 text-white"
//                         >
//                           Update Status
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredTasks.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan="6"
//                         className="p-6 text-center text-gray-400"
//                       >
//                         No tasks found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* DETAILS PANEL */}
//           {selectedTask && (
//             <UserTaskDetailsPanel
//               task={selectedTask}
//               onClose={() => setSelectedTask(null)}
//               onUpdated={fetchMyTasks}
//             />
//           )}
//         </div>

//         {/* UPDATE STATUS MODAL */}
//         {statusTask && (
//           <UserUpdateStatusModal
//             open={!!statusTask}
//             task={statusTask}
//             onClose={() => setStatusTask(null)}
//             onUpdated={fetchMyTasks}
//           />
//         )}
//       </div>

//       {/* 🔥 ROW ANIMATION */}
//       <style>
//         {`
//           @keyframes fadeUp {
//             from {
//               opacity: 0;
//               transform: translateY(6px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-fadeUp {
//             animation: fadeUp 0.35s ease forwards;
//             opacity: 0;
//           }
//         `}
//       </style>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import UserTaskDetailsPanel from "../components/UserTaskDetailsPanel";
import UserUpdateStatusModal from "../components/UserUpdateStatusModal";

const STATUS_BADGE = {
    pending: "border-orange-400 text-orange-500",
    "in-progress": "border-blue-400 text-blue-500",
    completed: "border-green-400 text-green-500",
};

export default function MyTasks({ search, onStatusUpdated }) {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [selectedTask, setSelectedTask] = useState(null);
    const [statusTask, setStatusTask] = useState(null);

    const fetchMyTasks = async () => {
        const data = await apiFetch("http://localhost:4000/api/tasks/my");
        setTasks(data);
        setSelectedTask(null);
    };

    useEffect(() => {
        fetchMyTasks();
    }, []);

    const filteredTasks = tasks.filter((task) => {
        const matchesStatus =
            filter === "all" ? true : task.status === filter;

        const matchesSearch =
            task.title.toLowerCase().includes(search.toLowerCase()) ||
            task.id.toLowerCase().includes(search.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    const formatDate = (createdAt) => {
        if (!createdAt?._seconds) return "-";
        return new Date(createdAt._seconds * 1000).toLocaleDateString();
    };

    return (
        <>
            <h2 className="text-lg font-semibold mb-1">My Tasks</h2>
            <p className="text-sm text-gray-400 mb-4">
                Track and update your assigned tasks.
            </p>

            {/* FILTERS */}
            <div className="flex gap-2 mb-6">
                {["all", "pending", "completed", "in-progress"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-1.5 rounded-full text-sm border ${filter === f
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "text-gray-500 hover:bg-gray-100"
                            }`}
                    >
                        {f === "all"
                            ? "All"
                            : f === "in-progress"
                                ? "In Progress"
                                : f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            <div className="flex gap-6">
                {/* TABLE */}
                <div className={selectedTask ? "w-[calc(100%-420px)]" : "w-full"}>
                    <div className="bg-white rounded-xl border overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-400">
                                <tr>
                                    <th className="p-4 text-left">Assigned To</th>
                                    <th className="p-4 text-left">Task Title</th>
                                    <th className="p-4 text-left">Assigned By</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-left">Created On</th>
                                    <th className="p-4 text-left">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredTasks.map((task) => (
                                    <tr key={task.id} className="border-t">
                                        <td className="p-4 text-gray-600">
                                            #{task.id.slice(0, 6)}
                                        </td>

                                        <td className="p-4 font-medium">{task.title}</td>

                                        <td className="p-4 text-gray-600">Admin</td>

                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs border ${STATUS_BADGE[task.status]}`}
                                            >
                                                {task.status === "in-progress"
                                                    ? "In Progress"
                                                    : task.status.charAt(0).toUpperCase() +
                                                    task.status.slice(1)}
                                            </span>
                                        </td>

                                        <td className="p-4 text-gray-600">
                                            {formatDate(task.createdAt)}
                                        </td>

                                        <td className="p-4 flex gap-2">
                                            {/* VIEW */}
                                            <button
                                                onClick={() => setSelectedTask(task)}
                                                className="px-3 py-1.5 rounded-md bg-gray-100"
                                            >
                                                View
                                            </button>

                                            {/* UPDATE STATUS */}
                                            <button
                                                onClick={() => setStatusTask(task)}
                                                className="px-4 py-1.5 rounded-md bg-indigo-600 text-white"
                                            >
                                                Update Status
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {filteredTasks.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="p-6 text-center text-gray-400"
                                        >
                                            No tasks found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* DETAILS PANEL */}
                {selectedTask && (
                    <UserTaskDetailsPanel
                        task={selectedTask}
                        onClose={() => setSelectedTask(null)}
                        onUpdated={fetchMyTasks}
                    />
                )}
            </div>

            {/* UPDATE STATUS MODAL */}
            {statusTask && (
                <UserUpdateStatusModal
                    open={!!statusTask}
                    task={statusTask}
                    onClose={() => setStatusTask(null)}
                    onUpdated={async () => {
                        await fetchMyTasks();
                        onStatusUpdated && onStatusUpdated(); // 🔥 STAT REFRESH
                    }}
                />
            )}
        </>
    );
}
