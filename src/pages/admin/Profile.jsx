import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { User, Mail, Shield } from 'lucide-react';

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Profile</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your administrator account parameters.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl">
            AD
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">System Administrator</h2>
            <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-1"><Mail className="w-4 h-4" /> admin@pawsync.com</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
              <Shield className="w-3 h-3" /> Super Admin Access
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}