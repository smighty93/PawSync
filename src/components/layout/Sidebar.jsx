import {
  LayoutDashboard,
  PawPrint,
  CalendarDays,
  HeartPulse,
  Bell,
  User,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: PawPrint, label: "My Pets" },
  { icon: CalendarDays, label: "Appointments" },
  { icon: HeartPulse, label: "Medical Records" },
  { icon: Bell, label: "Notifications" },
  { icon: User, label: "Profile" },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-white shadow-lg p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-blue-600 mb-10">
        🐾 PawSync
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;