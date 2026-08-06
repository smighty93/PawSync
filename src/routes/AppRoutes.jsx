import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/owner/Dashboard";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageVeterinarians from "../pages/admin/ManageVeterinarians";
import ManagePets from "../pages/admin/ManagePets";
import Analytics from "../pages/admin/Analytics";
import Reports from "../pages/admin/Reports";
import Notifications from "../pages/admin/Notifications";
import Settings from "../pages/admin/Settings";
import Profile from "../pages/admin/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/vets" element={<ManageVeterinarians />} />
        <Route path="/admin/pets" element={<ManagePets />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/notifications" element={<Notifications />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;