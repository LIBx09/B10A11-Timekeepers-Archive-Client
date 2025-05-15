import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import caro1 from "../../assets/img/caro1.jpg";
import caro2 from "../../assets/img/caro2.jpg";
import caro3 from "../../assets/img/caro3.jpg";
import caro4 from "../../assets/img/caro4.jpg";
import caro5 from "../../assets/img/caro5.jpg";

const CarouselOne = () => {
  const images = [
    {
      src: caro1,
      title: "St. Catherine Alexandria in Prison",
      description: "A powerful depiction of resilience through historical art.",
    },
    {
      src: caro2,
      title: "English Landscape Painting",
      description: "Serene countryside captured in timeless brush strokes.",
    },
    {
      src: caro3,
      title: "The Great Wave off Kanagawa",
      description: "Iconic woodblock print symbolizing nature's force.",
    },
    {
      src: caro4,
      title: "Modern Abstract Art",
      description: "A bold expression of emotion through color and form.",
    },
    {
      src: caro5,
      title: "Historical Masterpiece",
      description: "An exquisite piece showcasing the golden era of art.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#2c2e31] via-black to-gray-700 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-[#AAA081]"></div>
            <h2 className="text-xl text-[#AAA06D] uppercase tracking-widest">
              Gallery
            </h2>
          </div>
          <h1 className="text-4xl font-bold mt-2 text-white">
            Explore The Collection
          </h1>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative w-[260px] sm:w-[300px] md:w-[320px] lg:w-[360px]"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl group">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-[470px] transform group-hover:scale-105 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent p-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselOne;
