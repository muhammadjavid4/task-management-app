export default function QuickActionCard({ title, subtitle }) {
  return (
    <div className="flex items-center gap-4 p-5 bg-white rounded-xl border hover:shadow transition cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
        +
      </div>
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
