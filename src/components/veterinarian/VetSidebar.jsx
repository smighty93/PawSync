import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  FileText,
  Pill,
  Syringe,
  User,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/veterinarian",
  },
  {
    icon: CalendarDays,
    label: "Appointments",
    path: "/veterinarian/appointments",
  },
  {
    icon: ClipboardList,
    label: "Patient Records",
    path: "/veterinarian/patient-records",
  },
  {
    icon: Pill,
    label: "Prescriptions",
    path: "/veterinarian/prescriptions",
  },
  {
    icon: FileText,
    label: "Medical Reports",
    path: "/veterinarian/medical-reports",
  },
  {
    icon: Syringe,
    label: "Vaccinations",
    path: "/veterinarian/vaccinations",
  },
  {
    icon: User,
    label: "Profile",
    path: "/veterinarian/profile",
  },
];

function VetSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-72 min-h-screen bg-white shadow-lg p-6 flex flex-col">
      
      <h1 className="text-3xl font-bold text-blue-600 mb-10">
        🐾 PawSync
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

    </aside>
  );
}

export default VetSidebar;