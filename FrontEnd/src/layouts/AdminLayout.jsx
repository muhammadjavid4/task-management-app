// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";

// export default function AdminLayout({ children }) {
//     return (
//         <div className="flex bg-gray-50 min-h-screen">
//             <Sidebar />
//             <div className="flex-1 flex flex-col">
//                 <Topbar />
//                 <main className="p-6">{children}</main>
//             </div>

//         </div>
//     );
// }

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AdminLayout({ children }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar search={search} setSearch={setSearch} />

        <main className="p-6">
          {typeof children === "function"
            ? children(search)
            : children}
        </main>
      </div>
    </div>
  );
}
