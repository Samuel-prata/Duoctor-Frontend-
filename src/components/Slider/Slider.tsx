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
import { FormatAlignJustify } from "@material-ui/icons";

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{background: 'blue' }}>Bem vindo</SwiperSlide>
                <SwiperSlide style={{background: 'red'}}>Quero doar</SwiperSlide>
                <SwiperSlide style={{background: 'green'}}>Quero pedir ajuda</SwiperSlide>
            </Swiper>
        </>
    );
}