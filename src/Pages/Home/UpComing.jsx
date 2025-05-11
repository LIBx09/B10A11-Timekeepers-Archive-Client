import { Link } from "react-router-dom";
import up1 from "../../assets/img/upcoming.jpg";
import up2 from "../../assets/img/upcoming1.jpg";
import up3 from "../../assets/img/upcoming2.jpg";
// import bg from "../../assets/img/ashBg.jpg";

const UpComing = () => {
  return (
    <div className="space-y-8 w-11/12 mx-auto p-4 ">
      <div className="text-center space-y-5">
        <h4 className="text-[#867b57] font-bold">WHAT&apos;S GOING ON</h4>
        <h2 className="text-[#252930] dark:text-slate-200 text-5xl font-bold">
          Our Upcoming Event
        </h2>
      </div>
      {/* Card */}
      {[up1, up2, up3].map((image, index) => (
        <div
          key={index}
          className="hero  bg-base-200 rounded-lg shadow-md p-4 flex flex-col lg:flex-row items-center lg:justify-between gap-6"
        >
          <div className="w-20 text-center">
            <h2 className="text-xl font-bold">31st</h2>
            <h4 className="text-sm text-gray-600">Date</h4>
          </div>

          {/* Image with hover effects */}
          <div className="relative group w-full max-w-xs lg:max-w-sm mx-auto">
            <div className="absolute inset-0 bg-transparent group-hover:rotate-90 transition-transform duration-500 ease-in-out">
              <div className="absolute -z-10 w-full h-full top-0 left-0">
                {/* First Stick (Thicker) */}
                <div className="border-l-8 border-[#aaa081] transform -rotate-45 h-full absolute left-1/3"></div>

                {/* Second Stick (Thinner) */}
                <div className="border-l-2 border-[#aaa081] transform -rotate-45 h-full absolute left-2/3"></div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={image}
                alt={`Upcoming ${index + 1}`}
                className="rounded-full h-[200px] shadow-lg w-[200px]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-bold">Weekend Drop-In Sessions</h1>
            <p className="py-4 text-gray-700">
              Man face fruit divided seasons herb from herb moveth whose.
            </p>
          </div>

          {/* Learn More */}
          <div className="border py-3 text-center w-40 hover:bg-[#AAA081] rounded-md">
            <Link
              to="/allArtifacts"
              className="text-sm font-medium text-gray-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpComing;
