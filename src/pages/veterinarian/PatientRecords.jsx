import VetDashboardLayout from "../../components/layout/VetDashboardLayout";

const patients = [
  {
    pet: "Bella",
    owner: "Emily Carter",
    species: "Dog",
    age: "4 Years",
    status: "Healthy",
  },
  {
    pet: "Max",
    owner: "John Smith",
    species: "Cat",
    age: "2 Years",
    status: "Treatment",
  },
  {
    pet: "Charlie",
    owner: "Sophia Brown",
    species: "Dog",
    age: "6 Years",
    status: "Recovered",
  },
  {
    pet: "Luna",
    owner: "Michael Lee",
    species: "Rabbit",
    age: "1 Year",
    status: "Healthy",
  },
];

function PatientRecords() {
  return (
    <VetDashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Patient Records
          </h1>

          <p className="text-gray-500">
            View and manage patient medical records.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="py-3">Pet</th>
                <th>Owner</th>
                <th>Species</th>
                <th>Age</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">{patient.pet}</td>
                  <td>{patient.owner}</td>
                  <td>{patient.species}</td>
                  <td>{patient.age}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        patient.status === "Healthy"
                          ? "bg-green-100 text-green-700"
                          : patient.status === "Treatment"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </VetDashboardLayout>
  );
}

export default PatientRecords;