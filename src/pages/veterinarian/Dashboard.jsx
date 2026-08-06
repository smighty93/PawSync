import DashboardLayout from "../../components/layout/DashboardLayout";
import WelcomeCard from "../../components/veterinarian/WelcomeCard";
import DashboardStats from "../../components/veterinarian/DashboardStats";
import AppointmentTable from "../../components/veterinarian/AppointmentTable";
import UpcomingConsultations from "../../components/veterinarian/UpcomingConsultations";
import RecentActivity from "../../components/veterinarian/RecentActivity";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeCard />

        <DashboardStats />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AppointmentTable />
          <UpcomingConsultations />
        </div>

        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;