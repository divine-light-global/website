"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const NewZealandDestination = () => {
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
                    Study in New Zealand
                </h2>
                <p className="mx-auto mb-8 text-base font-medium text-waterloo dark:text-manatee md:w-4/5 lg:w-full xl:w-[80%] leading-relaxed">
                    New Zealand combines high-quality education with a safe and welcoming environment. It offers student-friendly policies and attractive post-study work options for international students.
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
                        src="/images/destinations/newzealand.png"
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
                        Why Study in New Zealand?
                        {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                        to Canada
                        </span> */}
                    </h2>
                    <p>
                        Study in a high-quality education system closely monitored and regulated by the NZ government. Experience practical teaching style and hands-on learning to inculcate real-world skills that will open doors of global opportunities. Gain impeccable English language abilities to be effective in multicultural and challenging work environments. Stay ahead in the competition with NZ qualifications that are highly sought after in the international job market.                     
                    </p>
                    <div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-primary dark:text-white">Quick Facts</h4>

                        <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                            <li>New Zealand universities are ranked in the top 3% in the world</li>
                            <li>Only country in the world to have all its universities in the global top 500</li>
                            <li>Over 20,000 international students from 160 countries</li>
                            <li>8 state-funded universities, 16 Institutes of Technology and Polytechnics (ITPs) &amp; 550 Private Training Establishments (PTEs)</li>
                            <li>Post-study work visa up to three years and good permanent residency prospects</li>
                            <li>Ranked as the top English-speaking country at preparing students for the future (The Economist Intelligence Unit, 2019)</li>
                            <li>A member of the Lisbon Qualification Recognition Convention – NZ qualifications are recognised in over 50 countries</li>
                            <li>Lower tuition fees with plenty of scholarships on offer</li>
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
                        <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Cost of Studying in New Zealand</h4>
                        <table className="w-full table-auto text-waterloo dark:text-manatee mb-6">
                            <thead>
                                <tr>
                                    <th className="border-b pb-2 text-left font-medium">Types of Expenses</th>
                                    <th className="border-b pb-2 text-left font-medium">Annual Expenses (NZD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">Tuition Fees for one-year (Indicative)</td>
                                    <td className="py-2">25,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Living and Accommodation</td>
                                    <td className="py-2">20,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Airfare to New Zealand (Indicative)</td>
                                    <td className="py-2">2,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Visa Fees</td>
                                    <td className="py-2">430</td>
                                </tr>
                                <tr className="border-t font-semibold">
                                    <td className="pt-2">Total Expenses</td>
                                    <td className="pt-2">47,430</td>
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
                            <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Popular Courses in New Zealand</h4>
                            <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee"> 
                                <li>Agriculture & Forestry</li>
                                <li>Business & Finance</li>
                                <li>Engineering & Construction</li>
                                <li>Healthcare</li>
                                <li>Information Technology</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewZealandDestination;
