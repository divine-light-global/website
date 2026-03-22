"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ServiceMain from "../SeriviceMain";
import serviceData from "./serviceData";
import SingleService from "./SingleService";
import SectionHeader from "../Common/SectionHeader";

const Service = ({ heading,serviceImageDark, serviceImageLight, ServiceMainDescription}) => {
  return (
    <>
      {/* <!-- ===== Service  Start ===== --> */}
        <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <ServiceMain heading={heading} serviceMainImageDark="/images/shape/shape-04.png" serviceMainImageLight="/images/shape/shape-05.png" ServiceMainDescription={ServiceMainDescription} />

        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* <motion.div
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
                src={serviceImageLight}
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src={serviceImageDark}
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div> */}
            {/* <motion.div
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
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
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
            </motion.div> */}
          </div>
        </div>
                {/* <!-- Features item Start --> */}
        <div id="features" className="py-5 lg:py-15 xl:py-10">            
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                {/* <!-- Section Title Start --> */}
                <SectionHeader
                    headerInfo={{
                    title: "Other Services",
                    // subtitle: "Our Core services for Your Success",
                    description: ``,
                    }}
                />
                {/* <!-- Section Title End --> */}

                <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">

                {serviceData.map((service, key) => (
                <SingleService service={service} key={key} />
                ))}
                {/* <!-- Features item End --> */}
                </div>
            </div>
        </div>
      </section>
      {/* <!-- ===== Service End ===== --> */}
    </>
  );
};

export default Service;
