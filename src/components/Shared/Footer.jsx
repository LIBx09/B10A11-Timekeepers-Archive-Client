import logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 px-4 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto py-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b pb-8">
          {/* Logo & About Section */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img className="w-auto h-7" src={logo} alt="Logo" />
              <span className="font-playfair dark:text-[#848485] font-black text-lg md:text-xl">
                Timekeeper&apos;s Archive
              </span>
            </Link>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-5 leading-relaxed">
              Welcome to the World’s Leading Museum of Modern Art. It includes
              works of art created during the period stretching from about 1860
              to the 1970s.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Links
            </h2>
            <ul className=" text-gray-600 dark:text-gray-400 space-y-2">
              <div className="col-span-1 ">
                <li>
                  <Link
                    to="/"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/allArtifacts"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    All Artifacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addArtifacts"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    Add Artifacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/likedArtifacts"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    Liked Artifacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myArtifacts"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    My Artifacts
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
            </h2>
            <ul className="  text-gray-600 dark:text-gray-400 space-y-2">
              <div className="col-span-1 ">
                <li>
                  <Link
                    to="/maps"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="/buy-ticket"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    Get Ticket
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-hours"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    Open Hours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:underline transition-all duration-300 px-3 rounded-md"
                  >
                    Contact
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                Timekeeper&apos;s Archive Museums, 32 Quincy Street, Cambridge,
                MA
              </li>
              <li>(617) 495-9400</li>
              <li>
                <a
                  href="mailto:ibrahimfuad729@gmail.com"
                  className="hover:underline transition-all duration-300 px-3 rounded-md text-blue-500"
                >
                  ibrahimfuad729@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Open Hours Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Open Hours
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>Daily: 9.30 AM – 6.00 PM</li>
              <li>Sunday & Holidays: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          © {new Date().getFullYear()} Timekeeper&apos;s Archive. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
