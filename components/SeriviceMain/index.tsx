"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceMain = ({ heading, serviceMainImageDark, serviceMainImageLight, ServiceMainDescription }) => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      {/* <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-linear-to-t from-[#ebfdfd] to-[#ebfdfd] py-22.5 dark:bg-blacksection dark:bg-linear-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={335}
            height={384}
            src={serviceMainImageDark}
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

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
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              {heading}
            </h2>
            <p className="mx-auto lg:w-11/12">
              {ServiceMainDescription}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
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
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
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
          </div>
        </div>
      </section> */}
      {/* <!-- ===== Funfact End ===== --> */}
            <section className="overflow-hidden">
              <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">                         
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
                  className="animate_top mx-auto text-center"
                >
                  {/* <div className="mb-4 inline-block rounded-full bg-tertiary px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
                    <span className="text-sectiontitle font-medium text-black dark:text-white">
                      Services
                    </span>
                  </div> */}
                  <h2 className="mx-auto mb-4 text-3xl font-bold text-primary dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                    {heading}
                  </h2>
                  <div className="mx-auto mb-8 text-base font-medium text-waterloo dark:text-manatee md:w-4/5 lg:w-full xl:w-[80%] leading-relaxed">
                    {ServiceMainDescription}
                  </div>
                </motion.div>
      
                      {/* <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                      <div className="flex items-center gap-8 lg:gap-32.5">
                          <motion.div
                          variants={{
                              hidden: {
                              opacity: 0,
                              x: -20,
                              },
      
                              visible: {
                              opacity: 1,
                              x: 0,
                              },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
                          >
                          <Image
                              src="/images/about/about-light-01.png"
                              alt="About"
                              className="dark:hidden"
                              fill
                          />
                          <Image
                              src="/images/about/about-dark-01.png"
                              alt="About"
                              className="hidden dark:block"
                              fill
                          />
                          </motion.div>
                          <motion.div
                          variants={{
                              hidden: {
                              opacity: 0,
                              x: 20,
                              },
      
                              visible: {
                              opacity: 1,
                              x: 0,
                              },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="animate_right md:w-1/2"
                          >
                          <span className="font-medium uppercase text-black dark:text-white">
                              <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                              New
                              </span>{" "}
                              SaaS Boilerplate for Next.js
                          </span>
                          <h2 className="relative mb-6 text-3xl font-bold text-primary dark:text-white xl:text-hero">
                              A Complete Solution for
                              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                              SaaS Startup
                              </span>
                          </h2>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                              ultricies lacus non fermentum ultrices. Fusce consectetur le.
                          </p>
      
                          <div className="mt-7.5 flex items-center gap-5">
                              <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                              <p className="text-metatitle2 font-semibold text-black dark:text-white">
                                  01
                              </p>
                              </div>
                              <div className="w-3/4">
                              <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                                  React 18, Next.js 13 and TypeScript
                              </h3>
                              <p>Ut ultricies lacus non fermentum ultrices.</p>
                              </div>
                          </div>
                          <div className="mt-7.5 flex items-center gap-5">
                              <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                              <p className="text-metatitle2 font-semibold text-black dark:text-white">
                                  02
                              </p>
                              </div>
                              <div className="w-3/4">
                              <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                                  Fully Customizable
                              </h3>
                              <p>consectetur adipiscing elit fermentum ultricies.</p>
                              </div>
                          </div>
                          </motion.div>
                      </div>
                      </div>
                      <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
                          <motion.div
                              variants={{
                                  hidden: {
                                      opacity: 0,
                                      x: -20,
                                  },
                                  visible: {
                                      opacity: 1,
                                      x: 0,
                                  },
                              }}
                              initial="hidden"
                              whileInView="visible"
                              transition={{ duration: 0.5, delay: 0.1 }}
                              viewport={{ once: true }}
                              className="animate_left rounded-lg bg-alabaster p-7.5 shadow-solid-3 dark:bg-blacksection dark:shadow-solid-4 border border-stroke dark:border-strokedark transition-all"
                          >
                              <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Why Do Nepali Students Choose the USA?</h4>
                              <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                                  <li>World-class universities (MIT, Stanford, Harvard and many more)</li>
                                  <li>Flexible programs: majors, minors, electives and double majors</li>
                                  <li>Shorter Master's programs (often 1–2 years)</li>
                                  <li>Work opportunities: CPT, OPT (12 months) and STEM OPT (+24 months)</li>
                                  <li>Diverse multicultural experience with students from 200+ countries</li>
                                  <li>Scholarships & financial aid: merit-based awards and assistantships</li>
                              </ul>
      
                              <div className="mt-7.5">
                                  <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">U.S. Education System</h4>
                                  <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                                      <li>Associate Degree — 2 years (community colleges)</li>
                                      <li>Bachelor's Degree — 4 years</li>
                                      <li>Master's Degree — 1–2 years (coursework or research)</li>
                                      <li>Doctoral Degree — 4–7 years (often funded)</li>
                                  </ul>
                              </div>
                          </motion.div>
      
                          <motion.div
                              variants={{
                                  hidden: {
                                      opacity: 0,
                                      x: 20,
                                  },
                                  visible: {
                                      opacity: 1,
                                      x: 0,
                                  },
                              }}
                              initial="hidden"
                              whileInView="visible"
                              transition={{ duration: 0.5, delay: 0.1 }}
                              viewport={{ once: true }}
                              className="animate_right rounded-lg bg-alabaster p-7.5 shadow-solid-3 dark:bg-blacksection dark:shadow-solid-4 border border-stroke dark:border-strokedark transition-all"
                          >
                              <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Intakes & Timeline</h4>
                              <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                                  <li>Fall (Aug/Sep) — main intake with most programs and scholarships</li>
                                  <li>Spring (Jan) — additional intake at many universities</li>
                                  <li>Summer (May/June) — limited programs</li>
                              </ul>
      
                              <div className="mt-7.5">
                                  <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Application Steps</h4>
                                  <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                                      <li>12 months before — prepare IELTS/TOEFL; SAT/GRE/GMAT if required</li>
                                      <li>9 months before — apply to universities</li>
                                      <li>6 months before — receive I-20, pay SEVIS fee, plan finances</li>
                                      <li>3–4 months before — apply for F-1 visa at U.S. Embassy</li>
                                  </ul>
                              </div>
                          </motion.div>
                      </div>
      
                      <motion.div
                          variants={{
                              hidden: {
                                  opacity: 0,
                                  y: 20,
                              },
                              visible: {
                                  opacity: 1,
                                  y: 0,
                              },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="animate_bottom mt-7.5 rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection dark:shadow-solid-4"
                      >
                          <div className="flex flex-wrap gap-7.5">
                              <div className="flex-1">
                                  <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Required Documents</h4>
                                  <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                                      <li>Valid passport (6+ months validity)</li>
                                      <li>Academic transcripts & certificates</li>
                                      <li>English test scores (IELTS/TOEFL/PTE)</li>
                                      <li>Statement of Purpose (SOP)</li>
                                      <li>Letters of Recommendation (LORs)</li>
                                      <li>Financial documents & visa forms</li>
                                  </ul>
                              </div>
      
                              <div className="flex-1">
                                  <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Annual Costs</h4>
                                  <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                                      <li>Community College: $6,000 – $18,000</li>
                                      <li>Public University: $10,000 – $25,000</li>
                                      <li>Private University: $18,000 – $60,000+</li>
                                      <li>Master's Programs: $20,000 – $50,000</li>
                                  </ul>
                                  <p className="mt-4 text-waterloo dark:text-manatee">Living expenses: $10,000–$22,000/year</p>
                              </div>
                          </div>
                        </motion.div>
                                              <motion.div
                          variants={{
                              hidden: {
                                  opacity: 0,
                                  y: 20,
                              },
                              visible: {
                                  opacity: 1,
                                  y: 0,
                              },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="animate_bottom mt-7.5 rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection dark:shadow-solid-4"
                      >
                          <div className="flex flex-wrap gap-7.5">
                              <div className="flex-1">
                              <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Work Rights & Programs</h4>
                                <div className="flex-1">
                                    <ul className="list-disc pl-5 space-y-2 text-primary dark:text-white">
                                        <li>On-campus: 20 hrs/week during study</li>
                                        <li>CPT: curriculum practical training</li>
                                        <li>OPT: 12 months post-graduation</li>
                                        <li>STEM OPT: +24 months extension</li>
                                    </ul>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Popular fields:</h4>
                                  <ul className="list-disc pl-5 space-y-2 text-primary dark:text-white">
                                      <li>Computer Science & Data Science</li>
                                      <li>Business & Finance</li>
                                      <li>Engineering disciplines</li>
                                      <li>Public Health & Healthcare</li>
                                  </ul>
                              </div>
                          </div>
                      </motion.div>
      
                      <div className="mt-7.5">
                          <motion.div
                              variants={{
                                  hidden: {
                                      opacity: 0,
                                      y: 20,
                                  },
                                  visible: {
                                      opacity: 1,
                                      y: 0,
                                  },
                              }}
                              initial="hidden"
                              whileInView="visible"
                              transition={{ duration: 0.5, delay: 0.1 }}
                              viewport={{ once: true }}
                              className="animate_bottom rounded-lg bg-alabaster p-7.5 shadow-solid-3 dark:bg-blacksection dark:shadow-solid-4 border border-stroke dark:border-strokedark transition-all"
                          >
                              <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Frequently Asked Questions</h4>
                              <div className="space-y-4">
                                  <div>
                                      <p className="font-semibold text-primary dark:text-white">Q: How much does it cost to study in the USA from Nepal?</p>
                                      <p className="mt-1 text-waterloo dark:text-manatee">A: Typical total costs are NPR 20–50 lakh per year (tuition + living); elite universities cost more.</p>
                                  </div>
                                  <div>
                                      <p className="font-semibold text-primary dark:text-white">Q: Can I work while studying?</p>
                                      <p className="mt-1 text-waterloo dark:text-manatee">A: Yes — on-campus up to 20 hrs/week; CPT/OPT allow additional opportunities.</p>
                                  </div>
                                  <div>
                                      <p className="font-semibold text-primary dark:text-white">Q: Is IELTS/TOEFL mandatory?</p>
                                      <p className="mt-1 text-waterloo dark:text-manatee">A: Usually yes, unless the university grants a waiver.</p>
                                  </div>
                              </div>
                          </motion.div>
                      </div> */}
      
                      {/* <div className="mt-4 text-center">
                          <p className="text-sm text-manatee dark:text-manatee/60">
                              Reviewed by: Destination Team — Last updated: October 2025
                          </p>
                      </div> */}
                  </div>
              </section>
    </>
  );
};

export default ServiceMain;
