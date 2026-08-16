import {
  LayoutDashboard,
  Users,
  Stethoscope,
  PawPrint,
  BarChart3,
  Bell,
  User,
} from "lucide-react";

const adminMenu = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Manage Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    title: "Manage Veterinarians",
    path: "/admin/veterinarians",
    icon: Stethoscope,
  },
  {
    title: "Manage Pets",
    path: "/admin/pets",
    icon: PawPrint,
  },
  {
    title: "Analytics",
    path: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Notifications",
    path: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    path: "/admin/profile",
    icon: User,
  },
];

export default adminMenu;