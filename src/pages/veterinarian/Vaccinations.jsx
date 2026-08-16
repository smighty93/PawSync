import VetDashboardLayout from "../../components/layout/VetDashboardLayout";

function Vaccinations() {
  const vaccinations = [
    {
      pet: "Bella",
      vaccine: "Rabies",
      dueDate: "10 Aug 2026",
      status: "Due",
    },
    {
      pet: "Max",
      vaccine: "DHPP",
      dueDate: "15 Aug 2026",
      status: "Scheduled",
    },
    {
      pet: "Charlie",
      vaccine: "Leptospirosis",
      dueDate: "20 Aug 2026",
      status: "Completed",
    },
  ];

  return (
    <VetDashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Vaccinations
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Pet</th>
              <th>Vaccine</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {vaccinations.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-4">{item.pet}</td>
                <td>{item.vaccine}</td>
                <td>{item.dueDate}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VetDashboardLayout>
  );
}

export default Vaccinations;