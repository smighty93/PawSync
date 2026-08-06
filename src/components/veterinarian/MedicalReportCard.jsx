import { FileText, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function MedicalReportCard({
  petName = "Bella",
  owner = "Emily Carter",
  diagnosis = "Routine Health Check",
  reportDate = "06 Aug 2026",
  status = "Completed",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="text-blue-600" size={22} />
          <h3 className="text-lg font-semibold text-gray-800">
            Medical Report
          </h3>
        </div>

        <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
          {status}
        </span>
      </div>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Pet:</span> {petName}
        </p>

        <p>
          <span className="font-medium">Owner:</span> {owner}
        </p>

        <p>
          <span className="font-medium">Diagnosis:</span> {diagnosis}
        </p>
      </div>

      <div className="flex justify-between items-center mt-5 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{reportDate}</span>
        </div>

        <div className="flex items-center gap-1 text-green-600">
          <CheckCircle size={16} />
          <span>Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

export default MedicalReportCard;