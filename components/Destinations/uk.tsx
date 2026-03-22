"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const UKDestination = () => {
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
                    Study in the United Kingdom
                </h2>
                <p className="mx-auto mb-8 text-base font-medium text-waterloo dark:text-manatee md:w-4/5 lg:w-full xl:w-[80%] leading-relaxed">
                    The UK offers world-renowned universities, shorter master’s programs, and strong academic traditions. It remains a top choice for students seeking research and professional programs.
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
                        src="/images/destinations/uk.png"
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
                        Why Study in UK?
                        {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                        to Canada
                        </span> */}
                    </h2>
                    <p>
                        Learn from some of the world's best academics and experts in some of world’s most prestigious universities and benefit from their exceptional academic support. Study alongside some of the finest and brilliant minds and hone your skills using state-of-the-art technology. Avail placements, internships and volunteering positions that are your right fit through strong industry links of UK universities and apply your knowledge and skills in a real-world professional environment. Graduate with skills and expertise that are in high demand around the world and get hired by your dream employers.                    
                    </p>
                    <div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-primary dark:text-white">Quick Facts</h4>

                        <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                            <li>The UK undertakes 5% of the world’s scientific research and produces 14% of the world’s most frequently cited papers</li>
                            <li>UK welcomes over 400,000 students every year</li>
                            <li>Post-study work visa of 2 years</li>
                            <li>17 of world’s top 100 universities are in the UK (QS World Rankings 2026)</li>
                            <li>15 of the best student cities in the world are in the UK (QS Best Student Cities 2026)</li>
                            <li>UK offers 131 universities of international repute</li>
                            <li>Admission without IELTS possible</li>
                            <li>Masters courses with 1-year work placements are available</li>
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
                        <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Cost of Studying in UK</h4>
                        <table className="w-full table-auto text-waterloo dark:text-manatee mb-6">
                            <thead>
                                <tr>
                                    <th className="border-b pb-2 text-left font-medium">Types of Expenses</th>
                                    <th className="border-b pb-2 text-left font-medium">Annual Expenses in GBP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">Tuition Fees for one-year (Indicative)*</td>
                                    <td className="py-2">15,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Living and Accommodation</td>
                                    <td className="py-2">10,224</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Visa Fees</td>
                                    <td className="py-2">524</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Immigration Health Surcharge/National Health Surcharge</td>
                                    <td className="py-2">1,164</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Airfare from India to United Kingdom</td>
                                    <td className="py-2">500</td>
                                </tr>
                                <tr className="border-t font-semibold">
                                    <td className="pt-2">Total Expenses</td>
                                    <td className="pt-2">27,412</td>
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
                            <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Popular Courses in UK</h4>
                            <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee"> 
                                <li>Art & Design</li>
                                <li>Business & Management</li>
                                <li>Engineering & Information Technology</li>
                                <li>Media & Communication</li>
                                <li>Sciences</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UKDestination;
