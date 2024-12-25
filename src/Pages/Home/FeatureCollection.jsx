import featureCollec1 from "../../assets/img/fc1.jpg";
import featureCollec2 from "../../assets/img/fc2.jpg";
const FeatureCollection = () => {
  return (
    <div>
      <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative group w-full h-64 overflow-hidden rounded-t-lg">
            <img
              className="w-full h-full "
              src={featureCollec1}
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
