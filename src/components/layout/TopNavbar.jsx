import { Search, Bell } from "lucide-react";

function TopNavbar() {
  return (
    <header className="bg-white rounded-2xl shadow p-5 flex justify-between items-center">
      <h2 className="text-2xl font-bold">
        Welcome Back 👋
      </h2>

      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />
        <Bell className="cursor-pointer" />
      </div>
    </header>
  );
}

export default TopNavbar;