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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;