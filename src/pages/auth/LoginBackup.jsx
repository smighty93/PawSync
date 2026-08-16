
import pawSyncLogo from "../../assets/pawsync-logo.png";
import happyPets from "../../assets/pets-login.png";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary navigation
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-full bg-[#F5F8FF] flex overflow-hidden">

      {/* =====================================================
          LEFT BRANDING SECTION
      ===================================================== */}

      <div
        className="
          hidden
          lg:flex
          relative
          w-[55%]
          h-screen
          overflow-hidden
          bg-[#F3F7FF]
        "
      >

        {/* =================================================
            DECORATIVE PAW PRINTS
        ================================================= */}

        <div
          className="
            absolute
            top-103
            left-13
            text-[#D8E5FC]
            text-5xl
            opacity-70
            rotate-[-17deg]
            z-20
          "
        >
          🐾
        </div>

        <div
          className="
            absolute
            top-16
            right-12
            text-[#D8E5FC]
            text-5xl
            opacity-70
            rotate-[15deg]
            z-20
          "
        >
          🐾
        </div>

        <div
          className="
            absolute
            top-[25%]
            right-[5%]
            text-[#E1EBFF]
            text-4xl
            opacity-80
            z-20
          "
        >
          🐾
        </div>

        <div
          className="
            absolute
            bottom-[20%]
            left-4
            text-[#D8E5FC]
            text-4xl
            opacity-70
            rotate-[-10deg]
            z-20
          "
        >
          🐾
        </div>


        {/* =================================================
            BRANDING
        ================================================= */}

        <div
          className="
            relative
            z-30
            w-full
            px-12
            xl:px-14
            pt-12
            xl:pt-14
          "
        >

          <div className="flex items-start gap-6">

            {/* PAW LOGO */}

            <img
              src={pawSyncLogo}
              alt="PawSync Logo"
              className="
                w-[125px]
                h-[125px]
                xl:w-[140px]
                xl:h-[140px]
                object-contain
                shrink-0
              "
            />


            {/* BRAND TEXT */}

            <div className="pt-4">

              <h1
                className="
                  text-[80px]
                  xl:text-[120px]
                  leading-none
                  font-extrabold
                  tracking-[-3px]
                  text-[#164BC5]
                "
              >
                PawSync
              </h1>

              <p
                className="
                  mt-3
                  ml-5
                  text-[21px]
                  xl:text-[33px]
                  leading-[1.35]
                  font-medium
                  text-[#536687]
                  max-w-[500px]
                "
              >
                Smart Pet Healthcare &amp; Medical 
                <br />
                <span className="ml-30"></span>
                Record System
              </p>

            </div>

          </div>

        </div>

        


        {/* =================================================
            PET IMAGE
        ================================================= */}

        <div
          className="
            absolute
            left-[-3%]
            bottom-0
            w-[106%]
            h-[70%]
            z-10
          "
        >

          <img
            src={happyPets}
            alt="Happy dog and cat"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
            "
          />


          {/* TOP BLEND */}

          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-[6%]
              bg-gradient-to-b
              from-[#F3F7FF]
              via-[#F3F7FF]/45
              to-transparent
            "
          />


          {/* LEFT BLEND */}

          <div
            className="
              absolute
              top-0
              bottom-0
              left-0
              w-[12%]
              bg-gradient-to-r
              from-[#F3F7FF]
              via-[#F3F7FF]/25
              to-transparent
            "
          />


          {/* RIGHT BLEND */}

          <div
            className="
              absolute
              top-0
              bottom-0
              right-0
              w-[12%]
              bg-gradient-to-l
              from-[#F3F7FF]
              via-[#F3F7FF]/20
              to-transparent
            "
          />


          {/* BOTTOM BLEND */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-[8%]
              bg-gradient-to-t
              from-[#F3F7FF]/60
              to-transparent
            "
          />

        </div>

        


        {/* =================================================
            LIGHT BLUE CURVE
        ================================================= */}

        <div
          className="
            absolute
            z-[19]
            bottom-[-95px]
            left-[-12%]
            w-[125%]
            h-[145px]
            bg-[#D9E7FF]
            rounded-[50%]
          "
        />


        {/* =================================================
            BLUE CURVE
        ================================================= */}

        <div
          className="
            absolute
            z-20
            bottom-[-120px]
            left-[-12%]
            w-[125%]
            h-[175px]
            bg-[#2875E8]
            rounded-[50%]
          "
        />

      </div>


      {/* =====================================================
          RIGHT LOGIN SECTION
      ===================================================== */}

      <div
        className="
          w-full
          lg:w-[45%]
          h-screen
          flex
          items-center
          justify-center
          px-5
          sm:px-6
          py-5
          bg-[#F7F9FD]
          overflow-hidden
        "
      >

        <div className="w-full max-w-[570px]">

          {/* =================================================
              LOGIN CARD
          ================================================= */}

          <div
            className="
              bg-white
              rounded-[28px]
              px-7
              py-7
              md:px-9
              md:py-8
              shadow-[0_20px_60px_rgba(45,75,130,0.12)]
              border
              border-white
            "
          >

            {/* =================================================
                HEADING
            ================================================= */}

            <div className="mb-6">

              <h2
                className="
                  text-[34px]
                  md:text-[38px]
                  leading-tight
                  font-bold
                  text-[#17233C]
                "
              >
                Welcome 👋
              </h2>

              <p
                className="
                  mt-2
                  text-[17px]
                  text-[#71809A]
                "
              >
                Login to continue managing your pets.
              </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form onSubmit={handleLogin}>

              {/* EMAIL */}

              <div className="mb-5">

                <label
                  className="
                    block
                    mb-2
                    text-[15px]
                    font-semibold
                    text-[#34425B]
                  "
                >
                  Email
                </label>

                <div className="relative">

                  <Mail
                    size={21}
                    strokeWidth={1.8}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-[#7C8BA5]
                    "
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="
                      w-full
                      h-[56px]
                      pl-[54px]
                      pr-5
                      rounded-[13px]
                      border
                      border-[#D4DDEB]
                      bg-white
                      outline-none
                      text-[16px]
                      text-[#17233C]
                      placeholder-[#9AA6B8]
                      transition-all
                      focus:border-[#2166E8]
                      focus:ring-4
                      focus:ring-[#2166E8]/10
                    "
                  />

                </div>

              </div>


              {/* PASSWORD */}

              <div className="mb-4">

                <label
                  className="
                    block
                    mb-2
                    text-[15px]
                    font-semibold
                    text-[#34425B]
                  "
                >
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={21}
                    strokeWidth={1.8}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-[#7C8BA5]
                    "
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="
                      w-full
                      h-[56px]
                      pl-[54px]
                      pr-[54px]
                      rounded-[13px]
                      border
                      border-[#D4DDEB]
                      bg-white
                      outline-none
                      text-[16px]
                      text-[#17233C]
                      placeholder-[#9AA6B8]
                      transition-all
                      focus:border-[#2166E8]
                      focus:ring-4
                      focus:ring-[#2166E8]/10
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2
                      text-[#7C8BA5]
                      hover:text-[#2166E8]
                      transition
                    "
                  >

                    {showPassword ? (
                      <EyeOff size={21} />
                    ) : (
                      <Eye size={21} />
                    )}

                  </button>

                </div>

              </div>


              {/* =================================================
                  REMEMBER + FORGOT PASSWORD
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-6
                "
              >

                <label
                  className="
                    flex
                    items-center
                    gap-2.5
                    cursor-pointer
                    text-[#596A84]
                  "
                >

                  <div className="relative">

                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                      className="
                        appearance-none
                        w-[20px]
                        h-[20px]
                        rounded-[5px]
                        border
                        border-[#B9C5D7]
                        checked:bg-[#2166E8]
                        checked:border-[#2166E8]
                        cursor-pointer
                      "
                    />

                    {rememberMe && (
                      <Check
                        size={14}
                        className="
                          absolute
                          left-[3px]
                          top-[3px]
                          text-white
                          pointer-events-none
                        "
                      />
                    )}

                  </div>

                  <span
                    className="
                      text-[14px]
                      font-medium
                    "
                  >
                    Remember me
                  </span>

                </label>


                <button
                  type="button"
                  className="
                    text-[14px]
                    font-semibold
                    text-[#2166E8]
                    hover:underline
                  "
                >
                  Forgot Password?
                </button>

              </div>


              {/* =================================================
                  LOGIN BUTTON
              ================================================= */}

              <button
                type="submit"
                className="
                  w-full
                  h-[56px]
                  rounded-[13px]
                  bg-[#2166E8]
                  text-white
                  text-[17px]
                  font-semibold
                  shadow-[0_8px_20px_rgba(33,102,232,0.25)]
                  hover:bg-[#174FC5]
                  hover:-translate-y-[1px]
                  active:translate-y-0
                  transition-all
                "
              >
                Login
              </button>

            </form>


            {/* =================================================
                DIVIDER
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-4
                my-5
              "
            >

              <div className="flex-1 h-px bg-[#E1E6EF]" />

              <span
                className="
                  text-[14px]
                  text-[#8490A4]
                "
              >
                OR
              </span>

              <div className="flex-1 h-px bg-[#E1E6EF]" />

            </div>


            {/* =================================================
                GOOGLE
            ================================================= */}

            <button
              type="button"
              className="
                w-full
                h-[54px]
                rounded-[13px]
                border
                border-[#D9E0EA]
                bg-white
                hover:bg-[#F8FAFD]
                transition
                flex
                items-center
                justify-center
                gap-3
                text-[16px]
                font-medium
                text-[#26344D]
              "
            >

              <span
                className="
                  text-[21px]
                  font-bold
                  text-[#4285F4]
                "
              >
                G
              </span>

              Continue with Google

            </button>


            {/* =================================================
                APPLE
            ================================================= */}

            <button
              type="button"
              className="
                w-full
                mt-3
                h-[54px]
                rounded-[13px]
                border
                border-[#D9E0EA]
                bg-white
                hover:bg-[#F8FAFD]
                transition
                flex
                items-center
                justify-center
                gap-3
                text-[16px]
                font-medium
                text-[#26344D]
              "
            >

              <span className="text-[19px]">
                ●
              </span>

              Continue with Apple

            </button>


            {/* =================================================
                REGISTER
            ================================================= */}

            <p
              className="
                text-center
                mt-6
                text-[15px]
                text-[#66758E]
              "
            >

              Don't have an account?

              <button
                onClick={() => navigate("/register")}
                className="
                  ml-1
                  font-semibold
                  text-[#2166E8]
                  hover:underline
                "
              >
                Sign Up
              </button>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;