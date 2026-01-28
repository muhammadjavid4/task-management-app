// export default function DeleteConfirmModal({ open, onClose, onConfirm }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-sm rounded-xl p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           Delete Task
//         </h3>

//         <p className="text-sm text-gray-600 mb-6">
//           Are you sure you want to delete this task?  
//           This action cannot be undone.
//         </p>

//         <div className="flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={onConfirm}
//             className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function DeleteConfirmModal({ open, onClose, onConfirm }) {
  const [isDeleting, setIsDeleting] = useState(false);

  if (!open) return null;

  const handleDelete = async () => {
    setIsDeleting(true);
    await onConfirm();   // tera delete logic jaisa ka taisa
    setIsDeleting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Delete Task
        </h3>

        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this task?
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-4 py-2 rounded-md bg-red-600 text-white text-sm
                       flex items-center gap-2
                       hover:bg-red-700
                       active:scale-95
                       transition-all
                       disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isDeleting && (
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

            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
