import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { FileText, Download, Calendar } from 'lucide-react';

const reportsList = [
  { id: 1, title: 'Monthly Vaccination Compliance Report', date: 'Feb 2026', type: 'Health Audit', size: '2.4 MB' },
  { id: 2, title: 'Veterinarian Activity & Consultation Log', date: 'Jan 2026', type: 'Operations', size: '4.1 MB' },
  { id: 3, title: 'System User Registration & Retention Report', date: 'Jan 2026', type: 'Analytics', size: '1.8 MB' },
];

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">System Reports</h1>
          <p className="text-sm text-slate-500 mt-1">Exportable healthcare operational logs and compliance summaries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reportsList.map((report) => (
            <div key={report.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 text-base">{report.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {report.date}</span>
                  <span>•</span>
                  <span>{report.size}</span>
                </div>
              </div>

              <button className="mt-6 flex items-center justify-center gap-2 w-full py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-medium text-sm rounded-lg transition-colors border border-slate-200">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}