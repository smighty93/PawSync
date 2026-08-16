import {
  LayoutDashboard,
  PawPrint,
  Calendar,
  FileText,
  Bell,
  User,
} from "lucide-react";

const ownerMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Pets",
    path: "/mypets",
    icon: PawPrint,
  },
  {
    title: "Appointments",
    path: "/appointments",
    icon: Calendar,
  },
  {
    title: "Medical Records",
    path: "/medical-records",
    icon: FileText,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

export default ownerMenu;