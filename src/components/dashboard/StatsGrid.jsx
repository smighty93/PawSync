import StatCard from "./StatCard";
import {
  PawPrint,
  CalendarDays,
  Syringe,
  HeartPulse,
} from "lucide-react";

function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-8">

      <StatCard
        icon={<PawPrint size={28} />}
        title="My Pets"
        value="3"
        subtitle="Registered"
      />

      <StatCard
        icon={<CalendarDays size={28} />}
        title="Appointments"
        value="2"
        subtitle="Upcoming"
      />

      <StatCard
        icon={<Syringe size={28} />}
        title="Vaccinations"
        value="1"
        subtitle="Due"
      />

      <StatCard
        icon={<HeartPulse size={28} />}
        title="Health Status"
        value="Good"
        subtitle="Overall"
      />

    </div>
  );
}

export default StatsGrid;