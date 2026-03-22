'use client';

import React from "react";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import { motion } from "framer-motion";
import Image from "next/image";


const AboutUsPage = () => {
  return (
    <div className="pb-20 pt-20">
      <section className="px-4 py-15 md:px-8 lg:py-22.5 2xl:px-0">
        <div
          style={{
            background: [
              "radial-gradient(ellipse at center, transparent 60%, white 95%)",
              "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(252,244,235,0.7) 30%, rgba(252,244,235,0.7) 70%, rgba(255,255,255,0.3) 100%)",
              "url('/images/about/about-bg.png') center/cover no-repeat",
            ].join(", "),
          }}
          className="relative z-1 mx-auto max-w-c-1390 rounded-lg py-12.5 dark:bg-blacksection dark:stroke-strokedark xl:py-17.5"
        >
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
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-5/6 xl:w-3/4"
          >
            <h2 className="mb-4 text-3xl font-bold text-primary dark:text-white xl:text-sectiontitle3">
              Divine Light Global Education Pathways Pvt. Ltd.
            </h2>
            <div className="mx-auto lg:w-11/12">
              <p>
                Guiding Students Toward Global Opportunities and Brighter
                Futures.
              </p>

              <p>
                Divine Light Global Education Pathways Pvt. Ltd. is a
                dedicated education consultancy committed to helping students
                achieve their dream of studying abroad through reliable
                guidance, transparent processes, and personalized support. We
                believe that international education is not just about
                studying in another country — it is about building
                confidence, gaining global exposure, and creating lifelong
                career opportunities.
              </p>

              <p>
                Our mission is to simplify the complex study abroad journey by
                providing students with accurate information, professional
                counseling, and step-by-step assistance from the initial
                consultation to successful visa approval and beyond. We work
                closely with students to understand their academic
                background, career goals, and financial plans so that every
                decision leads toward long-term success.
              </p>

              <p>
                With expert counselors and a student-focused approach, we
                assist aspiring students in pursuing education opportunities
                in leading destinations such as Australia, the United
                Kingdom, Canada, Japan, and South Korea. Our commitment is
                built on honesty, ethical practices, and continuous support
                throughout the entire process.
              </p>
            </div>
          </motion.div>

          {/* <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                500K
              </h3>
              <p className="text-lg lg:text-para2">World Wide Clients</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-primary dark:text-white xl:text-sectiontitle3">
                1M+
              </h3>
              <p className="text-lg lg:text-para2">Downloads</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                865
              </h3>
              <p className="text-lg lg:text-para2">Winning Award</p>
            </motion.div>
          </div> */}
        </div>
      </section >
      <About />
      <FeaturesTab />
    </div >
  );
};

export default AboutUsPage;
