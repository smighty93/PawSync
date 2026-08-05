import { Syringe } from "lucide-react";

function ReminderCard({ pet, vaccine, dueDate }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl">
          <Syringe size={22} />
        </div>

        <div>
          <h3 className="font-semibold">{pet}</h3>
          <p className="text-sm text-slate-500">{vaccine}</p>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-sm text-red-500 font-medium">
          Due: {dueDate}
        </span>
      </div>
    </div>
  );
}

function VaccinationReminder() {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-bold">
          Vaccination Reminders
        </h2>

        <button className="text-blue-600 font-semibold">
          View All
        </button>
      </div>

      <div className="space-y-4">
        <ReminderCard
          pet="Bruno"
          vaccine="Rabies Vaccine"
          dueDate="26 Aug 2026"
        />

        <ReminderCard
          pet="Buddy"
          vaccine="Booster Shot"
          dueDate="30 Aug 2026"
        />
      </div>
    </div>
  );
}

export default VaccinationReminder;