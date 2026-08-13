import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/veterinarian/Dashboard";
import TodaysAppointments from "../pages/veterinarian/TodaysAppointments";
import Appointments from "../pages/veterinarian/Appointments";
import PatientRecords from "../pages/veterinarian/PatientRecords";
import MedicalReports from "../pages/veterinarian/MedicalReports";
import Vaccinations from "../pages/veterinarian/Vaccinations";
import Prescriptions from "../pages/veterinarian/Prescriptions";
import Profile from "../pages/veterinarian/Profile";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageVeterinarians from "../pages/admin/ManageVeterinarians";
import ManagePets from "../pages/admin/ManagePets";
import Analytics from "../pages/admin/Analytics";
import Reports from "../pages/admin/Reports";
import Notifications from "../pages/admin/Notifications";
import Settings from "../pages/admin/Settings";
import AdminProfile from "../pages/admin/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vet/today" element={<TodaysAppointments />} />
        <Route path="/vet/appointments" element={<Appointments />} />
        <Route path="/vet/patients" element={<PatientRecords />} />
        <Route path="/vet/reports" element={<MedicalReports />} />
        <Route path="/vet/vaccinations" element={<Vaccinations />} />
        <Route path="/vet/prescriptions" element={<Prescriptions />} />
        <Route path="/vet/profile" element={<Profile />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/vets" element={<ManageVeterinarians />} />
        <Route path="/admin/pets" element={<ManagePets />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/notifications" element={<Notifications />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;