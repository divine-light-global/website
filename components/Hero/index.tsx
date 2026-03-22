"use client";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "../Testimonial/SingleTestimonial";
import { testimonialData } from "../Testimonial/testimonialData";
import BlogData from "../Blog/blogData";
import MainBannerData from "../Blog/MainBannerData";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section
        className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 py-22.5 dark:bg-blacksection dark:stroke-strokedark"
        style={{
          background: [
            "radial-gradient(ellipse at center, transparent 30%, white 85%)",
            "linear-gradient(to bottom, white 0%, rgba(255,250,235,0.35) 30%, rgba(255,248,220,0.35) 70%, white 100%)",
            "url('/images/hero/hero-bg.png') center/cover no-repeat",
          ].join(", "),
        }}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-6 xl:gap-12">
            <div className="mb-8 block w-full md:w-2/5">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🌍 Welcome to Divine Light Global Education Pathways
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-primary dark:text-white xl:text-hero ">
                At Divine Light Global Education Pathways, {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                </span>
              </h1>
              <p>
                we believe every student deserves a clear direction, trusted support, and global opportunities to build a successful future.
                We are committed to guiding students step-by-step — from choosing the right course and country to visa success and beyond.
              </p>

              {/* <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div> */}
            </div>

            <div className="animate_right hidden md:w-3/5 md:block">
              <div className="relative 2xl:-mr-7.5">
                <Slides />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 md:hidden">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="mb-8 block w-full">
              <div className="animate_right block">
                <div className="relative 2xl:-mr-7.5">
                  <Slides />

                  {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Slides = () => {
  return (
    <>
      <Swiper
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
        {MainBannerData.map((banner) => (
          <SwiperSlide key={banner?._id}>
            {/* <SingleTestimonial review={blogData.mainImage} /> */}
            <div className="shadow-solid-9 dark:border-strokedark dark:bg-blacksection rounded-lg bg-white p-9 pt-7.5 dark:border dark:shadow-none">
              <div className="border-stroke dark:border-strokedark mb-7.5 flex justify-between border-b pb-6">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-2 top-5"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-22 right-12 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute right-8 bottom-20 z-1"
                />
                <div className="relative w-full">
                  <Image
                    width={900}
                    height={580}
                    className="w-full h-[550px] object-cover rounded-md"
                    src={banner.mainImage}
                    alt={banner.title}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
            {/* <Image src={blogData.mainImage} 
                    alt={blogData.title}
                    className="dark:hidden"
                    fill
                  /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Hero;
