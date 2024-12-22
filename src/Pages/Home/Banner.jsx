import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import "animate.css";

import bgb22 from "../../assets/img/bgb22.jpg";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      {/* Top Section with Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-center text-white px-5 pointer-events-none">
        <Fade direction="down">
          <h3 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
            Professional Visa Consulting
          </h3>
          <p className="text-lg max-w-3xl mb-6 animate__animated animate__fadeInUp">
            Our experienced team of consultants is dedicated to simplifying the
            immigration process, ensuring a stress-free journey for you and your
            loved ones.
          </p>
        </Fade>
        <Fade direction="up">
          <h2 className="text-5xl font-extrabold mb-4">
            <Typewriter
              words={[
                "Apply For Visa Immigration",
                "Simplify Your Visa Journey",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h2>
          <div className="flex gap-3 mt-4 pointer-events-auto">
            <button className="btn bg-orange-500 text-white hover:bg-orange-600">
              <Link to="/visa">Explore More</Link>
            </button>
            <button className="btn text-orange-500 border border-orange-500 hover:text-white hover:bg-orange-500">
              WATCH INTRO
            </button>
          </div>
        </Fade>
      </div>

      {/* Carousel Section */}
      <div className="carousel w-full h-screen rounded-md overflow-hidden ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={bgb22}
            className="w-full h-screen object-cover"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between z-20">
            <a
              href="#slide4"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            // src={bgb22}
            className="w-full h-screen object-cover"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between z-20">
            <a
              href="#slide1"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            // src={bgb3}
            className="w-full h-screen object-cover "
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between z-20">
            <a
              href="#slide2"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            // src={bgb4}
            className="w-full h-screen object-cover"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between z-20">
            <a
              href="#slide3"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle w-6 h-6 md:w-12 md:h-12"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
