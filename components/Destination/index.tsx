'use client';

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import SectionHeader from "../Common/SectionHeader";
import DestinationItem from "./DestinationItem";
import DestinationData from "./destinationsData";
import MainBannerData from "./MainBannerData";
import Image from "next/image";
import { testimonialData } from "../Testimonial/testimonialData";
import SingleTestimonial from "../Testimonial/SingleTestimonial";

const Destination = () => {
  return (
    <section>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `STUDY ABROAD`,
              subtitle: `Your Gateway to Global Education`,
              description: ``,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      {/* <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0"> */}
      {/* <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"> */}
      {/* <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
          {MainBannerData.slice(0, 3).map((destination, key) => (
            <SwiperSlide key={destination?._id}>
              <DestinationItem destination={destination} key={key} />
            </SwiperSlide>
          ))}
          </Swiper> */}
      <Slides />
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};
const Slides = () => {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0 mt-15"
      >
        {/* <!-- Slider main container --> */}
        <div className="swiper testimonial-01 mb-20 pb-22.5">
          {/* <!-- Additional required wrapper --> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
            }}
          >
            {DestinationData.map((destination, key) => (
              <SwiperSlide key={destination?._id}>
                <DestinationItem destination={destination} key={key} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  );
};
export default Destination;

