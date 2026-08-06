import DashboardLayout from "../../components/layout/DashboardLayout";
import AppointmentTable from "../../components/veterinarian/AppointmentTable";

function TodaysAppointments() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Today's Appointments
          </h1>
          <p className="text-gray-500 mt-2">
            Manage today's consultations and patient visits.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <AppointmentTable />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TodaysAppointments;