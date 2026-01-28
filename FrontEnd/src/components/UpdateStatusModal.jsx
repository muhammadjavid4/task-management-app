// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";

// export default function EditTaskModal({
//   open,
//   onClose,
//   task,
//   onUpdated,
// }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [assignedTo, setAssignedTo] = useState("");
//   const [status, setStatus] = useState("pending");
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 LOAD USERS
//   useEffect(() => {
//     if (!open) return;

//     apiFetch("http://localhost:4000/api/users")
//       .then(setUsers)
//       .catch(() => {});
//   }, [open]);

//   // 🔹 PREFILL TASK DATA
//   useEffect(() => {
//     if (task) {
//       setTitle(task.title || "");
//       setDescription(task.description || "");
//       setAssignedTo(task.assignedTo || "");
//       setStatus(task.status || "pending");
//     }
//   }, [task]);

//   if (!open || !task) return null;

//   // 🔥 UPDATE TASK
//   const handleUpdate = async () => {
//     try {
//       setLoading(true);

//       await apiFetch(
//         `http://localhost:4000/api/tasks/${task.id}`,
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             title,
//             description,
//             assignedTo,
//             status,
//           }),
//         }
//       );

//       onClose();
//       onUpdated(); // 🔥 refresh AllTasks
//     } catch (err) {
//       alert(err.message || "Failed to update task");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-lg rounded-xl shadow-xl">

//         {/* HEADER */}
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Edit Task
//           </h2>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
//           >
//             ✕
//           </button>
//         </div>

//         {/* BODY */}
//         <div className="px-6 py-5 space-y-4">

//           {/* STATUS */}
//           <div>
//             <label className="text-xs text-gray-500 mb-1 block">
//               Status
//             </label>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full border rounded-md px-3 py-2 text-sm"
//             >
//               <option value="pending">Pending</option>
//               <option value="in-progress">In Progress</option>
//               <option value="completed">Completed</option>
//             </select>
//           </div>

//           {/* TITLE */}
//           <div>
//             <label className="text-xs text-gray-500 mb-1 block">
//               Task Title
//             </label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full border rounded-md px-3 py-2 text-sm"
//             />
//           </div>

//           {/* ASSIGNED TO */}
//           <div>
//             <label className="text-xs text-gray-500 mb-1 block">
//               Assigned To
//             </label>
//             <select
//               value={assignedTo}
//               onChange={(e) => setAssignedTo(e.target.value)}
//               className="w-full border rounded-md px-3 py-2 text-sm"
//             >
//               <option value="">Select user</option>
//               {users.map((u) => (
//                 <option key={u.uid} value={u.uid}>
//                   {u.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* DESCRIPTION */}
//           <div>
//             <label className="text-xs text-gray-500 mb-1 block">
//               Description
//             </label>
//             <textarea
//               rows={4}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full border rounded-md px-3 py-2 text-sm resize-none"
//             />
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-6 py-4 border-t flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleUpdate}
//             disabled={loading}
//             className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 text-sm"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import { toast } from "react-toastify";

// export default function UpdateStatusModal({
//   open,
//   onClose,
//   task,
//   onUpdated,
// }) {
//   const [status, setStatus] = useState("pending");
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!open) return;
//     apiFetch("http://localhost:4000/api/users")
//       .then(setUsers)
//       .catch(() => {});
//   }, [open]);

//   useEffect(() => {
//     if (task) {
//       setStatus(task.status || "pending");
//     }
//   }, [task]);

//   if (!open || !task) return null;

//   const handleSave = async () => {
//     try {
//       setLoading(true);
//       await apiFetch(
//         `http://localhost:4000/api/tasks/${task.id}`,
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             status,
//           }),
//         }
//       );
//       onClose();
//       onUpdated();
//       toast.success("Status updated successfully");
//     } catch (e) {
//       alert("Failed to update status");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-[520px] rounded-2xl shadow-2xl">

