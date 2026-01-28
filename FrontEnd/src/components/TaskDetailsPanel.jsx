// export default function TaskDetailsPanel({ task, onClose }) {
//   if (!task) return null;

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleString();
//   };

//   const statusText = {
//     pending: "Task not started",
//     "in-progress": "Task in progress",
//     completed: "Task completed",
//   };

//   return (
//     <div className="w-[420px] bg-white border-l shadow-xl flex flex-col">

//       {/* HEADER */}
//       <div className="flex items-center justify-between px-5 py-4 border-b">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Task Details
//         </h2>
//         <button
//           onClick={onClose}
//           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
//         >
//           ✕
//         </button>
//       </div>

//       {/* BODY */}
//       <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">

//         {/* STATUS */}
//         <div className="bg-orange-50 border border-orange-100 rounded-lg px-4 py-3 flex items-center justify-between">
//           <div>
//             <p className="text-xs text-gray-500">Status</p>
//             <p className="text-sm font-medium text-orange-600 capitalize">
//               {task.status.replace("-", " ")}
//             </p>
//           </div>

//           <button className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50">
//             Update status
//           </button>
//         </div>

//         {/* TITLE */}
//         <div>
//           <p className="text-xs text-gray-500 mb-1">Task Title</p>
//           <p className="text-sm font-medium text-gray-800">
//             {task.title}
//           </p>
//         </div>

//         {/* META */}
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <p className="text-xs text-gray-500 mb-1">Assigned To</p>
//             <p className="text-sm text-gray-800">
//               {task.assignedUser?.name || "Unassigned"}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs text-gray-500 mb-1">Task ID</p>
//             <p className="text-sm text-gray-800">
//               #{task.id.slice(0, 6)}
//             </p>
//           </div>
//         </div>

//         {/* DESCRIPTION */}
//         <div>
//           <p className="text-xs text-gray-500 mb-1">Description</p>
//           <p className="text-sm text-gray-700 leading-relaxed">
//             {task.description || "No description provided for this task."}
//           </p>
//         </div>

//         {/* ACTIVITY HISTORY */}
//         <div>
//           <p className="text-xs text-gray-500 mb-3">
//             Activity History
//           </p>

//           <div className="space-y-4">
//             {/* CREATED */}
//             <div className="flex gap-3">
//               <span className="w-2.5 h-2.5 bg-gray-800 rounded-full mt-1"></span>
//               <div>
//                 <p className="text-sm text-gray-800">
//                   Task created by Admin
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   {formatDate(task.createdAt)}
//                 </p>
//               </div>
//             </div>

//             {/* STATUS */}
//             <div className="flex gap-3">
//               <span className="w-2.5 h-2.5 border border-red-400 rounded-full mt-1"></span>
//               <div>
//                 <p className="text-sm text-gray-800">
//                   {statusText[task.status]}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="px-5 py-4 border-t flex justify-end gap-3">
//         <button className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200">
//           Delete
//         </button>

