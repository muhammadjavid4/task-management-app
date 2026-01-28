// import { useEffect, useState } from "react";
// import AdminLayout from "../layouts/AdminLayout";
// import StatCard from "../components/StatCard";
// import QuickActionCard from "../components/QuickActionCard";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate(); // ✅ add

//   useEffect(() => {
//     const fetchStats = async () => {
//       const user = auth.currentUser;
//       if (!user) return;

//       const token = await user.getIdToken();

//       const res = await fetch("http://localhost:4000/api/tasks/stats", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       setStats(data);
//       setLoading(false);
//     };

//     fetchStats();
//   }, []);

//   if (loading) {
//     return (
//       <AdminLayout>
//         <p className="text-gray-500">Loading dashboard...</p>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         Dashboard
//       </h1>

//       {/* STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//         <StatCard
//           title="Total Tasks"
//           count={stats.total}
//           color="from-blue-400 to-blue-600"
//         />
//         <StatCard
//           title="Pending Tasks"
//           count={stats.pending}
//           color="from-orange-400 to-orange-600"
//         />
//         <StatCard
//           title="In Progress"
//           count={stats.inProgress}
//           color="from-purple-400 to-purple-600"
//         />
//         <StatCard
//           title="Completed"
//           count={stats.completed}
//           color="from-green-400 to-green-600"
//         />
//       </div>

//       {/* QUICK ACTIONS */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Quick actions</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* 👉 All Tasks */}
//           <div onClick={() => navigate("/admin/tasks")}>
//             <QuickActionCard
//               title="All Tasks"
//               subtitle="View and manage all posted tasks"
//             />
//           </div>

//           {/* 👉 Create Task (future) */}
//           <div onClick={() => navigate("/admin/tasks/create")}>
//             <QuickActionCard
//               title="Create Task"
//               subtitle="Create new task and assign users"
//             />
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }


// import { useEffect, useState } from "react";
// import AdminLayout from "../layouts/AdminLayout";
// import StatCard from "../components/StatCard";
// import QuickActionCard from "../components/QuickActionCard";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
// import CreateTaskModal from "../components/CreateTaskModal";

// export default function AdminDashboard() {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [openModal, setOpenModal] = useState(false); // ✅ modal state

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStats = async () => {
//       const user = auth.currentUser;
//       if (!user) return;

//       const token = await user.getIdToken();

//       const res = await fetch("http://localhost:4000/api/tasks/stats", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       setStats(data);
//       setLoading(false);
//     };

//     fetchStats();
//   }, []);

//   if (loading) {
//     return (
//       <AdminLayout>
//         <p className="text-gray-500">Loading dashboard...</p>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>
//       {/* 🔥 CREATE TASK MODAL */}
//       <CreateTaskModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         onCreated={() => {
//           // optional: stats refresh later
//         }}
//       />

//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         Dashboard
//       </h1>

//       {/* STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//         <StatCard
//           title="Total Tasks"
//           count={stats.total}
//           color="from-blue-400 to-blue-600"
//         />
//         <StatCard
//           title="Pending Tasks"
//           count={stats.pending}
//           color="from-orange-400 to-orange-600"
//         />
//         <StatCard
//           title="In Progress"
//           count={stats.inProgress}
//           color="from-purple-400 to-purple-600"
//         />
//         <StatCard
//           title="Completed"
//           count={stats.completed}
//           color="from-green-400 to-green-600"
//         />
//       </div>

//       {/* QUICK ACTIONS */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Quick actions</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* 👉 All Tasks */}
//           <div onClick={() => navigate("/admin/tasks")}>
//             <QuickActionCard
//               title="All Tasks"
//               subtitle="View and manage all posted tasks"
//             />
//           </div>

//           {/* 👉 Create Task (MODAL OPEN) */}
//           <div onClick={() => setOpenModal(true)}>
//             <QuickActionCard
//               title="Create Task"
//               subtitle="Create new task and assign users"
//             />
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }


import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";
import QuickActionCard from "../components/QuickActionCard";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import CreateTaskModal from "../components/CreateTaskModal";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  // 🔥 stats fetch function
  const fetchStats = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const token = await user.getIdToken();

    const res = await fetch("http://localhost:4000/api/tasks/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setStats(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <p className="text-gray-500">Loading dashboard...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {/* ✅ Create Task Modal */}
      <CreateTaskModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreated={fetchStats}   // 🔥 AUTO REFRESH
      />

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Tasks" count={stats.total} color="from-blue-400 to-blue-600" />
        <StatCard title="Pending Tasks" count={stats.pending} color="from-orange-400 to-orange-600" />
        <StatCard title="In Progress" count={stats.inProgress} color="from-purple-400 to-purple-600" />
        <StatCard title="Completed" count={stats.completed} color="from-green-400 to-green-600" />
      </div>

      {/* QUICK ACTIONS */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div onClick={() => navigate("/admin/tasks")}>
            <QuickActionCard
              title="All Tasks"
              subtitle="View and manage all posted tasks"
            />
          </div>

          <div onClick={() => setOpenModal(true)}>
            <QuickActionCard
              title="Create Task"
              subtitle="Create new task and assign users"
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
