/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import "./light_glint.css";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  const { artifactName, artifactImage, historicalContext, likeCount } = data;
  return (
    <Fade direction="top-left">
      <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative group w-full h-64 overflow-hidden rounded-t-lg">
            <img className="w-full h-full " src={artifactImage} alt="Example" />

            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

            <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {artifactName}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {historicalContext}
            </p>
            <div className="card-actions flex justify-between items-center">
              <p className=" text-base font-bold">Like Count : {likeCount}</p>
              <button className=" text-lg font-bold hover:text-primary">
                <Link to={`/details/${data._id}`}>View Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Cards;
