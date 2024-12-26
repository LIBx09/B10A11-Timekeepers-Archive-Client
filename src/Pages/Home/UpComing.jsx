import { Link } from "react-router-dom";
import up1 from "../../assets/img/upcoming.jpg";
import up2 from "../../assets/img/upcoming1.jpg";
import up3 from "../../assets/img/upcoming2.jpg";
// import upDog from "../../assets/img/upcomingDog.png";

const UpComing = () => {
  return (
    <div>
      {/* 1st */}
      <div className="hero bg-base-200 h-64 rounded-tr-3xl rounded-tl-md rounded-br-md rounded-bl-3xl px-20">
        <div className="hero-content flex-col lg:flex-row relative">
          <div className="w-40 text-center">
            <h2>31st</h2>
            <h4>daty</h4>
          </div>
          <div className="relative group">
            {/* Diagonal lines background */}
            <div className="absolute inset-0 bg-transparent group-hover:rotate-90 transition-transform duration-500 ease-in-out">
              <div className="absolute w-full h-full">
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-1/4"></div>
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-3/4"></div>
              </div>
            </div>
            {/* Image */}
            <img
              src={up1}
              className="max-w-sm rounded-full shadow-2xl relative"
            />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="border py-3 text-center w-60 mr-10 hover:bg-[#AAA081]">
            <Link>Learn More</Link>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="hero bg-base-200 h-64 rounded-tr-3xl rounded-tl-md rounded-br-md rounded-bl-3xl px-20">
        <div className="hero-content flex-col lg:flex-row-reverse relative">
          <div className="w-40 text-center">
            <h2>31st</h2>
            <h4>daty</h4>
          </div>
          <div className="relative group">
            {/* Diagonal lines background */}
            <div className="absolute inset-0 bg-transparent group-hover:rotate-90 transition-transform duration-500 ease-in-out">
              <div className="absolute w-full h-full">
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-1/4"></div>
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-3/4"></div>
              </div>
            </div>
            {/* Image */}
            <img
              src={up2}
              className="max-w-sm rounded-full shadow-2xl relative"
            />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="border py-3 text-center w-60 mr-10 hover:bg-[#AAA081]">
            <Link>Learn More</Link>
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="hero bg-base-200 h-64 rounded-tr-3xl rounded-tl-md rounded-br-md rounded-bl-3xl px-20">
        <div className="hero-content flex-col lg:flex-row relative">
          <div className="w-40 text-center">
            <h2>31st</h2>
            <h4>daty</h4>
          </div>
          <div className="relative group">
            {/* Diagonal lines background */}
            <div className="absolute inset-0 bg-transparent group-hover:rotate-90 transition-transform duration-500 ease-in-out">
              <div className="absolute w-full h-full">
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-1/4"></div>
                <div className="border-l-2 border-black transform -rotate-45 h-full absolute left-3/4"></div>
              </div>
            </div>
            {/* Image */}
            <img
              src={up3}
              className="max-w-sm rounded-full shadow-2xl relative"
            />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="border py-3 text-center w-60 mr-10 hover:bg-[#AAA081]">
            <Link>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
