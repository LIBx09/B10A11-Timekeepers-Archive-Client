import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSign from "./GoogleSign";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
// import { useState } from "react";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const email = "";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
        toast.success("Successfully Login");
      })
      .catch((error) => {
        // console.log(error.code);

        if (password.length < 5) {
          toast.error("Password length ares not matched");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Failed to login. Please try again later.");
        } else {
          toast.error("Incorrect password. Please try again.");
        }
      });
  };

  return (
    <div className="flex flex-col lg:flex-row w-10/12 mx-auto p-10 rounded-xl items-center">
      <div className="card glass-effect bg-base-100  shrink-0 shadow-2xl w-full lg:w-5/12 mx-auto">
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSignIn} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <GoogleSign />
              </div>
              <Link to={`/lost?email=${encodeURIComponent(email)}`}>
                Lost Password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not Have Account?{" "}
              <Link
                to="/signUp"
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-5/12 h-[400px] mx-auto">
        <DotLottieReact
          src="https://lottie.host/de7e919c-3dbb-41f6-85ca-0a118cb3d0e8/WAhuMDI8vp.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default SignIn;