//         {/* HEADER */}
//         <div className="flex items-center justify-between px-6 py-5">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Task Status
//           </h2>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-500"
//           >
//             ✕
//           </button>
//         </div>

//         {/* STATUS BANNER */}
//         <div className="px-6">
//           <div className="bg-orange-50 rounded-xl px-5 py-4 flex items-center justify-between">
//             <span className="text-sm text-gray-500">Status</span>
//             <span className="text-sm font-semibold text-orange-500">
//               {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
//             </span>
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="px-6 py-6 space-y-5">

//           {/* TASK TITLE */}
//           <div>
//             <p className="text-xs text-gray-500 mb-1">Task Title</p>
//             <p className="text-sm font-medium text-gray-900">
//               {task.title}
//             </p>
//           </div>

//           {/* META */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <p className="text-xs text-gray-500 mb-1">Assigned To</p>
//               <p className="text-sm text-gray-900">
//                 {task.assignedUser?.name || "—"}
//               </p>
//             </div>

//             <div>
//               <p className="text-xs text-gray-500 mb-1">Task ID</p>
//               <p className="text-sm text-gray-900">
//                 #{task.id.slice(0, 6)}
//               </p>
//             </div>
//           </div>

//           <hr />

//           {/* UPDATE STATUS */}
//           <div>
//             <p className="text-sm font-medium text-gray-800 mb-2">
//               Update status
//             </p>

//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option value="pending">Pending</option>
//               <option value="in-progress">In Progress</option>
//               <option value="completed">Completed</option>
//             </select>

//             <p className="text-xs text-gray-400 mt-2">
//               Changing the status will update it for the assigned user.
//             </p>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-6 py-5 flex justify-between gap-4">
//           <button
//             onClick={onClose}
//             className="w-1/2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-medium"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSave}
//             disabled={loading}
//             className="w-1/2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import { toast } from "react-toastify";

export default function UpdateStatusModal({
  open,
  onClose,
  task,
  onUpdated,
}) {
  const [status, setStatus] = useState("pending");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    apiFetch("http://localhost:4000/api/users")
      .then(setUsers)
      .catch(() => {});
  }, [open]);

  useEffect(() => {
    if (task) {
      setStatus(task.status || "pending");
    }
  }, [task]);

  if (!open || !task) return null;

  const handleSave = async () => {
    try {
      setLoading(true);
      await apiFetch(
        `http://localhost:4000/api/tasks/${task.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            status,
          }),
        }
      );
      onClose();
      onUpdated();
      toast.success("Status updated successfully");
    } catch (e) {
      alert("Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[520px] rounded-2xl shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Task Status
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-500"
          >
            ✕
          </button>
        </div>

        {/* STATUS BANNER */}
        <div className="px-6">
          <div className="bg-orange-50 rounded-xl px-5 py-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Status</span>
            <span className="text-sm font-semibold text-orange-500">
              {status.charAt(0).toUpperCase() +
                status.slice(1).replace("-", " ")}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6 space-y-5">

          {/* TASK TITLE */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Task Title</p>
            <p className="text-sm font-medium text-gray-900">
              {task.title}
            </p>
          </div>

          {/* META */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Assigned To</p>
              <p className="text-sm text-gray-900">
                {task.assignedUser?.name || "—"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Task ID</p>
              <p className="text-sm text-gray-900">
                #{task.id.slice(0, 6)}
              </p>
            </div>
          </div>

          <hr />

          {/* UPDATE STATUS */}
          <div>
            <p className="text-sm font-medium text-gray-800 mb-2">
              Update status
            </p>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <p className="text-xs text-gray-400 mt-2">
              Changing the status will update it for the assigned user.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-5 flex justify-between gap-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="w-1/2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-medium disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="w-1/2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700
                       text-white text-sm font-medium
                       flex items-center justify-center gap-2
                       active:scale-95 transition-all
                       disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading && (
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}

            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
