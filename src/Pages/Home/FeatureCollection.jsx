import featureCollec1 from "../../assets/img/fc1.jpg";
import featureCollec2 from "../../assets/img/fc2.jpg";
const FeatureCollection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative group overflow-hidden rounded-tl-lg rounded-br-lg">
            <img
              className="md:w-[600px] md:h-[500px] "
              src={featureCollec1}
              alt="Example"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 opacity-0 group-hover:opacity-30"></div>

            <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>
          </div>
        </div>
        <div className="ml-28">
          <h4>Collection</h4>
          <h2>Featured Collection</h2>
          <p>
            Welcome to the World’s Leading Museum of Modern Art. It includes
            works of art created during the period stretching.
          </p>
        </div>
      </div>
      {/* end div */}
      <div className="flex flex-col-reverse justify-evenly md:flex-row items-center mt-10">
        <div className="mr-28 text-center w-full mx-auto space-y-8 mt-10 flex-1">
          <p>
            Man face fruit divided seasons herb from herb moveth whose. Dominion
            gathered winged morning, man won’t had fly beginning. Winged have
            saying behold.
          </p>
          <button className="px-7 p-4 bg-[#AAA081]">Explore Collection</button>
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
