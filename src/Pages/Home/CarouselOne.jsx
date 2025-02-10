import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";

// import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

const CarouselOne = () => {
  const images = [
    {
      src: "https://swiperjs.com/demos/images/nature-1.jpg",
      title: "St. Catherine Alexandria in Prison",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-2.jpg",
      title: "English Landscape Painting",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-3.jpg",
      title: "Alexandria in Prison",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-4.jpg",
      title: "Modern Abstract Art",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-5.jpg",
      title: "Historical Masterpiece",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-black via-black to-gray-400  text-white py-10 px-6 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex  gap-3 items-center">
          <div className="w-12 h-[2px] bg-[#AAA081]"></div>
          <h2 className="text-xl text-[#AAA06D] uppercase ">Gallery</h2>
        </div>
        <h1 className="text-4xl text-[#FFFFFF] font-bold mb-8">
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
                className="rounded-lg shadow-lg object-cover w-full h-80"
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
