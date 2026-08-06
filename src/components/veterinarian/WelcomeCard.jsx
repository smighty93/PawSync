import { motion } from "framer-motion";
import { Stethoscope, CalendarDays } from "lucide-react";

function WelcomeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl shadow-lg p-8 text-white"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-blue-100 text-sm mb-2">
            Welcome back,
          </p>

          <h1 className="text-3xl font-bold">
            Dr. Sarah Johnson 👋
          </h1>

          <p className="mt-3 text-blue-100 max-w-xl">
            You have <span className="font-semibold">12 appointments</span> today
            and <span className="font-semibold">5 vaccinations</span> scheduled.
            Keep providing the best care for your patients!
          </p>

          <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
            View Schedule
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center w-28 h-28 rounded-full bg-white/20">
          <Stethoscope size={55} />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 text-blue-100">
        <CalendarDays size={18} />
        <span>Today's Date • Veterinary Dashboard</span>
      </div>
    </motion.div>
  );
}

export default WelcomeCard;