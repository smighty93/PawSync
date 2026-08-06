import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Search, MoreVertical, ShieldAlert, CheckCircle } from 'lucide-react';

const petList = [
  { id: 1, name: 'Luna', species: 'Dog', breed: 'Golden Retriever', owner: 'Alex Rivera', status: 'Vaccinated', lastCheckup: '2026-01-20' },
  { id: 2, name: 'Milo', species: 'Cat', breed: 'Siamese', owner: 'Emily Zhang', status: 'Pending Booster', lastCheckup: '2025-12-15' },
  { id: 3, name: 'Rocky', species: 'Dog', breed: 'German Shepherd', owner: 'Marcus Vance', status: 'Vaccinated', lastCheckup: '2026-02-02' },
];

export default function ManagePets() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Pets</h1>
          <p className="text-sm text-slate-500 mt-1">Overview of registered pets and health records.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-800">Pet Directory ({petList.length})</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search pets..."
                className="pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs text-slate-500 uppercase font-semibold border-b border-slate-100">
              <tr>
                <th className="px-6 py-3">Pet Name</th>
                <th className="px-6 py-3">Species & Breed</th>
                <th className="px-6 py-3">Owner</th>
                <th className="px-6 py-3">Vaccination Status</th>
                <th className="px-6 py-3">Last Checkup</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {petList.map((pet) => (
                <tr key={pet.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-semibold text-slate-900">{pet.name}</td>
                  <td className="px-6 py-4">{pet.species} • {pet.breed}</td>
                  <td className="px-6 py-4">{pet.owner}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      pet.status === 'Vaccinated' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {pet.status === 'Vaccinated' ? <CheckCircle className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
                      {pet.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{pet.lastCheckup}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}