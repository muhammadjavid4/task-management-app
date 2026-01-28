// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import { toast } from "react-toastify";

// export default function EditTaskModal({
//   open,
//   onClose,
//   task,
//   onUpdated,
// }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [assignedTo, setAssignedTo] = useState("");
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 Load users
//   useEffect(() => {
//     if (!open) return;

//     apiFetch("http://localhost:4000/api/users")
//       .then(setUsers)
//       .catch(() => {});
//   }, [open]);

//   // 🔹 Prefill task data
//   useEffect(() => {
//     if (task) {
//       setTitle(task.title || "");
//       setDescription(task.description || "");
//       setAssignedTo(task.assignedTo || "");
//     }
//   }, [task]);

//   if (!open || !task) return null;

//   // 🔥 Save changes
//   const handleSave = async () => {
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
//           }),
//         }
//       );

//       onClose();
//       onUpdated(); // refresh AllTasks
//       toast.success("Task updated successfully");
//     } catch (err) {
//       alert(err.message || "Failed to update task");
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
//             Edit Task
//           </h2>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
//           >
//             ✕
//           </button>
//         </div>

//         {/* BODY */}
//         <div className="px-6 pb-6 space-y-5">

//           {/* TASK TITLE */}
//           <div>
//             <label className="text-sm font-medium text-gray-800 block mb-2">
//               Task title
//             </label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* DESCRIPTION */}
//           <div>
//             <label className="text-sm font-medium text-gray-800 block mb-2">
//               Description
//             </label>
//             <textarea
//               rows={4}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Briefly describe what needs to be done"
//               className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm resize-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           {/* ASSIGNED USER */}
//           <div>
//             <label className="text-sm font-medium text-gray-800 block mb-2">
//               Assigned User Dropdown
//             </label>
//             <select
//               value={assignedTo}
//               onChange={(e) => setAssignedTo(e.target.value)}
//               className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option value="">Select user</option>
//               {users.map((u) => (
//                 <option key={u.uid} value={u.uid}>
//                   {u.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-6 py-5 flex gap-4">
//           <button
//             onClick={onClose}
//             className="w-1/2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-medium text-gray-800"
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

export default function EditTaskModal({
  open,
  onClose,
  task,
  onUpdated,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Load users
  useEffect(() => {
    if (!open) return;

    apiFetch("http://localhost:4000/api/users")
      .then(setUsers)
      .catch(() => {});
  }, [open]);

  // 🔹 Prefill task data
  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setAssignedTo(task.assignedTo || "");
    }
  }, [task]);

  if (!open || !task) return null;

  // 🔥 Save changes
  const handleSave = async () => {
    try {
      setLoading(true);

      await apiFetch(
        `http://localhost:4000/api/tasks/${task.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title,
            description,
            assignedTo,
          }),
        }
      );

      onClose();
      onUpdated(); // refresh AllTasks
      toast.success("Task updated successfully");
    } catch (err) {
      alert(err.message || "Failed to update task");
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
            Edit Task
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 pb-6 space-y-5">

          {/* TASK TITLE */}
          <div>
            <label className="text-sm font-medium text-gray-800 block mb-2">
              Task title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium text-gray-800 block mb-2">
              Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe what needs to be done"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm resize-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* ASSIGNED USER */}
          <div>
            <label className="text-sm font-medium text-gray-800 block mb-2">
              Assigned User Dropdown
            </label>
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select user</option>
              {users.map((u) => (
                <option key={u.uid} value={u.uid}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-5 flex gap-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="w-1/2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200
                       text-sm font-medium text-gray-800 disabled:opacity-50"
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

