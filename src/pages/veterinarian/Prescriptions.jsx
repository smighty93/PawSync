import VetDashboardLayout from "../../components/layout/VetDashboardLayout";

const prescriptions = [
  {
    pet: "Bella",
    owner: "Emily Carter",
    medicine: "Amoxicillin",
    dosage: "250mg - Twice Daily",
    duration: "7 Days",
  },
  {
    pet: "Max",
    owner: "John Smith",
    medicine: "Vitamin Supplement",
    dosage: "1 Tablet Daily",
    duration: "30 Days",
  },
  {
    pet: "Charlie",
    owner: "Sophia Brown",
    medicine: "Pain Relief",
    dosage: "50mg - Once Daily",
    duration: "5 Days",
  },
  {
    pet: "Luna",
    owner: "Michael Lee",
    medicine: "Deworming Syrup",
    dosage: "10ml - Once",
    duration: "1 Day",
  },
];

function Prescriptions() {
  return (
    <VetDashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Prescriptions
          </h1>

          <p className="text-gray-500">
            View and manage patient prescriptions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="py-3">Pet</th>
                <th>Owner</th>
                <th>Medicine</th>
                <th>Dosage</th>
                <th>Duration</th>
              </tr>
            </thead>

            <tbody>
              {prescriptions.map((prescription, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">{prescription.pet}</td>
                  <td>{prescription.owner}</td>
                  <td>{prescription.medicine}</td>
                  <td>{prescription.dosage}</td>
                  <td>{prescription.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </VetDashboardLayout>
  );
}

export default Prescriptions;