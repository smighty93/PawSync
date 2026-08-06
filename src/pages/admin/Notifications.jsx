import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Bell, ShieldAlert, CheckCircle2, Info } from 'lucide-react';

const notifications = [
  { id: 1, title: 'Database Backup Completed', time: '10 minutes ago', type: 'success', description: 'System medical records auto-backup completed successfully.' },
  { id: 2, title: 'New Veterinarian Application', time: '2 hours ago', type: 'info', description: 'Dr. Anita Roy requested license verification approval.' },
  { id: 3, title: 'High Server Memory Usage', time: '5 hours ago', type: 'warning', description: 'Telehealth stream server peaked at 88% memory usage.' },
];

export default function Notifications() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notifications & System Alerts</h1>
          <p className="text-sm text-slate-500 mt-1">Audit trail and system event broadcast logs.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y divide-slate-100">
          {notifications.map((item) => (
            <div key={item.id} className="p-5 flex items-start gap-4">
              <div className={`p-2.5 rounded-lg text-white mt-1 ${
                item.type === 'success' ? 'bg-emerald-500' : item.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
              }`}>
                {item.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : item.type === 'warning' ? <ShieldAlert className="w-5 h-5" /> : <Info className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-slate-800 text-sm">{item.title}</h3>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}