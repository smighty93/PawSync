import { PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Register() {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center px-16">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <div className="flex items-center gap-3 mb-8">
            <PawPrint size={40} />
            <h1 className="text-4xl font-bold">PawSync</h1>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Join PawSync Today
          </h2>

          <p className="text-xl text-blue-100 leading-9">
            Create your account to securely manage your pets,
            appointments, medical history, and vaccinations.
          </p>

        </motion.div>

      </div>

      {/* Right Section */}

      <div className="flex-1 flex items-center justify-center p-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <Card>

            <div className="w-[450px]">

              <h2 className="text-3xl font-bold mb-2">
                Create Account 🐾
              </h2>

              <p className="text-slate-500 mb-8">
                Register to start using PawSync.
              </p>

              <div className="space-y-5">

                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                />

                <Input
                  label="Email"
                  placeholder="Enter your email"
                />

                <Input
                  label="Phone Number"
                  placeholder="Enter your phone number"
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                />

                <div>

                  <label className="text-sm font-medium text-slate-700">
                    Register As
                  </label>

                  <select
                    className="w-full mt-2 rounded-xl border border-slate-300 px-4 py-3"
                  >
                    <option>Pet Owner</option>
                    <option>Veterinarian</option>
                  </select>

                </div>

                <Button>
                  Create Account
                </Button>

              </div>

              <div className="mt-8 text-center">

                <p className="text-slate-600">

                  Already have an account?

                  <Link
                    to="/"
                    className="text-blue-600 font-semibold ml-2 hover:underline"
                  >
                    Login
                  </Link>

                </p>

              </div>

            </div>

          </Card>

        </motion.div>

      </div>

    </div>
  );
}

export default Register;