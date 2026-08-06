import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import UserTable from '../../components/admin/UserTable';

const vetList = [
  { id: 1, name: 'Dr. Sarah Jenkins', email: 'sarah.j@pawsync.com', specialty: 'Canine & Feline Specialist', status: 'Active', joinedDate: '2025-08-14' },
  { id: 2, name: 'Dr. Robert Miller', email: 'rmiller@vetmed.org', specialty: 'Veterinary Surgery', status: 'Active', joinedDate: '2025-09-20' },
  { id: 3, name: 'Dr. Anita Roy', email: 'anita.roy@pawsync.com', specialty: 'Dermatology & Allergy', status: 'Active', joinedDate: '2026-01-08' },
];

export default function ManageVeterinarians() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Veterinarians</h1>
          <p className="text-sm text-slate-500 mt-1">Overview of onboarded medical staff and clinic partners.</p>
        </div>
        <UserTable users={vetList} title="Licensed Veterinarians" />
      </div>
    </DashboardLayout>
  );
}