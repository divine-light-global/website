import React from "react";
import { Service } from "@/types/service";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, description, path } = service;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-secondary p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 bg:primary"
      >
        <Link href={path}>

        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-primary dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        {description}
        </Link>
      </motion.div>
    </>
  );
};

export default SingleService;
