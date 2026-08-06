import { motion } from "framer-motion";

const appointments = [
  {
    pet: "Bella",
    owner: "Emily Carter",
    time: "09:00 AM",
    status: "Completed",
  },
  {
    pet: "Max",
    owner: "John Smith",
    time: "10:30 AM",
    status: "In Progress",
  },
  {
    pet: "Charlie",
    owner: "Sophia Brown",
    time: "12:00 PM",
    status: "Upcoming",
  },
  {
    pet: "Luna",
    owner: "Michael Lee",
    time: "02:15 PM",
    status: "Upcoming",
  },
];

function AppointmentTable() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-md p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Today's Appointments
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-gray-500">
              <th className="pb-3">Pet</th>
              <th className="pb-3">Owner</th>
              <th className="pb-3">Time</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item) => (
              <tr
                key={item.pet}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="py-4 font-medium">{item.pet}</td>

                <td>{item.owner}</td>

                <td>{item.time}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default AppointmentTable;