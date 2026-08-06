import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Dog, 
  BarChart2, 
  Bell, 
  User 
} from 'lucide-react';

const adminNavItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Manage Users', path: '/admin/users', icon: Users },
  { name: 'Manage Veterinarians', path: '/admin/vets', icon: UserCheck },
  { name: 'Manage Pets', path: '/admin/pets', icon: Dog },
  { name: 'System Analytics', path: '/admin/analytics', icon: BarChart2 },
  { name: 'Notifications', path: '/admin/notifications', icon: Bell },
  { name: 'Profile', path: '/admin/profile', icon: User },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col fixed inset-y-0 left-0 z-10">
        <div className="p-6">
          <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <span>🐾 PawSync</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {adminNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-64">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}