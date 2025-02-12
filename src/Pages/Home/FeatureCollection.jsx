import { Link } from "react-router-dom";
import featureCollec1 from "../../assets/img/fc1.jpg";
import featureCollec2 from "../../assets/img/fc2.jpg";
const FeatureCollection = () => {
  return (
    <div>
      <div>
        <h2 className="text-7xl font-merriweather my-10 text-[#AAA081]">
          Feature Collection
        </h2>
      </div>
      <div className="flex flex-col gap-10 md:flex-row items-center">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <div className="relative group overflow-hidden rounded-tl-xl rounded-br-xl">
            <img
              className="md:w-[600px] md:h-[450px] "
              src={featureCollec1}
              alt="Example"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 opacity-0 group-hover:opacity-30"></div>

            <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>
          </div>
        </div>
        <div className="ml-4">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-[2px]  bg-[#AAA081] my-5"></div>
            <h4 className="text-2xl font-bold text-[#AAA081]">Collection</h4>
          </div>
          <h2 className="text-5xl font-bold text-[#252930] dark:text-slate-200">
            Featured Collection
          </h2>
          <p className="mt-5 text-lg font-medium dark:text-[#848485]">
            Welcome to the World’s Leading Museum of Modern Art. It includes
            works of art created during the period stretching.
          </p>
          <Link to="/allArtifacts">
            <button className="px-7 mt-5 p-4 bg-[#AAA081]">
              Explore Collection
            </button>
          </Link>
        </div>
      </div>
      {/* end div */}
      <div className="flex flex-col-reverse justify-evenly md:flex-row items-center mt-10">
        <div className="mr-28  w-full mx-auto space-y-8 mt-10 flex-1">
          <span className="text-[#AAA081]">- - - - - - - - - - - -</span>
          <br />
          <span className="text-[#AAA081]">- - - - - -</span>
          <p className="dark:text-[#848485]">
            Man face fruit divided seasons herb from herb moveth whose. Dominion
            gathered winged morning, man won’t had fly beginning. Winged have
            saying behold.
          </p>
          <Link to="/allArtifacts">
            <button className="px-7 mt-5 p-4 bg-[#AAA081]">
              Explore Collection
            </button>
          </Link>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1">
          <div className="relative group overflow-hidden rounded-tl-lg rounded-br-lg">
            <img
              className="md:w-[600px] md:h-[500px] "
              src={featureCollec2}
              alt="Example"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 opacity-0 group-hover:opacity-30"></div>

            <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCollection;
