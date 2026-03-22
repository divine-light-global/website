"use client";
import { Destination } from "@/types/destination";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const DestinationItem = ({ destination }: { destination: Destination }) => {
  const { mainImage, title, metadata, link } = destination;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
            height: 400
          },

          visible: {
            opacity: 1,
            y: 0,
            height: 345
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-secondary p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={{ pathname:link}} className="relative block aspect-368/239">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-primary duration-300 hover:text-tertiary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={{pathname: link}}>
              {`${title.slice(0, 80)}`}
            </Link>
          </h3>
          {/* <p className="line-clamp-5">{metadata}</p> */}
        </div>
      </motion.div>
    </>
  );
};

export default DestinationItem;
