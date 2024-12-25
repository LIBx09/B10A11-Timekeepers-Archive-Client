import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

const CarouselOne = () => {
  return (
    <div className="h-[270px] md:h-[400px] mx-10/12 mx-auto border p-7">
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        // spaceBetween={20}
        // pagination={{
        //   clickable: true, // Enable pagination
        // }}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        // pagination={true}
        // modules={[Pagination]}
        className="mySwiper swiper-slide 
        swiper-wrapper"
      >
        <div className="h-[400px]">
          <SwiperSlide className="">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-[200px] h-[270px] md:h-[400px] md:w-[350px] rounded  flex justify-center items-center"
            />
          </SwiperSlide>
        </div>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className=" rounded w-[200px] h-[270px] md:h-[400px] md:w-[350px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className=" rounded w-[200px] h-[270px] md:h-[400px] md:w-[350px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className=" rounded w-[200px] h-[270px] md:h-[400px] md:w-[350px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className=" rounded w-[200px] h-[270px] md:h-[400px] md:w-[350px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselOne;
