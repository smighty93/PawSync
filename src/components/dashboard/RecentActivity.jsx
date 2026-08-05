import {
  FileText,
  CheckCircle,
  CalendarCheck,
} from "lucide-react";

function Activity({ icon, title, time }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4">
      <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-500">{time}</p>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-4">

        <Activity
          icon={<FileText size={20} />}
          title="Medical record uploaded"
          time="Today"
        />

        <Activity
          icon={<CheckCircle size={20} />}
          title="Vaccination completed"
          time="Yesterday"
        />

        <Activity
          icon={<CalendarCheck size={20} />}
          title="Appointment booked"
          time="2 days ago"
        />

      </div>
    </div>
  );
}

export default RecentActivity;