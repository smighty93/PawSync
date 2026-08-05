import { CalendarDays, Clock } from "lucide-react";

function AppointmentCard({
  pet,
  doctor,
  date,
  time,
  status,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">

      <div className="flex justify-between">

        <div>
          <h3 className="text-lg font-bold">{pet}</h3>

          <p className="text-slate-500 mt-1">
            {doctor}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>

      </div>

      <div className="flex gap-6 mt-5 text-slate-500">

        <div className="flex items-center gap-2">
          <CalendarDays size={18} />
          {date}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} />
          {time}
        </div>

      </div>

    </div>
  );
}

export default AppointmentCard;