//         <button className="px-4 py-2 rounded-md text-sm bg-indigo-600 text-white hover:bg-indigo-700">
//           Edit Task
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function TaskDetailsPanel({ task, onClose }) {
//   if (!task) return null;

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleString();
//   };

//   const statusText = {
//     pending: "Task not started",
//     "in-progress": "Task in progress",
//     completed: "Task completed",
//   };

//   return (
//     <div className="w-[420px] bg-white border-l shadow-xl flex flex-col">

//       {/* HEADER */}
//       <div className="flex items-center justify-between px-5 py-4 border-b">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Task Details
//         </h2>
//         <button
//           onClick={onClose}
//           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
//         >
//           ✕
//         </button>
//       </div>

//       {/* BODY */}
//       <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">

//         {/* STATUS CARD */}
//         <div className="bg-orange-50 border border-orange-100 rounded-lg px-4 py-3 flex items-center justify-between">
//           <div>
//             <p className="text-xs text-gray-500">Status</p>
//             <p className="text-sm font-medium text-orange-600 capitalize">
//               {task.status.replace("-", " ")}
//             </p>
//           </div>

//           <button className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50">
//             Update status
//           </button>
//         </div>

//         {/* TITLE */}
//         <div>
//           <p className="text-xs text-gray-500 mb-1">Task Title</p>
//           <p className="text-sm font-medium text-gray-800">
//             {task.title}
//           </p>
//         </div>

//         {/* META */}
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <p className="text-xs text-gray-500 mb-1">Assigned To</p>
//             <p className="text-sm text-gray-800">
//               {task.assignedUser?.name || "Unassigned"}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs text-gray-500 mb-1">Task ID</p>
//             <p className="text-sm text-gray-800">
//               #{task.id.slice(0, 6)}
//             </p>
//           </div>
//         </div>

//         {/* DESCRIPTION */}
//         <div>
//           <p className="text-xs text-gray-500 mb-1">Description</p>
//           <p className="text-sm text-gray-700 leading-relaxed">
//             {task.description || "No description provided for this task."}
//           </p>
//         </div>

//         {/* ACTIVITY HISTORY */}
//         <div>
//           <p className="text-xs text-gray-500 mb-3">
//             Activity History
//           </p>

//           <div className="space-y-4">
//             {/* CREATED */}
//             <div className="flex gap-3">
//               <span className="w-2.5 h-2.5 bg-gray-800 rounded-full mt-1"></span>
//               <div>
//                 <p className="text-sm text-gray-800">
//                   Task created by Admin
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   {formatDate(task.createdAt)}
//                 </p>
//               </div>
//             </div>

//             {/* STATUS */}
//             <div className="flex gap-3">
//               <span className="w-2.5 h-2.5 border border-red-400 rounded-full mt-1"></span>
//               <div>
//                 <p className="text-sm text-gray-800">
//                   {statusText[task.status]}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="px-5 py-4 border-t flex justify-end gap-3">
//         <button className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200">
//           Delete
//         </button>

//         <button className="px-4 py-2 rounded-md text-sm bg-indigo-600 text-white hover:bg-indigo-700">
//           Edit Task
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { apiFetch } from "../services/api";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { toast } from "react-toastify";
import UpdateStatusModal from "./UpdateStatusModal";
import EditTaskModal from "./EditTaskModal";


export default function TaskDetailsPanel({ task, onClose, onDeleted }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);


  if (!task) return null;

  const formatDate = (createdAt) => {
    if (!createdAt?._seconds) return "-";
    return new Date(createdAt._seconds * 1000).toLocaleString();
  };

  const statusText = {
    pending: "Task not started",
    "in-progress": "Task in progress",
    completed: "Task completed",
  };

  // 🔥 DELETE HANDLER
  const handleDelete = async () => {
    try {
      setLoading(true);
      await apiFetch(`http://localhost:4000/api/tasks/${task.id}`, {
        method: "DELETE",
      });

      setOpenDelete(false);
      onClose();
      onDeleted(); // 🔥 refresh AllTasks
      toast.success("Task deleted successfully");
    // alert("Task deleted successfully");
    } catch (err) {
      alert(err.message || "Failed to delete task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* MAIN PANEL */}
      <div className="w-[420px] bg-white border-l shadow-xl flex flex-col">

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Task Details
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">

          {/* STATUS CARD */}
          <div className="bg-orange-50 border border-orange-100 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Status</p>
              <p className="text-sm font-medium text-orange-600 capitalize">
                {task.status.replace("-", " ")}
              </p>
            </div>

            <button onClick={() => setOpenStatus(true)} className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50">
              Update status
            </button>
          </div>

          {/* TITLE */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Task Title</p>
            <p className="text-sm font-medium text-gray-800">
              {task.title}
            </p>
          </div>

          {/* META */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Assigned To</p>
              <p className="text-sm text-gray-800">
                {task.assignedUser?.name || "Unassigned"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Task ID</p>
              <p className="text-sm text-gray-800">
                #{task.id.slice(0, 6)}
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Description</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {task.description || "No description provided for this task."}
            </p>
          </div>

          {/* ACTIVITY HISTORY */}
          <div>
            <p className="text-xs text-gray-500 mb-3">
              Activity History
            </p>

            <div className="space-y-4">
              {/* CREATED */}
              <div className="flex gap-3">
                <span className="w-2.5 h-2.5 bg-gray-800 rounded-full mt-1"></span>
                <div>
                  <p className="text-sm text-gray-800">
                    Task created by Admin
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatDate(task.createdAt)}
                  </p>
                </div>
              </div>

              {/* STATUS */}
              <div className="flex gap-3">
                <span className="w-2.5 h-2.5 border border-red-400 rounded-full mt-1"></span>
                <div>
                  <p className="text-sm text-gray-800">
                    {statusText[task.status]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-5 py-4 border-t flex justify-end gap-3">
          <button
            onClick={() => setOpenDelete(true)}
            className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
          >
            Delete
          </button>

         <button onClick={() => setOpenEdit(true)}
  className="px-4 py-2 rounded-md text-sm bg-indigo-600 text-white hover:bg-indigo-700"
>
  Edit Task
</button>
        </div>
      </div>

      {/* DELETE CONFIRM MODAL */}
      <DeleteConfirmModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleDelete}
        loading={loading}
      />
      <UpdateStatusModal
  open={openStatus}
  onClose={() => setOpenStatus(false)}
  task={task}
  onUpdated={onDeleted}
/>
        <EditTaskModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        task={task}
        onUpdated={onDeleted}
      />

    </>
  );
}
