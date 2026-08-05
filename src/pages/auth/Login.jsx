import { PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center px-16">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <PawPrint size={40} />
            <h1 className="text-4xl font-bold">
              PawSync
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Smart Pet Healthcare
          </h2>

          <p className="text-xl text-blue-100 leading-9">
            Store medical records, manage appointments,
            monitor vaccinations and keep every pet healthier
            with one intelligent platform.
          </p>
        </motion.div>

      </div>

      {/* Right Section */}

      <div className="flex-1 flex items-center justify-center p-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <Card>

            <div className="w-[420px]">

              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Welcome Back 👋
              </h2>

              <p className="text-slate-500 mb-8">
                Login to continue managing your pets.
              </p>

              <div className="space-y-5">

                <Input
                  label="Email"
                  placeholder="Enter your email"
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                />

                <div className="flex justify-between text-sm">

                  <label className="flex gap-2 items-center">

                    <input type="checkbox" />

                    Remember me

                  </label>

                  <button className="text-blue-600 hover:underline">
                    Forgot Password?
                  </button>

                </div>

                <Button onClick={() => navigate("/dashboard")}>

                  Login

                </Button>

              </div>

              <div className="mt-8 text-center">

                <p className="text-slate-600">

                  Don't have an account?

                  <Link
                    to="/register"
                    className="text-blue-600 font-semibold ml-2 hover:underline"
                  >
                    Sign Up
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

export default Login;