import Image from "next/image";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  doubleImageVariant,
  singleImageVariant,
} from "constants/animations/variants.constant";
import { useState } from "react";

const ImagesProject = ({ images, imageCount }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      {imageCount === 1 ? (
        <div className="relative h-full md:overflow-hidden bottom-[151px] sm:bottom-0">
          {/* * Image container */}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={singleImageVariant}
            transition={{ duration: 1 }}
            className="absolute sm:right-[-50px] h-full top-[50px]"
          >
            <Image
              src={images[0].imageUrl}
              width="650px"
              height="720px"
              alt="image"
              className="rounded-lg shadow-lg"
              placeholder="blur"
              blurDataURL={images[0].blurImageUrl}
            />
          </motion.div>
        </div>
      ) : (
        <div className="relative h-full sm:overflow-hidden ">
          {/* * Image one on top*/}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={doubleImageVariant.topImage}
            transition={{ duration: 1.5 }}
            className="absolute sm:left-0 left-[65px] z-10 shadow-lg  sm:top-60 top-[-105px] mr-[10px] sm:mr-0"
          >
            <Image
              src={images[0].imageUrl}
              width="520px"
              height="1100px"
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
            className="absolute sm:right-[10px] right-[80px] shadow-lg  sm:top-[-210px] top-[50px] z-10 sm:z-0 ml-[10px]  sm:ml-0 "
          >
            <Image
              src={images[1].imageUrl}
              width="520px"
              height="1100px"
              alt="image"
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={images[1].blurImageUrl}
            />
          </motion.div>
        </div>
      )}
    </ReactVisibilitySensor>
  );
};

export default ImagesProject;
