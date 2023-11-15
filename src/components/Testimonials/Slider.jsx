import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testmonials.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export const Slider = () => {
  return (
    <div className='mx-12 '>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        // centeredSlides={true}

        // loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

          <div className="testimonial-card w-full bg-white space-y-3 px-6 rounded-xl shadow-lg py-8 flex flex-col items-center justify-evenly">
            <div className="italic text-xl">
              "They are willing to answer our questions very quickly"
            </div>
            <div className="font-mono">
              Brand Ambassador Picasso
            </div>
            <div className="font-bold text-lg">
              Hamza Shah
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="testimonial-card w-full bg-white space-y-3 px-6 rounded-xl shadow-lg py-8 flex flex-col items-center justify-evenly">
            <div className="italic text-xl">
              "They are willing to answer our questions very quickly"
            </div>
            <div className="font-mono">
              Brand Ambassador Picasso
            </div>
            <div className="font-bold text-lg">
              Hamza Shah
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="testimonial-card w-full bg-white space-y-3 px-6 rounded-xl shadow-lg py-8 flex flex-col items-center justify-evenly">
            <div className="italic text-xl">
              "They are willing to answer our questions very quickly"
            </div>
            <div className="font-mono">
              Brand Ambassador Picasso
            </div>
            <div className="font-bold text-lg">
              Hamza Shah
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="testimonial-card w-full bg-white space-y-3 px-6 rounded-xl shadow-lg py-8 flex flex-col items-center justify-evenly">
            <div className="italic text-xl">
              "They are willing to answer our questions very quickly"
            </div>
            <div className="font-mono">
              Brand Ambassador Picasso
            </div>
            <div className="font-bold text-lg">
              Hamza Shafqat
            </div>
          </div>

        </SwiperSlide>

      </Swiper>
    </div>
  )
}
