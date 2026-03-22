"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const KoreaDestination = () => {
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
                    Study in South Korea
                </h2>
                <p className="mx-auto mb-8 text-base font-medium text-waterloo dark:text-manatee md:w-4/5 lg:w-full xl:w-[80%] leading-relaxed">
                    South Korea is emerging as a strong study destination with competitive universities, scholarship opportunities, and vibrant student life in cities like Seoul.
                </p>
            </motion.div>

            <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
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
                        src="/images/destinations/south-korea.png"
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
                        Why study in South Korea?
                    </h2>
                    <p>
                        South Korea is one of the friendliest and safest countries for international students. The official name of South Korea is the Republic of Korea (ROK). There are several prestigious institutions, most of which are located in Seoul, as it is the capital and also a study hub for students. Seoul National University (SNU), KAIST, Yonsei, POSTECH, Korea University, and SKKU are among the top 100 universities in the world. South Korea offers degrees in various popular fields such as Economics, Science, Technology, Management, Engineering, Finance, Fashion, and Social Science, to name a few. It is also ranked highly in intellectual skills and educational accomplishment indexes.                     </p>
                    <div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-primary dark:text-white">Quick Facts</h4>

                        <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                            <li>Boasts one of the highest literacy rates in the world.</li>
                            <li>Affordable education and cost of living for international students.</li>
                            <li>Living expenses are generally cost-effective across major cities.</li>
                            <li>Korean universities and institutions provide generous scholarship opportunities.</li>
                            <li>South Korean government scholarships are available to international students.</li>
                            <li>Studying in South Korea opens up a wide range of employment and career opportunities.</li>
                        </ul>
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
                        <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Cost of Studying in South Korea (USD)</h4>
                        <table className="w-full table-auto text-waterloo dark:text-manatee mb-6">
                            <tbody>
                                <tr>
                                    <td className="py-2">Tuition fee for 1 year</td>
                                    <td className="py-2 text-right">11,500</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Living and Accommodation</td>
                                    <td className="py-2 text-right">9,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Air fare</td>
                                    <td className="py-2 text-right">600</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Visa Fees</td>
                                    <td className="py-2 text-right">90</td>
                                </tr>
                                <tr className="border-t font-semibold">
                                    <td className="pt-2">Total Expenses</td>
                                    <td className="pt-2 text-right">21,000</td>
                                </tr>
                            </tbody>
                        </table>
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
                        <div className="mt-7.5">
                            <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Popular Courses in South Korea</h4>
                            <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee"> 
                                <li>Engineering</li>
                                <li>Computer Engineering</li>
                                <li>Biomedical Engineering</li>
                                <li>Electrical Engineering</li>
                                <li>Telecommunications</li>
                                <li>Information Technology</li>
                                <li>Research and Development</li>
                                <li>Teaching</li>
                                <li>Business</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default KoreaDestination;
