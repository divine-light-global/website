"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const JapanDestination = () => {
    return (
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
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
                <h2 className="mx-auto mb-4 text-3xl font-bold text-primary dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                    Study in Japan
                </h2>
                <p className="mx-auto mb-8 text-base font-medium text-waterloo dark:text-manatee md:w-4/5 lg:w-full xl:w-[80%] leading-relaxed">
                    Japan offers strong technical programs, language school pathways, and unique cultural experiences that appeal to students seeking innovation and discipline.
                </p>
            </motion.div>
<div className="mx-auto max-w-c-1235 px-4 py-6 md:px-8 xl:px-0">
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
                    className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"                    >
                    <Image
                        src="/images/destinations/japan.png"
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
                    <h2 className="relative mb-6 text-3xl text-primary dark:text-white ">
                        Why Study in Japan?
                        {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                        to Canada
                        </span> */}
                    </h2>
                    <p>
                        Japan is renowned for its excellent education system and is one of the top-performing country in reading literacy, math and sciences. Excellent safety, accessibility, and high quality of life standards make Japan a top location for students. Studying abroad in Japan means that the students will further studies in a well-rounded education system, experience a unique new culture, and gain a more international perspective. Japan is a popular study abroad destination and offers many advantages for students. International students in Japan can engage with Japanese culture, cuisine, and language. Japan is widely considered a safe country for students, with efficient public transportation.
                    </p>
        
                    <div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-primary dark:text-white">Quick Facts</h4>

                        <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                            <li>1st City GDP (USD 1.8 Trill.)</li>
                            <li>76% of foreign companies' HQs</li>
                            <li>3rd Global Power City Index 2017</li>
                            <li>4th Global City Ranking 2017</li>
                            <li>Tokyo is among the best student cities (QS 2019)</li>
                            <li>Most extensive, dependable, and affordable transport system in the world</li>
                        </ul>
                    </div>
                    </motion.div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default JapanDestination;
