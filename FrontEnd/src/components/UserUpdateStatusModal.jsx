// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import { toast } from "react-toastify";

// export default function UserUpdateStatusModal({
//   open,
//   onClose,
//   task,
//   onUpdated,
// }) {
//   const [status, setStatus] = useState("pending");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (task) setStatus(task.status);
//   }, [task]);

//   if (!open || !task) return null;

//   const handleSave = async () => {
//     try {
//       setLoading(true);

//       await apiFetch(
//         `http://localhost:4000/api/tasks/${task.id}/status`,
//         {
//           method: "PUT",
//           body: JSON.stringify({ status }),
//         }
//       );

//       onClose();
//       onUpdated();
//       toast.success("Status updated successfully");
//     } catch (err) {
//       toast.error("You are not allowed to update this task");
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
//           <button onClick={onClose} className="w-8 h-8 hover:bg-gray-100 rounded-full">✕</button>
//         </div>

//         {/* STATUS BANNER */}
//         <div className="px-6">
//           <div className="bg-orange-50 rounded-xl px-5 py-4 flex justify-between">
//             <span className="text-sm text-gray-500">Status</span>
//             <span className="font-semibold text-orange-500 capitalize">
//               {status.replace("-", " ")}
//             </span>
//           </div>
//         </div>

//         {/* BODY */}
//         <div className="px-6 py-6 space-y-5">
//           <div>
//             <p className="text-xs text-gray-500 mb-1">Task Title</p>
//             <p className="font-medium">{task.title}</p>
//           </div>

//           <div>
//             <p className="text-sm font-medium mb-2">Update status</p>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full border rounded-lg px-4 py-3"
//             >
//               <option value="pending">Pending</option>
//               <option value="in-progress">In Progress</option>
//               <option value="completed">Completed</option>
//             </select>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-6 py-5 flex gap-4">
//           <button
//             onClick={onClose}
//             className="w-1/2 py-3 bg-gray-100 rounded-xl"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={loading}
//             className="w-1/2 py-3 bg-indigo-600 text-white rounded-xl"
//           >
//             {loading ? "Saving..." : "Save Changes"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";
// import { toast } from "react-toastify";

// export default function UserUpdateStatusModal({
//   open,
//   onClose,
//   task,
//   onUpdated,
// }) {
//   const [status, setStatus] = useState("pending");
//   const [loading, setLoading] = useState(false);

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
//   `http://localhost:4000/api/tasks/${task.id}/status`,
//   {
//     method: "PATCH",   // 🔥 THIS IS THE KEY
//     body: JSON.stringify({ status }),
//   }
// );


//       onClose();
//     //   onUpdated();
//     await onUpdated();
//       toast.success("Status updated successfully");
//     } catch (err) {
//     //   toast.error("You are not allowed to update this task");
//         toast.error(err.message || "Failed to update status");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-[520px] rounded-2xl shadow-2xl">

//         {/* HEADER – SAME AS ADMIN */}
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

//         {/* STATUS BANNER – SAME */}
//         <div className="px-6">
//           <div className="bg-orange-50 rounded-xl px-5 py-4 flex items-center justify-between">
//             <span className="text-sm text-gray-500">Status</span>
//             <span className="text-sm font-semibold text-orange-500 capitalize">
//               {status.replace("-", " ")}
//             </span>
//           </div>
//         </div>

//         {/* CONTENT – SAME */}
//         <div className="px-6 py-6 space-y-5">

//           {/* TASK TITLE */}
//           <div>
//             <p className="text-xs text-gray-500 mb-1">Task Title</p>
//             <p className="text-sm font-medium text-gray-900">
//               {task.title}
//             </p>
//           </div>

//           {/* META – ONLY TEXT CHANGE */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <p className="text-xs text-gray-500 mb-1">Assigned By</p>
//               <p className="text-sm text-gray-900">Admin</p>
//             </div>

//             <div>
//               <p className="text-xs text-gray-500 mb-1">Task ID</p>
//               <p className="text-sm text-gray-900">
//                 #{task.id.slice(0, 6)}
//               </p>
//             </div>
//           </div>

//           <hr />

//           {/* UPDATE STATUS – SAME */}
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
//               Changing the status will update it for you.
//             </p>
//           </div>
//         </div>

//         {/* FOOTER – SAME */}
//         <div className="px-6 py-5 flex justify-between gap-4">
//           <button
//             onClick={onClose}
//             disabled={loading}
//             className="w-1/2 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-medium disabled:opacity-50"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSave}
//             disabled={loading}
//             className="w-1/2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700
//                        text-white text-sm font-medium
//                        flex items-center justify-center gap-2
//                        active:scale-95 transition-all
//                        disabled:opacity-70 disabled:cursor-not-allowed"
//           >
//             {loading ? "Saving..." : "Save Changes"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import { toast } from "react-toastify";

export default function UserUpdateStatusModal({
  open,
  onClose,
  task,
  onUpdated,
}) {
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);

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
        `/api/tasks/${task.id}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({ status }),
        }
      );

      onClose();
      await onUpdated();
      toast.success("Status updated successfully");
    } catch (err) {
      toast.error(err.message || "Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-[520px] rounded-2xl shadow-2xl animate-scaleIn">
          
          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <h2 className="text-xl font-semibold text-gray-900">
              Task Status
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center
                         hover:bg-gray-100 text-gray-500 transition"
            >
              ✕
            </button>
          </div>

          {/* STATUS BANNER */}
          <div className="px-6 pt-5">
            <div className="bg-orange-50 rounded-xl px-5 py-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Status</span>
              <span className="text-sm font-semibold text-orange-500 capitalize">
                {status.replace("-", " ")}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-6 py-6 space-y-5">
            <div>
              <p className="text-xs text-gray-500 mb-1">Task Title</p>
              <p className="text-sm font-medium text-gray-900">
                {task.title}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Assigned By</p>
                <p className="text-sm text-gray-900">Admin</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Task ID</p>
                <p className="text-sm text-gray-900">
                  #{task.id.slice(0, 6)}
                </p>
              </div>
            </div>

            <hr />

            <div>
              <p className="text-sm font-medium text-gray-800 mb-2">
                Update status
              </p>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>

              <p className="text-xs text-gray-400 mt-2">
                Changing the status will update it for you.
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="px-6 py-5 flex gap-4 border-t">
            <button
              onClick={onClose}
              disabled={loading}
              className="w-1/2 py-3 rounded-xl bg-gray-100
                         hover:bg-gray-200 text-sm font-medium
                         transition disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              disabled={loading}
              className="w-1/2 py-3 rounded-xl bg-indigo-600
                         hover:bg-indigo-700 text-white text-sm font-medium
                         flex items-center justify-center
                         active:scale-95 transition
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(8px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          .animate-scaleIn {
            animation: scaleIn 0.25s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}
