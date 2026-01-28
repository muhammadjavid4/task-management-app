// import { useEffect, useState } from "react";
// import AdminLayout from "../layouts/AdminLayout";
// import { apiFetch } from "../services/api";
// import CreateTaskModal from "../components/CreateTaskModal";
// import TaskDetailsPanel from "../components/TaskDetailsPanel";

// const STATUS_STYLES = {
//   pending: "bg-orange-100 text-orange-600",
//   "in-progress": "bg-blue-100 text-blue-600",
//   completed: "bg-green-100 text-green-600",
// };

// export default function AllTasks() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);

//   const fetchTasks = async () => {
//     try {
//       setLoading(true);
//       const data = await apiFetch("http://localhost:4000/api/tasks");
//       setTasks(data);
//     } catch (e) {
//       setError(e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
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
//     <AdminLayout>
//       {/* CREATE TASK MODAL */}
//       <CreateTaskModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         onCreated={fetchTasks}
//       />

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">All Tasks</h1>
//           <p className="text-sm text-gray-500">
//             Manage, assign, and track tasks across your team
//           </p>
//         </div>

//         <button
//           onClick={() => setOpenModal(true)}
//           className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
//         >
//           Create Task
//         </button>
//       </div>

//       {/* FILTER TABS */}
//       <div className="flex gap-2 mb-4">
//         {["all", "pending", "completed", "in-progress"].map((f) => (
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

//       {/* STATES */}
//       {loading && <p className="text-gray-500">Loading tasks...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {/* TABLE + SIDE PANEL WRAPPER */}
//       {!loading && (
//         <div className="flex gap-6">
//           {/* LEFT TABLE */}
//           <div
//             className={`transition-all duration-300 ${
//               selectedTask ? "w-[calc(100%-420px)]" : "w-full"
//             }`}
//           >
//             <div className="bg-white rounded-xl border overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-50 text-gray-500">
//                   <tr>
//                     <th className="p-4 text-left">Task ID</th>
//                     <th className="p-4 text-left">Task Title</th>
//                     <th className="p-4 text-left">Assigned To</th>
//                     <th className="p-4 text-left">Status</th>
//                     <th className="p-4 text-left">Created On</th>
//                     <th className="p-4 text-left">Actions</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filteredTasks.map((task) => (
//                     <tr key={task.id} className="border-t">
//                       {/* ID */}
//                       <td className="p-4 text-gray-500">
//                         #{task.id.slice(0, 6)}
//                       </td>

//                       {/* TITLE */}
//                       <td className="p-4 font-medium text-gray-800">
//                         {task.title}
//                       </td>

//                       {/* ASSIGNED */}
//                       <td className="p-4">
//                         {task.assignedUser?.name || "—"}
//                       </td>

//                       {/* STATUS */}
//                       <td className="p-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-medium ${
//                             STATUS_STYLES[task.status]
//                           }`}
//                         >
//                           {task.status.replace("-", " ")}
//                         </span>
//                       </td>

//                       {/* DATE */}
//                       <td className="p-4">
//                         {formatDate(task.createdAt)}
//                       </td>

//                       {/* ACTION */}
//                       <td className="p-4">
//                         <button
//                           onClick={() => setSelectedTask(task)}
//                           className="bg-gray-100 px-3 py-1 rounded text-sm hover:bg-gray-200"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* RIGHT TASK DETAILS PANEL */}
//           {selectedTask && (
//             <TaskDetailsPanel
//               task={selectedTask}
//               onClose={() => setSelectedTask(null)}
//             />
//           )}
//         </div>
//       )}
//     </AdminLayout>
//   );
// }












// import { useEffect, useState } from "react";
// import AdminLayout from "../layouts/AdminLayout";
// import { apiFetch } from "../services/api";
// import CreateTaskModal from "../components/CreateTaskModal";
// import TaskDetailsPanel from "../components/TaskDetailsPanel";

// const STATUS_STYLES = {
//   pending: "bg-orange-100 text-orange-600",
//   "in-progress": "bg-blue-100 text-blue-600",
//   completed: "bg-green-100 text-green-600",
// };

// export default function AllTasks() {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);

//   // 🔥 FETCH TASKS
//   const fetchTasks = async () => {
//     try {
//       setLoading(true);
//       const data = await apiFetch("http://localhost:4000/api/tasks");
//       setTasks(data);
//     } catch (e) {
//       setError(e.message || "Failed to load tasks");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   // 🔹 FILTER
//   const filteredTasks =
//     filter === "all"
//       ? tasks
//       : tasks.filter((t) => t.status === filter);

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleDateString();
//   };

//   return (
//     <AdminLayout>
//       {/* CREATE TASK MODAL */}
//       <CreateTaskModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         onCreated={fetchTasks}
//       />

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">All Tasks</h1>
//           <p className="text-sm text-gray-500">
//             Manage, assign, and track tasks across your team
//           </p>
//         </div>

//         <button
//           onClick={() => setOpenModal(true)}
//           className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
//         >
//           Create Task
//         </button>
//       </div>

//       {/* FILTER TABS */}
//       <div className="flex gap-2 mb-4">
//         {["all", "pending", "completed", "in-progress"].map((f) => (
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

