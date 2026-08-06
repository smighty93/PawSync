import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import UserTable from '../../components/admin/UserTable';

const userList = [
  { id: 1, name: 'Alex Rivera', email: 'alex.r@gmail.com', role: 'Pet Owner', status: 'Active', joinedDate: '2026-01-10' },
  { id: 2, name: 'Emily Zhang', email: 'ezhang@outlook.com', role: 'Pet Owner', status: 'Active', joinedDate: '2026-01-12' },
  { id: 3, name: 'Marcus Vance', email: 'marcus.vance@tech.io', role: 'Pet Owner', status: 'Inactive', joinedDate: '2025-11-05' },
  { id: 4, name: 'Sophia Chen', email: 'sophia.c@gmail.com', role: 'Pet Owner', status: 'Active', joinedDate: '2026-02-01' },
];

export default function ManageUsers() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manage Users</h1>
            <p className="text-sm text-slate-500 mt-1">View and manage registered pet owners on PawSync.</p>
          </div>
        </div>
        <UserTable users={userList} title="All Users" />
      </div>
    </DashboardLayout>
  );
}