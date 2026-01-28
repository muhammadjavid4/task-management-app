export default function StatCard({ title, count, color }) {
  return (
    <div className={`rounded-xl p-5 bg-gradient-to-r ${color} text-white`}>
      <p className="text-sm opacity-90">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{count}</h2>
    </div>
  );
}
