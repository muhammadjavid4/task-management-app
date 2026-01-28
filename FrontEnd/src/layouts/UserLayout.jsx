import { useState } from "react";
import UserSidebar from "../components/UserSidebar";
import Topbar from "../components/Topbar";

export default function UserLayout({ children }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <UserSidebar />

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
