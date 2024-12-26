// import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { user, getOut } = useAuth();
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src="img" alt="" />
          <span className="font-bold">Timekeeper&apos;s Archive</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allArtifacts">All Artifacts</Link>
          </li>

          {!user && (
            <li>
              <Link to="/signIn">Sign In</Link>
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
                <Link to="/addArtifacts" className="justify-between">
                  Add Artifacts
                </Link>
              </li>
              <li>
                <Link to="/likedArtifacts">Liked</Link>
              </li>
              <li>
                <Link to="/myArtifacts">My Artifacts</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={getOut}
                  className="bg-gray-200 block text-center"
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