//       {/* STATES */}
//       {loading && <p className="text-gray-500">Loading tasks...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {/* TABLE + SIDE PANEL */}
//       {!loading && (
//         <div className="flex gap-6">
//           {/* LEFT TABLE */}
//           <div
//             className={`transition-all duration-300 ${
//               selectedTask ? "w-[calc(100%-420px)]" : "w-full"
//             }`}
//           >
//             <div className="bg-white rounded-xl border overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-gray-50 text-gray-500">
//                   <tr>
//                     <th className="p-4 text-left">Task ID</th>
//                     <th className="p-4 text-left">Task Title</th>
//                     <th className="p-4 text-left">Assigned To</th>
//                     <th className="p-4 text-left">Status</th>
//                     <th className="p-4 text-left">Created On</th>
//                     <th className="p-4 text-left">Actions</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filteredTasks.map((task) => (
//                     <tr key={task.id} className="border-t">
//                       {/* ID */}
//                       <td className="p-4 text-gray-500">
//                         #{task.id.slice(0, 6)}
//                       </td>

//                       {/* TITLE */}
//                       <td className="p-4 font-medium text-gray-800">
//                         {task.title}
//                       </td>

//                       {/* ASSIGNED */}
//                       <td className="p-4">
//                         {task.assignedUser?.name || "—"}
//                       </td>

//                       {/* STATUS */}
//                       <td className="p-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-medium ${
//                             STATUS_STYLES[task.status]
//                           }`}
//                         >
//                           {task.status.replace("-", " ")}
//                         </span>
//                       </td>

//                       {/* DATE */}
//                       <td className="p-4">
//                         {formatDate(task.createdAt)}
//                       </td>

//                       {/* ACTION */}
//                       <td className="p-4">
//                         <button
//                           onClick={() => setSelectedTask(task)}
//                           className="bg-gray-100 px-3 py-1 rounded text-sm hover:bg-gray-200"
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {filteredTasks.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan="6"
//                         className="p-6 text-center text-gray-500"
//                       >
//                         No tasks found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* RIGHT TASK DETAILS PANEL */}
//           {selectedTask && (
//             <TaskDetailsPanel
//               task={selectedTask}
//               onClose={() => setSelectedTask(null)}
//               onDeleted={fetchTasks}   // 🔥 DELETE KE BAAD REFRESH
//             />
//           )}
//         </div>
//       )}
//     </AdminLayout>
//   );
// }



import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { apiFetch } from "../services/api";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskDetailsPanel from "../components/TaskDetailsPanel";

const STATUS_STYLES = {
  pending: "bg-orange-100 text-orange-600",
  "in-progress": "bg-blue-100 text-blue-600",
  completed: "bg-green-100 text-green-600",
};

export default function AllTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await apiFetch("http://localhost:4000/api/tasks");
      setTasks(data);
    } catch (e) {
      setError(e.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  const formatDate = (createdAt) => {
    if (!createdAt?._seconds) return "-";
    return new Date(createdAt._seconds * 1000).toLocaleDateString();
  };

  return (
    <AdminLayout>
      {(search) => {
        const searchedTasks = filteredTasks.filter((task) => {
          if (!search) return true;
          const q = search.toLowerCase();

          return (
            task.title?.toLowerCase().includes(q) ||
            task.assignedUser?.name?.toLowerCase().includes(q) ||
            task.id?.toLowerCase().includes(q)
          );
        });

        return (
          <>
            <CreateTaskModal
              open={openModal}
              onClose={() => setOpenModal(false)}
              onCreated={fetchTasks}
            />

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  All Tasks
                </h1>
                <p className="text-sm text-gray-500">
                  Manage, assign, and track tasks across your team
                </p>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
              >
                Create Task
              </button>
            </div>

            <div className="flex gap-2 mb-4">
              {["all", "pending", "completed", "in-progress"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    filter === f
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {f === "all" ? "All" : f.replace("-", " ")}
                </button>
              ))}
            </div>

            {loading && (
              <p className="text-gray-500">Loading tasks...</p>
            )}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && (
              <div className="flex gap-6">
                <div
                  className={`transition-all duration-300 ${
                    selectedTask
                      ? "w-[calc(100%-420px)]"
                      : "w-full"
                  }`}
                >
                  <div className="bg-white rounded-xl border overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 text-gray-500">
                        <tr>
                          <th className="p-4 text-left">Task ID</th>
                          <th className="p-4 text-left">Task Title</th>
                          <th className="p-4 text-left">Assigned To</th>
                          <th className="p-4 text-left">Status</th>
                          <th className="p-4 text-left">Created On</th>
                          <th className="p-4 text-left">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {searchedTasks.map((task) => (
                          <tr key={task.id} className="border-t">
                            <td className="p-4 text-gray-500">
                              #{task.id.slice(0, 6)}
                            </td>
                            <td className="p-4 font-medium text-gray-800">
                              {task.title}
                            </td>
                            <td className="p-4">
                              {task.assignedUser?.name || "—"}
                            </td>
                            <td className="p-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  STATUS_STYLES[task.status]
                                }`}
                              >
                                {task.status.replace("-", " ")}
                              </span>
                            </td>
                            <td className="p-4">
                              {formatDate(task.createdAt)}
                            </td>
                            <td className="p-4">
                              <button
                                onClick={() => setSelectedTask(task)}
                                className="bg-gray-100 px-3 py-1 rounded text-sm hover:bg-gray-200"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}

                        {searchedTasks.length === 0 && (
                          <tr>
                            <td
                              colSpan="6"
                              className="p-6 text-center text-gray-500"
                            >
                              No tasks found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {selectedTask && (
                  <TaskDetailsPanel
                    task={selectedTask}
                    onClose={() => setSelectedTask(null)}
                    onDeleted={fetchTasks}
                  />
                )}
              </div>
            )}
          </>
        );
      }}
    </AdminLayout>
  );
}
