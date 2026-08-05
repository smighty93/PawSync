import { PawPrint, CalendarDays, FileText } from "lucide-react";

function ActionCard({ icon, title }) {
  return (
    <button className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-4 w-full">
      <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
        {icon}
      </div>

      <span className="font-semibold text-slate-700">
        {title}
      </span>
    </button>
  );
}

function QuickActions() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-3 gap-5">
        <ActionCard
          icon={<PawPrint size={24} />}
          title="Add Pet"
        />

        <ActionCard
          icon={<CalendarDays size={24} />}
          title="Book Appointment"
        />

        <ActionCard
          icon={<FileText size={24} />}
          title="Upload Medical Record"
        />
      </div>
    </div>
  );
}

export default QuickActions;