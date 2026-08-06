import { Syringe, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function VaccinationCard({
  petName = "Bella",
  vaccine = "Rabies Vaccine",
  dueDate = "15 Aug 2026",
  status = "Due Soon",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Syringe className="text-blue-600" size={22} />
          <h3 className="text-lg font-semibold text-gray-800">
            Vaccination
          </h3>
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="space-y-3 text-gray-700">
        <p>
          <strong>Pet:</strong> {petName}
        </p>

        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-green-600" />
          <span>
            <strong>Vaccine:</strong> {vaccine}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-blue-500" />
          <span>
            <strong>Due Date:</strong> {dueDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default VaccinationCard;