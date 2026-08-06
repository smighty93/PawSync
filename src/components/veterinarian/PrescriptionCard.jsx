import { Pill, User, Calendar, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

function PrescriptionCard({
  petName = "Bella",
  medicine = "Amoxicillin",
  dosage = "250 mg - Twice Daily",
  duration = "7 Days",
  status = "Active",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Pill className="text-blue-600" size={22} />
          <h3 className="text-lg font-semibold text-gray-800">
            Prescription
          </h3>
        </div>

        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
          {status}
        </span>
      </div>

      <div className="space-y-3 text-gray-700">
        <div className="flex items-center gap-2">
          <User size={18} className="text-blue-500" />
          <span><strong>Pet:</strong> {petName}</span>
        </div>

        <div className="flex items-center gap-2">
          <Pill size={18} className="text-green-500" />
          <span><strong>Medicine:</strong> {medicine}</span>
        </div>

        <div className="flex items-center gap-2">
          <ClipboardCheck size={18} className="text-purple-500" />
          <span><strong>Dosage:</strong> {dosage}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-orange-500" />
          <span><strong>Duration:</strong> {duration}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default PrescriptionCard;