import { User, PawPrint, Heart } from "lucide-react";
import { motion } from "framer-motion";

function PatientCard({
  petName = "Bella",
  owner = "Emily Carter",
  species = "Dog",
  age = "3 Years",
  healthStatus = "Healthy",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <PawPrint className="text-blue-600" size={22} />
          <h3 className="text-lg font-semibold text-gray-800">
            {petName}
          </h3>
        </div>

        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
          {healthStatus}
        </span>
      </div>

      <div className="space-y-3 text-gray-700">
        <div className="flex items-center gap-2">
          <User size={18} className="text-blue-500" />
          <span><strong>Owner:</strong> {owner}</span>
        </div>

        <div className="flex items-center gap-2">
          <PawPrint size={18} className="text-blue-500" />
          <span><strong>Species:</strong> {species}</span>
        </div>

        <div className="flex items-center gap-2">
          <Heart size={18} className="text-red-500" />
          <span><strong>Age:</strong> {age}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default PatientCard;