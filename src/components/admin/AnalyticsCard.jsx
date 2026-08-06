import React from 'react';

export default function AnalyticsCard({ title, metrics }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-base font-semibold text-slate-800 mb-4">{title}</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
            <span className="text-sm font-medium text-slate-600">{metric.label}</span>
            <div className="text-right">
              <span className="text-sm font-bold text-slate-900">{metric.value}</span>
              {metric.subtext && <p className="text-xs text-slate-400">{metric.subtext}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}