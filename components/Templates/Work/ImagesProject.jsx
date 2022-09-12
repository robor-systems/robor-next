import Image from "next/image";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  doubleImageVariant,
  singleImageVariant,
} from "constants/animations/variants.constant";
import { useState } from "react";
import clsx from "clsx";

const ImagesProject = ({ images, imageCount, slug, slider }) => {
  let genesis = images[0].genesis;
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 100 }}
    >
      {imageCount === 1 ? (
        <div
          className={clsx(
            slider
              ? "relative h-full md:overflow-hidden  "
              : "relative h-full md:overflow-hidden  mt-5 md:mt-0"
          )}
        >
          {/* * Image container */}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={singleImageVariant}
            transition={{ duration: 1 }}
            className={clsx(slider && "h-full w-full md:flex md:items-center")}
          >
            <div
              className={clsx(
                slider
                  ? "h-[230px]  sm:h-[250px] w-full  md:h-[250px] xl:h-[300px] 2xl:h-[100%] relative max-w-3xl ml-auto"
                  : "h-[40vh] 3xl:h-[50vh]  md:h-[56vh] relative w-full"
              )}
            >
              <Image
                src={images[0].imageUrl}
                layout="fill"
                alt="image"
                className={clsx(
                  "rounded-lg shadow-lg",
                  "md:object-fill object-contain"
                )}
                placeholder="blur"
                blurDataURL={images[0].blurImageUrl}
              />
            </div>
          </motion.div>
        </div>
      ) : (
        <div
          className={clsx(
            slider
              ? "relative h-full overflow-hidden md:overflow-visible"
              : "relative h-[100vh] mt-5 md:mt-[6.7rem]  overflow-hidden"
          )}
        >
          {/* * Image one on top*/}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={doubleImageVariant.topImage}
            transition={{ duration: 1.5 }}
            className={clsx(
              "absolute md:left-0 right-[65px] z-10 overflow-hidden shadow-lg   ",
              genesis ? "lg:right-[10px]" : "lg:right-[120px]",
              slider
                ? " top-0 sm:top-[8%] md:top-[25%] md:right-[56px]  sm:right-[150px] "
                : "top-0 sm:top-[0%] md:top-[25%]"
            )}
          >
            <Image
              src={images[0].imageUrl}
              width={images[0].width}
              height={images[0].height}
              alt="image"
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={images[0].blurImageUrl}
            />
          </motion.div>
          {/* * Image two on bottom */}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={doubleImageVariant.bottomImage}
            transition={{ duration: 1.5 }}
            className={clsx(
              "absolute left-[80px] z-0 shadow-lg   ",
              slider
                ? "top-[-15%] sm:top-[-20%] md:top-[-12%] lg:top-[-10%] xl:top-[-10%] xl:left-[121px] lg:left-[94px] lg:rounded-r-lg overflow-hidden"
                : "top-[-15%] sm:top-[-20%] md:top-[-12%] lg:top-[-10%] xl:top-[-10%]"
            )}
          >
            <div className={!slider ? " relative top-0" : " relative top-0"}>
              <Image
                src={images[1].imageUrl}
                width={images[1].width}
                height={images[1].height}
                // layout="fill"
                alt="image"
                className="rounded-lg "
                placeholder="blur"
                objectFit="cover"
                blurDataURL={images[1].blurImageUrl}
              />
            </div>
          </motion.div>
        </div>
      )}
    </ReactVisibilitySensor>
  );
};

export default ImagesProject;
