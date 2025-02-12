// import logo from "../assets/images/logo.png";
import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const Navbar = () => {
  const { user, getOut } = useAuth();
  return (
    <div className="navbar md:w-10/12 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="" />
          <span className="font-playfair font-black text-sm md:text-xl">
            Timekeeper&apos;s Archive
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal ">
          <li>
            <Link
              className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 rounded-md"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 rounded-md"
              to="/allArtifacts"
            >
              All Artifacts
            </Link>
          </li>

          {!user && (
            <li>
              <Link
                className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 rounded-md"
                to="/signIn"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/addArtifacts"
                  className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 rounded-md"
                >
                  Add Artifacts
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 rounded-md"
                  to="/likedArtifacts"
                >
                  Liked
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 rounded-md"
                  to="/myArtifacts"
                >
                  My Artifacts
                </Link>
              </li>
              <li className="mt-2">
                <DarkModeToggle />
                <button
                  onClick={getOut}
                  className="bg-gray-200 block text-center hover:text-[#a0905f] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 rounded-md"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
