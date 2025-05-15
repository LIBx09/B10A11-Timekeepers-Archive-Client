import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png";
import useAuth from "../../Hooks/useAuth";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
  const { user, getOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar md:w-11/12 mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img className="h-7" src={logo} alt="Logo" />
            <span className="font-playfair font-black text-sm md:text-xl">
              Timekeeper&apos;s Archive
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="menu menu-horizontal flex gap-2">
            <li>
              <Link
                className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 py-1 rounded-md"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 py-1 rounded-md"
                to="/allArtifacts"
              >
                Artifacts
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 py-1 rounded-md"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 py-1 rounded-md"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            {!user && (
              <li>
                <Link
                  className="hover:text-[#AAA081] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 py-1 rounded-md"
                  to="/signIn"
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
                <li>
                  <div className="my-4">
                    <DarkModeToggle />
                  </div>
                  <button
                    onClick={getOut}
                    className="w-full bg-gray-200 text-center hover:text-[#a0905f] hover:bg-slate-800 hover:shadow-md transition-all duration-300 px-3 py-1 rounded-md"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 transition-all duration-500 ease-in-out">
          <ul className="space-y-2">
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className="block hover:text-[#AAA081]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/allArtifacts"
                className="block hover:text-[#AAA081]"
              >
                Artifacts
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/about"
                className="block hover:text-[#AAA081]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/contact"
                className="block hover:text-[#AAA081]"
              >
                Contact
              </Link>
            </li>
            {!user && (
              <li>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  to="/signIn"
                  className="block hover:text-[#AAA081]"
                >
                  Sign In
                </Link>
              </li>
            )}
            {user && (
              <>
                <li>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    to="/addArtifacts"
                    className="block hover:text-[#AAA081]"
                  >
                    Add Artifacts
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    to="/likedArtifacts"
                    className="block hover:text-[#AAA081]"
                  >
                    Liked
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    to="/myArtifacts"
                    className="block hover:text-[#AAA081]"
                  >
                    My Artifacts
                  </Link>
                </li>
                <li>
                  <DarkModeToggle />
                </li>
                <li>
                  <button
                    onClick={() => {
                      getOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left hover:text-[#AAA081]"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
