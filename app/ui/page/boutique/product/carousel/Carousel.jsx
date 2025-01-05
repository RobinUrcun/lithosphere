"use client";
import React, { useRef, useState } from "react";

// Import Librairy //
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({ mainFile, file, title }) {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{ flex: 1 }}
    >
      <SwiperSlide>
        <img
          src={`https://lithosphere83-bucket.s3.eu-west-3.amazonaws.com/upload/${mainFile}`}
          alt={title}
        />
      </SwiperSlide>
      {file.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={`https://lithosphere83-bucket.s3.eu-west-3.amazonaws.com/upload/${img}`}
            alt={title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
