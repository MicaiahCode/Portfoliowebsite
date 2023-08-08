import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/JOKER.png";
import AVTR2 from "../../assets/JOKER.png";
import AVTR3 from "../../assets/JOKER.png";
import AVTR4 from "../../assets/JOKER.png";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container mySwiper"
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            illum sunt hic explicabo laborum, temporibus accusantium dignissimos
            perspiciatis possimus repellendus itaque ea dolore earum quam sit
            nobis in, libero voluptatum?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            illum sunt hic explicabo laborum, temporibus accusantium dignissimos
            perspiciatis possimus repellendus itaque ea dolore earum quam sit
            nobis in, libero voluptatum?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            illum sunt hic explicabo laborum, temporibus accusantium dignissimos
            perspiciatis possimus repellendus itaque ea dolore earum quam sit
            nobis in, libero voluptatum?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
