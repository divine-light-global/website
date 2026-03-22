"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const USADestination = () => {
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
                    Study in the United States
                </h2>
                <p className="mx-auto mb-8 text-base font-medium text-waterloo dark:text-manatee md:w-4/5 lg:w-full xl:w-[80%] leading-relaxed">
                    The United States is home to many world-leading universities, a
                    diverse academic ecosystem and extensive research opportunities.
                    Students choose the U.S. for flexible degree structures, strong
                    industry connections and post‑study work prospects that can jump‑start careers.
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
                        src="/images/destinations/usa.png"
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
                    {/* <span className="font-medium uppercase text-black dark:text-white">
                        <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                        Overview
                        </span>{" "}
                        Why choose the United States
                    </span> */}
                    <h2 className="relative mb-6 text-3xl font-bold text-primary dark:text-white xl:text-hero">
                        Why Study in USA?
                        {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                        World-class universities & employer links
                        </span> */}
                    </h2>
                    <p>
                        U.S. institutions offer a wide range of undergraduate and
                        graduate programs. Many degrees provide flexibility through
                        majors, minors and elective choices, while strong industry ties
                        support internships and early-career opportunities.
                    </p>
                    <div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-primary dark:text-white">Quick Facts</h4>

                        <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                            <li>USA hosts more than a million international students</li>
                            <li>Over 25% of the world’s top 100 universities are in the USA</li>
                            <li>Post-study stay back visas (OPT) up to 3 years for STEM programs</li>
                            <li>Internships (CPT) up to 12 months while studying</li>
                            <li>Merit-based & need-based scholarships available</li>
                            <li>Over 5,000 accredited universities & institutions to choose from</li>
                            <li>15 of the best student cities in the world (QS Best Student Cities 2025)</li>
                            <li>Opportunities for research, teaching & graduate assistantships</li>
                        </ul>
                    </div>
                    {/* <div className="mt-7.5 flex items-center gap-5">
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
                    </div> */}
                    {/* <div className="mt-7.5 flex items-center gap-5">
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
                    </div> */}
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
                        <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Cost of studying in USA</h4>
                        <table className="w-full border-collapse text-waterloo dark:text-manatee">
                            <thead>
                                <tr>
                                    <th className="border-b pb-2 text-left font-medium">Types of Expenses</th>
                                    <th className="border-b pb-2 text-left font-medium">Annual Expenses (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">Tuition Fees for one-year (Indicative)*</td>
                                    <td className="py-2">25,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Living and Accommodation</td>
                                    <td className="py-2">15,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Airfare from India to USA</td>
                                    <td className="py-2">1,000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Visa Fees (Visa &amp; SEVIS)</td>
                                    <td className="py-2">535</td>
                                </tr>
                                <tr className="border-t font-semibold">
                                    <td className="pt-2">Total Expenses</td>
                                    <td className="pt-2">41,535</td>
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
                            <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Popular Courses in USA</h4>
                            <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee"> 
                                 <li>Allied Health & Social Services</li>
                                <li>Business & Management</li>
                                <li>Computer Science & Information Technology</li>
                                <li>Engineering & Technology</li>
                                <li>Public Health & Healthcare Administration</li>
                                <li>Architecture & Construction Management</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* <motion.div
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
                            <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Required Documents</h4>
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
                            <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Annual Costs (approx.)</h4>
                            <ul className="list-disc pl-5 space-y-2 text-waterloo dark:text-manatee">
                                <li>Community College: USD 6,000 – USD 18,000</li>
                                <li>Public University (undergraduate): USD 15,000 – USD 35,000</li>
                                <li>Private University & specialised programs: USD 25,000 – USD 60,000+</li>
                                <li>Master's Programs: USD 20,000 – USD 50,000+</li>
                            </ul>
                            <p className="mt-4 text-waterloo dark:text-manatee">Living expenses: USD 10,000–USD 22,000/year (varies by city and lifestyle)</p>
                        </div>
                    </div>

                    <div className="mt-7.5">
                        <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Work Rights & Programs</h4>
                        <div className="flex flex-wrap gap-7.5">
                            <div className="flex-1">
                                <ul className="list-disc pl-5 space-y-2 text-black dark:text-white">
                                    <li>On-campus work: typically up to 20 hrs/week during academic terms</li>
                                    <li>CPT (Curricular Practical Training): work authorised as part of a degree programme</li>
                                    <li>OPT (Optional Practical Training): up to 12 months of post-study work; STEM fields may be eligible for extensions</li>
                                    <li>Internships and co-op programs are commonly available and tied to degree requirements</li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-5 text-lg font-semibold text-primary dark:text-white">Popular fields:</h4>
                                <ul className="list-disc pl-5 space-y-2 text-black dark:text-white">
                                    <li>Computer Science & Data Science</li>
                                    <li>Business & Finance</li>
                                    <li>Engineering disciplines</li>
                                    <li>Public Health & Healthcare</li>
                                </ul>
                            </div>
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
                        <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">Frequently Asked Questions</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-primary dark:text-white">Q: How much does it cost to study in the USA from Nepal?</p>
                                <p className="mt-1 text-waterloo dark:text-manatee">A: Costs vary widely by program and city; see the cost ranges above. Many students combine scholarships, part‑time work and savings to fund studies.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-primary dark:text-white">Q: Can I work while studying?</p>
                                <p className="mt-1 text-waterloo dark:text-manatee">A: Yes — F‑1 visas allow limited on-campus work during terms and authorised practical training (CPT/OPT) for work related to study.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-primary dark:text-white">Q: Is English test (IELTS/TOEFL) mandatory?</p>
                                <p className="mt-1 text-waterloo dark:text-manatee">A: Usually required for international applicants; some institutions offer conditional or pathway programs that provide alternatives.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm text-manatee dark:text-manatee/60">
                        Reviewed by: Destination Team — Last updated: February 2026
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default USADestination;