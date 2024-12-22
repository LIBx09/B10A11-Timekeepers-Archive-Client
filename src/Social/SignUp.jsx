import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleSign from "./GoogleSign";

const SignUp = () => {
  const { createUser, setUser, manageUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fullName = firstName + " " + lastName;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (firstName.length < 4) {
      toast.error("Your Name should Have at least 4 character");
      return;
    }

    if (password.length < 6) {
      toast.error(
        "Password Should be 6 character also Your password should have at least one uppercase and one lowercase character."
      );
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast.error(
        "Password Should be 6 character also Your password should have at least one uppercase and one lowercase character."
      );
      return;
    }

    // const user = { fullName, photo, email, password };
    // console.log(user);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        manageUserProfile(fullName, photo);
        navigate("/");
        e.target.reset();
        toast.success("Successfully registered!");
      })
      .catch((error) => {
        console.error("Invalid Credential", error);
        toast.error("Invalid Credential");
      });
  };

  return (
    <div className="flex flex-col lg:flex-row w-10/12 mx-auto p-10 rounded-xl items-center">
      <div className="card glass-effect bg-base-100  shrink-0 shadow-2xl w-full lg:w-5/12 mx-auto">
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSignUp} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder=" Name"
                  required
                />
              </div>
            </div>
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Profile URL"
                required
              />
            </div>
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
            <div className="flex justify-evenly">
              <GoogleSign />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already Have Account?{" "}
              <Link
                to="/signIn"
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Sign In
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

export default SignUp;
