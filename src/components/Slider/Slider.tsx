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
                    <img src="src/assets/img/Sem_nome_12_3_cm1.svg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="src/assets/img/Sem_nome_12_3_cm.svg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}