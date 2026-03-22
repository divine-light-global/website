import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, desc3, desc4, desc5, desc6, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="w-full">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
              {title}
            </h2>
            <p className="mb-5">{desc1}</p>
            <p className="mb-2 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">{desc2}</p>
            <p className="mb-2 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">{desc3}</p>
            <p className="mb-2 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">{desc4}</p>
            <p className="mb-2 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">{desc5}</p>
            <p className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">{desc6}</p>
          </div>
        </div>
        {/* <div className="relative mx-auto hidden aspect-562/366 max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div> */}
      </div>
    </>
  );
};

export default FeaturesTabItem;
