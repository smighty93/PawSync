import React from "react";
import VetDashboardLayout from "../../components/layout/VetDashboardLayout";

const reports = [
  {
    id: 1,
    petName: "Max",
    ownerName: "John Smith",
    reportType: "General Checkup",
    date: "2026-08-10",
    veterinarian: "Dr. Sarah Johnson",
    status: "Completed",
  },
  {
    id: 2,
    petName: "Bella",
    ownerName: "Emily Davis",
    reportType: "Vaccination Report",
    date: "2026-08-09",
    veterinarian: "Dr. Sarah Johnson",
    status: "Completed",
  },
  {
    id: 3,
    petName: "Charlie",
    ownerName: "Michael Brown",
    reportType: "Blood Test",
    date: "2026-08-08",
    veterinarian: "Dr. Sarah Johnson",
    status: "Pending",
  },
  {
    id: 4,
    petName: "Luna",
    ownerName: "Sophia Wilson",
    reportType: "Medical Examination",
    date: "2026-08-07",
    veterinarian: "Dr. Sarah Johnson",
    status: "Completed",
  },
];

function MedicalReports() {
  return (
    <VetDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Medical Reports
          </h1>

          <p className="text-slate-500 mt-1">
            View and manage medical reports for your patients.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <p className="text-sm text-slate-500">
              Total Reports
            </p>

            <p className="text-3xl font-bold text-slate-800 mt-2">
              {reports.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <p className="text-sm text-slate-500">
              Completed
            </p>

            <p className="text-3xl font-bold text-emerald-600 mt-2">
              {
                reports.filter(
                  (report) => report.status === "Completed"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <p className="text-sm text-slate-500">
              Pending
            </p>

            <p className="text-3xl font-bold text-amber-500 mt-2">
              {
                reports.filter(
                  (report) => report.status === "Pending"
                ).length
              }
            </p>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800">
              Recent Medical Reports
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-5 py-3 text-sm font-semibold text-slate-600">
                    Pet
                  </th>

                  <th className="text-left px-5 py-3 text-sm font-semibold text-slate-600">
                    Owner
                  </th>

                  <th className="text-left px-5 py-3 text-sm font-semibold text-slate-600">
                    Report Type
                  </th>

                  <th className="text-left px-5 py-3 text-sm font-semibold text-slate-600">
                    Date
                  </th>

                  <th className="text-left px-5 py-3 text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="text-left px-5 py-3 text-sm font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {reports.map((report) => (
                  <tr
                    key={report.id}
                    className="hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {report.petName}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {report.ownerName}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {report.reportType}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {report.date}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          report.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button className="text-blue-600 hover:underline text-sm font-medium">
                        View Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </VetDashboardLayout>
  );
}

export default MedicalReports;