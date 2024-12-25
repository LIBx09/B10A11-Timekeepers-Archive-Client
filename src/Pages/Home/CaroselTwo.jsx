import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import s1 from "../../assets/img/s1.png";
import s2 from "../../assets/img/s2.png";
import s3 from "../../assets/img/s3.png";
import s4 from "../../assets/img/s4.png";
import s5 from "../../assets/img/s5.png";

const CaroselTwo = () => {
  return (
    <div className="p-4 bg-[#181A1E]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 20 },
          575: { slidesPerView: 3, spaceBetween: 30 },
          767: { slidesPerView: 4, spaceBetween: 40 },
          991: { slidesPerView: 4, spaceBetween: 70 },
          1199: { slidesPerView: 5, spaceBetween: 150 },
        }}
        className="my-carousel"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-32 w-32 rounded shadow-md">
            <img src={s1} alt="Brand 1" className="max-w-full max-h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-32 w-32  rounded shadow-md">
            <img
              src={s2}
              alt="Brand 2"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-32 w-32  rounded shadow-md">
            <img
              src={s3}
              alt="Brand 3"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-32 w-32  rounded shadow-md">
            <img
              src={s4}
              alt="Brand 4"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-32 w-32  rounded shadow-md">
            <img
              src={s5}
              alt="Brand 5"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-32 w-32  rounded shadow-md">
            <img
              src={s1}
              alt="Brand 5"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaroselTwo;
