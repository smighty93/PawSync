function StatCard({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="text-blue-600">
          {icon}
        </div>

        <span className="text-xs text-slate-400">
          {subtitle}
        </span>
      </div>

      <h3 className="mt-5 text-slate-500 text-sm">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

export default StatCard;