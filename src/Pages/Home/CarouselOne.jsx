import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import caro1 from "../../assets/img/caro1.jpg";
import caro2 from "../../assets/img/caro2.jpg";
import caro3 from "../../assets/img/caro3.jpg";
import caro4 from "../../assets/img/caro4.jpg";
import caro5 from "../../assets/img/caro5.jpg";

// import { motion } from "framer-motion";

// import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

const CarouselOne = () => {
  const images = [
    {
      src: caro1,
      title: "St. Catherine Alexandria in Prison",
    },
    {
      src: caro2,
      title: "English Landscape Painting",
    },
    {
      src: caro3,
      title: "The Great Wave off Kanagawa",
    },
    {
      src: caro4,
      title: "Modern Abstract Art",
    },
    {
      src: caro5,
      title: "Historical Masterpiece",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#2c2e31] via-black to-gray-400 h-[700px] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex  gap-3 items-center">
          <div className="w-12 h-[2px] bg-[#AAA081]"></div>
          <h2 className="text-xl text-[#AAA06D] uppercase ">Gallery</h2>
        </div>
        <h1 className="text-4xl text-[#FFFFFF] font-bold mb-14 mt-4">
          Explore The Collection
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="relative w-64 flex-shrink-0">
              <img
                src={item.src}
                alt={item.title}
                className="rounded-lg shadow-lg object-cover w-full h-[470px]"
              />
              <p className="absolute bottom-4 left-4 text-lg font-semibold">
                {item.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselOne;
