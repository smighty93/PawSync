import AppointmentCard from "./AppointmentCard";

function UpcomingAppointments() {
  return (
    <div>

      <div className="flex justify-between mb-5">

        <h2 className="text-2xl font-bold">
          Upcoming Appointments
        </h2>

        <button className="text-blue-600 font-semibold">
          View All
        </button>

      </div>

      <div className="space-y-4">

        <AppointmentCard
          pet="Bruno"
          doctor="Dr. Sarah Wilson"
          date="25 Aug 2026"
          time="10:30 AM"
          status="Confirmed"
        />

        <AppointmentCard
          pet="Luna"
          doctor="Dr. Michael Brown"
          date="28 Aug 2026"
          time="2:00 PM"
          status="Pending"
        />

      </div>

    </div>
  );
}

export default UpcomingAppointments;