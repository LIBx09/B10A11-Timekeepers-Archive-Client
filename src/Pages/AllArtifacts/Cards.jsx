/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const { artifactName, artifactImage, historicalContext, likeCount, _id } =
    data;

  return (
    <Fade direction="top-left">
      <div className=" bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-[1.03] duration-300 ease-in-out">
        {/* Image Wrapper */}
        <div className="relative group w-full h-64 overflow-hidden">
          <div className="p-4">
            <img
              className="rounded-xl w-full h-[220px]"
              src={artifactImage}
              alt={artifactName}
            />
          </div>

          {/* Overlay effect */}
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 group-hover:opacity-100"></div>

          {/* Light Glint Effect */}
          <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            {artifactName}
          </h5>
          <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {historicalContext}
          </p>

          {/* Card Actions */}
          <div className="flex justify-between items-center">
            <p className="text-base font-semibold text-gray-800 dark:text-gray-300">
              ❤️ {likeCount} Likes
            </p>
            <Link
              to={`/details/${_id}`}
              className="text-lg font-medium  px-4 py-2 bg-[#AAA081] transition-all duration-200"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Cards;
