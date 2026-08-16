import VetDashboardLayout from "../../components/layout/VetDashboardLayout";

const appointments = [
  {
    pet: "Bella",
    owner: "Emily Carter",
    date: "06 Aug 2026",
    time: "09:00 AM",
    status: "Completed",
  },
  {
    pet: "Max",
    owner: "John Smith",
    date: "06 Aug 2026",
    time: "10:30 AM",
    status: "In Progress",
  },
  {
    pet: "Charlie",
    owner: "Sophia Brown",
    date: "06 Aug 2026",
    time: "12:00 PM",
    status: "Upcoming",
  },
  {
    pet: "Luna",
    owner: "Michael Lee",
    date: "06 Aug 2026",
    time: "02:15 PM",
    status: "Upcoming",
  },
];

function Appointments() {
  return (
    <VetDashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Appointments
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all veterinary appointments.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-gray-600">
                <th className="py-3">Pet</th>
                <th>Owner</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">{appointment.pet}</td>
                  <td>{appointment.owner}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        appointment.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : appointment.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {appointment.status}
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

export default Appointments;