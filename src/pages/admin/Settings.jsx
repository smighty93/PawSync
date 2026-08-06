import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Platform Settings</h1>
          <p className="text-sm text-slate-500 mt-1">Configure PawSync network controls and preferences.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-6">
          <div>
            <h2 className="text-base font-semibold text-slate-800 border-b border-slate-100 pb-3">General Configuration</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Platform Name</label>
                <input type="text" defaultValue="PawSync Medical Network" className="mt-1 w-full max-w-md px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Support Contact Email</label>
                <input type="email" defaultValue="admin@pawsync.com" className="mt-1 w-full max-w-md px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}