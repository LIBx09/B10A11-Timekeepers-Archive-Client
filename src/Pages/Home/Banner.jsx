/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerHelper from "../../components/BannerHelper";

import ban1 from "../../assets/img/banner1.jpg";
import ban2 from "../../assets/img/banner2.avif";
import ban3 from "../../assets/img/banner3.avif";
import ban4 from "../../assets/img/banner4.avif";

import { Link } from "react-router-dom";

const slidesData = [
  {
    image: ban1,
    h3: "TimeKeeper’s Archive Museum",
    h2: "Apply For Visa Immigration",
    buttonText: "Learn More",
    buttonLink: "/visa",
  },
  {
    image: ban2,
    h3: "Simplify Your Visa Journey",
    h2: "Start Your Application Now",
    buttonText: "Get Started",
    buttonLink: "/start",
  },
  {
    image: ban3,
    h3: "Trusted Visa Experts",
    h2: "Your Immigration Solution",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    image: ban4,
    h3: "Secure and Reliable Services",
    h2: "We Make It Easy",
    buttonText: "Explore Options",
    buttonLink: "/options",
  },
];

const CenterText = ({ h3, h2, buttonText, buttonLink }) => (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-5">
    <Fade direction="down">
      <h3 className="text-4xl font-bold mb-4">{h3}</h3>
    </Fade>
    <Fade direction="up">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{h2}</h2>
      <button className="px-10 py-3 bg-white text-black hover:bg-slate-300 text-xl text-bold">
        <Link to={buttonLink}>{buttonText}</Link>
      </button>
    </Fade>
  </div>
);

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-0"></div>

              {/* Center Text */}
              <CenterText
                h3={slide.h3}
                h2={slide.h2}
                buttonText={slide.buttonText}
                buttonLink={slide.buttonLink}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative z-10">
        <Fade direction="up">
          <div className="-mt-20 ">
            <BannerHelper />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
