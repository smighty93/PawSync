import React, { useState } from 'react';
import { Search, MoreVertical, UserX, CheckCircle } from 'lucide-react';

export default function UserTable({ users, title = "Users" }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-slate-800">{title} ({filteredUsers.length})</h2>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-100">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Role / Specialty</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Joined Date</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center text-xs">
                    {user.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{user.role || user.specialty || 'Pet Owner'}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    user.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {user.status === 'Active' ? <CheckCircle className="w-3 h-3" /> : <UserX className="w-3 h-3" />}
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">{user.joinedDate || '2026-01-15'}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}