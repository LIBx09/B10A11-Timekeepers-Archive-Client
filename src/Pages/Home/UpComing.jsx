import { Link } from "react-router-dom";
import up1 from "../../assets/img/upcoming.jpg";
import up2 from "../../assets/img/upcoming1.jpg";
import up3 from "../../assets/img/upcoming2.jpg";

const UpComing = () => {
  return (
    <div className="space-y-8 p-4">
      {/* Card */}
      {[up1, up2, up3].map((image, index) => (
        <div
          key={index}
          className="hero bg-base-200 rounded-lg shadow-md p-4 flex flex-col lg:flex-row items-center lg:justify-between gap-6"
        >
          <div className="w-20 text-center">
            <h2 className="text-xl font-bold">31st</h2>
            <h4 className="text-sm text-gray-600">Date</h4>
          </div>

          {/* Image with hover effects */}
          <div className="relative group w-full max-w-xs lg:max-w-sm mx-auto">
            <div className="absolute inset-0 bg-transparent group-hover:rotate-90 transition-transform duration-500 ease-in-out">
              <div className="absolute w-full h-full">
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-1/4"></div>
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-3/4"></div>
              </div>
            </div>
            <img
              src={image}
              alt={`Upcoming ${index + 1}`}
              className="rounded-full shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold">Box Office News!</h1>
            <p className="py-4 text-gray-700">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          {/* Learn More */}
          <div className="border py-3 text-center w-40 hover:bg-[#AAA081] rounded-md">
            <Link to="/" className="text-sm font-medium text-gray-700">
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpComing;
