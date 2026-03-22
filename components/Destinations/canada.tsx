"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CanadaDestination = () => {
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
                    Study in Canada
                </h2>
                <p className="mx-auto mb-8 text-base font-medium text-waterloo dark:text-manatee md:w-4/5 lg:w-full xl:w-[80%] leading-relaxed">
                    Canada offers high-quality education, friendly immigration policies, and strong post-graduation work opportunities. It is a popular destination for Nepali students seeking affordable tuition and pathways to permanent residency.
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
                        src="/images/destinations/canada.png"
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
                        Why Study in Canada?
                        {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                        to Canada
                        </span> */}
                    </h2>
                    <p>
                        Study in a country that has tripled its international student population over the past decade, thanks to its globally recognized universities offering a world class education, highly practical programs with hands-on learning and some of the most affordable tuition fees among English-speaking countries. Enjoy top quality life in the ‘most liveable cities’ of Vancouver and Toronto and advance your career in one of the very resource rich, industrialized and stable economies.
                    </p>
        
<div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-primary dark:text-white">Quick Facts</h4>

                        <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                            <li>Among the safest countries globally</li>
                            <li>Hands-on learning</li>
                            <li>Paid internships available</li>
                            <li>Post-study work visa up to 3 years</li>
                            <li>Excellent immigration opportunities</li>
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
                        <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Cost of Studying in Canada</h4>
                        <table className="w-full table-auto text-waterloo dark:text-manatee mb-6">
                            <thead>
                                <tr>
                                    <th className="border-b pb-2 text-left font-medium">Types of Expenses</th>
                                    <th className="border-b pb-2 text-left font-medium">Annual Expenses (CAD) - Diploma</th>
                                    <th className="border-b pb-2 text-left font-medium">Annual Expenses (CAD) - Degree</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">Tuition Fees for one-year (Indicative)*</td>
                                    <td className="py-2">17,000</td>
                                    <td className="py-2">20,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Living and Accommodation</td>
                                    <td className="py-2">22,895</td>
                                    <td className="py-2">22,895</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Airfare from India to Canada</td>
                                    <td className="py-2">2,500</td>
                                    <td className="py-2">2,500</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Visa Fees (Including Biometric Fees)</td>
                                    <td className="py-2">235</td>
                                    <td className="py-2">235</td>
                                </tr>
                                <tr className="border-t font-semibold">
                                    <td className="pt-2">Total Expenses</td>
                                    <td className="pt-2">40,370</td>
                                    <td className="pt-2">43,370</td>
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
                            <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Popular Courses in Canada</h4>
                            <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee"> 
                               <li>Applied Sciences</li>
                                <li>Business & Management</li>
                                <li>Computer Science & Information Technology</li>
                                <li>Construction and Engineering</li>
                                <li>Media and Journalism</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CanadaDestination;
