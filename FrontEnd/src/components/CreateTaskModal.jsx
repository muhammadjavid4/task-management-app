// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import { toast } from "react-toastify";

// export default function CreateTaskModal({ open, onClose, onCreated }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [users, setUsers] = useState([]);
//   const [assignedTo, setAssignedTo] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!open) return;

//     apiFetch("http://localhost:4000/api/users")
//       .then(setUsers)
//       .catch(() => setUsers([]));
//   }, [open]);

//   if (!open) return null;

//   const submit = async () => {
//     if (!title.trim()) {
//       setError("Task title is required");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       await apiFetch("http://localhost:4000/api/tasks", {
//         method: "POST",
//         body: JSON.stringify({
//           title,
//           description,
//           assignedTo: assignedTo || null,
//         }),
//       });

//       onCreated();
//       onClose();
//       toast.success("Task created successfully");
//       // reset
//       setTitle("");
//       setDescription("");
//       setAssignedTo("");
//     } catch (e) {
//       setError(e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-md rounded-xl p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-400 hover:text-black"
//         >
//           ✕
//         </button>

//         <h2 className="text-lg font-semibold mb-4">Create Task</h2>

//         {error && (
//           <p className="text-sm text-red-600 bg-red-100 p-2 rounded mb-3">
//             {error}
//           </p>
//         )}

//         <div className="space-y-3">
//           <div>
//             <label className="text-sm">Task title</label>
//             <input
//               className="w-full border px-3 py-2 rounded"
//               placeholder="Enter task title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="text-sm">Description</label>
//             <textarea
//               className="w-full border px-3 py-2 rounded"
//               rows="3"
//               placeholder="Briefly describe the task"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="text-sm">Assign to</label>
//             <select
//               className="w-full border px-3 py-2 rounded"
//               value={assignedTo}
//               onChange={(e) => setAssignedTo(e.target.value)}
//             >
//               <option value="">Unassigned</option>
//               {users.map((u) => (
//                 <option key={u.uid} value={u.uid}>
//                   {u.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={submit}
//             disabled={loading}
//             className="px-4 py-2 rounded bg-indigo-600 text-white"
//           >
//             {loading ? "Creating..." : "Create Task"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import { toast } from "react-toastify";

export default function CreateTaskModal({ open, onClose, onCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [users, setUsers] = useState([]);
  const [assignedTo, setAssignedTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    apiFetch("/api/users")
      .then(setUsers)
      .catch(() => setUsers([]));
  }, [open]);

  if (!open) return null;

  const submit = async () => {
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await apiFetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          assignedTo: assignedTo || null,
        }),
      });

      onCreated();
      onClose();
      toast.success("Task created successfully");

      setTitle("");
      setDescription("");
      setAssignedTo("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-[520px] rounded-2xl px-8 py-6 relative shadow-xl">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 w-8 h-8
                     rounded-full flex items-center justify-center
                     text-gray-500 hover:bg-gray-100"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Create Task
        </h2>

        {error && (
          <p className="text-sm text-red-600 bg-red-100 p-3 rounded-lg mb-4">
            {error}
          </p>
        )}

        {/* FORM */}
        <div className="space-y-5">

          {/* TASK TITLE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the task title"
              className="w-full h-11 px-4 border rounded-lg text-sm
                         placeholder:text-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe what needs to be done"
              className="w-full px-4 py-3 border rounded-lg text-sm
                         resize-none placeholder:text-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* ASSIGN */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assigned User Dropdown
            </label>
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="w-full h-11 px-4 border rounded-lg text-sm
                         text-gray-700 bg-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Assign to</option>
              {users.map((u) => (
                <option key={u.uid} value={u.uid}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-lg bg-gray-100
                       text-gray-800 text-sm font-medium
                       hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            disabled={loading}
            className="flex-1 h-11 rounded-lg
                       bg-indigo-600 text-white text-sm font-medium
                       hover:bg-indigo-700
                       disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
}
