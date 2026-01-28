// export default function Topbar() {
//   return (
//     <header className="h-16 bg-white border-b flex items-center justify-between px-6">
//       <input
//         type="text"
//         placeholder="Search here..."
//         className="w-72 hidden md:block px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />

//       <div className="flex items-center gap-3">
//         <div className="text-sm text-gray-700 font-medium">Admin</div>
//         <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">
//           A
//         </div>
//       </div>
//     </header>
//   );
// }


// export default function Topbar({ search, setSearch }) {
//   return (
//     <header className="h-16 bg-white border-b flex items-center justify-between px-6">
//       <input
//         type="text"
//         placeholder="Search here..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-72 hidden md:block px-4 py-2 border rounded-md text-sm
//                    focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />

//       <div className="flex items-center gap-3">
//         <div className="text-sm text-gray-700 font-medium">Admin</div>
//         <div className="w-8 h-8 rounded-full bg-indigo-600 text-white
//                         flex items-center justify-center text-sm">
//           A
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useEffect, useState } from "react";
// import { apiFetch } from "../services/api";

// export default function Topbar({ search, setSearch }) {
//   const [user, setUser] = useState(null);

//   // 🔥 logged-in user fetch
//   useEffect(() => {
//     const fetchMe = async () => {
//       try {
//         const data = await apiFetch("http://localhost:4000/api/users/me");
//         setUser(data);
//       } catch (err) {
//         console.error("Failed to fetch user");
//       }
//     };

//     fetchMe();
//   }, []);

//   const firstLetter = user?.name
//     ? user.name.charAt(0).toUpperCase()
//     : "?";

//   return (
//     <header className="h-16 bg-white border-b flex items-center justify-between px-6">
//       {/* SEARCH */}
//       <input
//         type="text"
//         placeholder="Search here..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-72 hidden md:block px-4 py-2 border rounded-md text-sm
//                    focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />

//       {/* USER INFO */}
//       <div className="flex items-center gap-3">
//         <div className="text-right">
//           <p className="text-sm text-gray-700 font-medium">
//             {user?.name || "Loading..."}
//           </p>
//           <p className="text-xs text-gray-400 capitalize">
//             {user?.role || ""}
//           </p>
//         </div>

//         <div className="w-9 h-9 rounded-full bg-indigo-600 text-white
//                         flex items-center justify-center text-sm font-semibold">
//           {firstLetter}
//         </div>
//       </div>
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

export default function Topbar({ search, setSearch }) {
  const [user, setUser] = useState(null);
  const [showProfileHint, setShowProfileHint] = useState(false); // 👈 NEW (UI only)

  // 🔥 logged-in user fetch
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const data = await apiFetch("http://localhost:4000/api/users/me");
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user");
      }
    };

    fetchMe();
  }, []);

  const firstLetter = user?.name
    ? user.name.charAt(0).toUpperCase()
    : "?";

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-72 hidden md:block px-4 py-2 border rounded-md text-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* USER INFO */}
      <div className="relative flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm text-gray-700 font-medium">
            {user?.name || "Loading..."}
          </p>
          <p className="text-xs text-gray-400 capitalize">
            {user?.role || ""}
          </p>
        </div>

        {/* PROFILE CIRCLE */}
        <div
          onClick={() => setShowProfileHint((prev) => !prev)}
          className="w-9 h-9 rounded-full bg-indigo-600 text-white
                     flex items-center justify-center text-sm font-semibold
                     cursor-pointer select-none"
        >
          {firstLetter}
        </div>

        {/* 👇 VIEW PROFILE TEXT */}
        {showProfileHint && (
          <div className="absolute right-0 top-12 bg-white border rounded-md
                          px-3 py-2 text-sm text-gray-600 shadow-sm">
            View profile details
          </div>
        )}
      </div>
    </header>
  );
}
