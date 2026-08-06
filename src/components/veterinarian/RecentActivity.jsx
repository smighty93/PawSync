import { motion } from "framer-motion";
import {
  CheckCircle,
  Syringe,
  FileText,
} from "lucide-react";

const activities = [
  {
    icon: CheckCircle,
    title: "Consultation Completed",
    description: "Bella's health check was completed successfully.",
    color: "text-green-600",
  },
  {
    icon: Syringe,
    title: "Vaccination Administered",
    description: "Max received his annual rabies vaccine.",
    color: "text-yellow-600",
  },
  {
    icon: FileText,
    title: "Medical Report Updated",
    description: "Charlie's treatment notes were updated.",
    color: "text-blue-600",
  },
];

function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-md p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-start gap-4"
            >
              <div className={`${activity.color}`}>
                <Icon size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default RecentActivity;