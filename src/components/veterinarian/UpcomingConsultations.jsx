import { motion } from "framer-motion";

const consultations = [
  {
    pet: "Rocky",
    owner: "David Wilson",
    time: "03:30 PM",
  },
  {
    pet: "Lucy",
    owner: "Emma Thomas",
    time: "04:15 PM",
  },
  {
    pet: "Coco",
    owner: "Olivia Martin",
    time: "05:00 PM",
  },
];

function UpcomingConsultations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-md p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Upcoming Consultations
      </h2>

      <div className="space-y-4">
        {consultations.map((item) => (
          <div
            key={item.pet}
            className="flex items-center justify-between border-b last:border-none pb-3"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {item.pet}
              </h3>

              <p className="text-sm text-gray-500">
                Owner: {item.owner}
              </p>
            </div>

            <span className="text-blue-600 font-semibold">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default UpcomingConsultations;