import { motion } from "framer-motion";
import {
  CalendarCheck,
  PawPrint,
  Syringe,
  FileText,
} from "lucide-react";

const stats = [
  {
    title: "Today's Appointments",
    value: "12",
    icon: CalendarCheck,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Patients Treated",
    value: "248",
    icon: PawPrint,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Vaccinations Due",
    value: "18",
    icon: Syringe,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Medical Reports",
    value: "36",
    icon: FileText,
    color: "bg-purple-100 text-purple-700",
  },
];

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-800">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default DashboardStats;