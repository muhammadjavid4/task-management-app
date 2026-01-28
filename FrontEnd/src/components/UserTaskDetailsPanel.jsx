// import { useState } from "react";
// import UpdateStatusModal from "./UpdateStatusModal";

// export default function UserTaskDetailsPanel({ task, onClose, onUpdated }) {
//   const [openStatus, setOpenStatus] = useState(false);

//   if (!task) return null;

//   return (
//     <>
//       <div className="w-[420px] bg-white border-l shadow-xl flex flex-col">
//         {/* HEADER */}
//         <div className="flex justify-between px-5 py-4 border-b">
//           <h2 className="text-lg font-semibold">Task Details</h2>
//           <button onClick={onClose}>✕</button>
//         </div>

//         {/* BODY */}
//         <div className="px-5 py-4 space-y-5">
//           <div>
//             <p className="text-xs text-gray-400">Task Title</p>
//             <p className="font-medium">{task.title}</p>
//           </div>

//           <div>
//             <p className="text-xs text-gray-400">Status</p>
//             <p className="capitalize">{task.status.replace("-", " ")}</p>
//           </div>

//           <div>
//             <p className="text-xs text-gray-400">Description</p>
//             <p className="text-sm text-gray-600">
//               {task.description || "No description"}
//             </p>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-5 py-4 border-t">
//           <button
//             onClick={() => setOpenStatus(true)}
//             className="w-full py-2 rounded-md bg-indigo-600 text-white"
//           >
//             Update Status
//           </button>
//         </div>
//       </div>

//       <UpdateStatusModal
//         open={openStatus}
//         onClose={() => setOpenStatus(false)}
//         task={task}
//         onUpdated={onUpdated}
//       />
//     </>
//   );
// }

// import { useState } from "react";
// import UserUpdateStatusModal from "./UserUpdateStatusModal";

// export default function UserTaskDetailsPanel({ task, onClose, onUpdated }) {
//   const [openStatus, setOpenStatus] = useState(false);

//   if (!task) return null;

//   const formatDate = (createdAt) => {
//     if (!createdAt?._seconds) return "-";
//     return new Date(createdAt._seconds * 1000).toLocaleString();
//   };

//   return (
//     <>
//       <div className="w-[420px] bg-white border-l shadow-xl flex flex-col">

//         {/* HEADER */}
//         <div className="flex justify-between px-5 py-4 border-b">
//           <h2 className="text-lg font-semibold">Task Details</h2>
//           <button onClick={onClose}>✕</button>
//         </div>

//         {/* BODY */}
//         <div className="flex-1 px-5 py-4 space-y-6">

//           {/* STATUS */}
//           <div className="bg-orange-50 border rounded-lg px-4 py-3 flex justify-between">
//             <div>
//               <p className="text-xs text-gray-500">Status</p>
//               <p className="font-medium capitalize">{task.status.replace("-", " ")}</p>
//             </div>
//             <button
//               onClick={() => setOpenStatus(true)}
//               className="text-xs border px-3 py-1 rounded-md"
//             >
//               Update status
//             </button>
//           </div>

//           {/* TITLE */}
//           <div>
//             <p className="text-xs text-gray-500">Task Title</p>
//             <p className="font-medium">{task.title}</p>
//           </div>

//           {/* META */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <p className="text-xs text-gray-500">Assigned By</p>
//               <p className="text-sm">Admin</p>
//             </div>

//             <div>
//               <p className="text-xs text-gray-500">Task ID</p>
//               <p className="text-sm">#{task.id.slice(0, 6)}</p>
//             </div>
//           </div>

//           {/* DESCRIPTION */}
//           <div>
//             <p className="text-xs text-gray-500">Description</p>
//             <p className="text-sm">{task.description || "No description"}</p>
//           </div>

//           {/* ACTIVITY */}
//           <div>
//             <p className="text-xs text-gray-500 mb-2">Activity</p>
//             <p className="text-sm text-gray-600">
//               Task assigned on {formatDate(task.createdAt)}
//             </p>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="px-5 py-4 border-t">
//           <button
//             onClick={() => setOpenStatus(true)}
//             className="w-full bg-indigo-600 text-white py-2 rounded-md"
//           >
//             Update Status
//           </button>
//         </div>
//       </div>

//       <UserUpdateStatusModal
//         open={openStatus}
//         onClose={() => setOpenStatus(false)}
//         task={task}
//         onUpdated={onUpdated}
//       />
//     </>
//   );
// }

import { useState } from "react";
import UserUpdateStatusModal from "./UserUpdateStatusModal";

export default function UserTaskDetailsPanel({ task, onClose, onUpdated }) {
  const [openStatus, setOpenStatus] = useState(false);

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

  return (
    <>
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

            <button
              onClick={() => setOpenStatus(true)}
              className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50"
            >
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
              <p className="text-xs text-gray-500 mb-1">Assigned By</p>
              <p className="text-sm text-gray-800">Admin</p>
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

          {/* ACTIVITY */}
          <div>
            <p className="text-xs text-gray-500 mb-3">
              Activity History
            </p>

            <div className="space-y-4">
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
        <div className="px-5 py-4 border-t">
          <button
            onClick={() => setOpenStatus(true)}
            className="px-4 py-2 rounded-md text-sm bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Update Status
          </button>
        </div>
      </div>

      {/* SAME UI MODAL */}
      <UserUpdateStatusModal
        open={openStatus}
        onClose={() => setOpenStatus(false)}
        task={task}
        onUpdated={onUpdated}
      />
    </>
  );
}
