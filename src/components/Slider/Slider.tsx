import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import './Slider.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://uploaddeimagens.com.br/images/004/453/302/full/Sem_nome_%2812_%C3%97_3_cm%29%281%29.png?1683204119" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="src/assets/img/slogan.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}