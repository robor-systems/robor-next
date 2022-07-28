import Image from "next/image";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  doubleImageVariant,
  singleImageVariant,
} from "constants/animations/variants.constant";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";
import { useIsomorphicLayoutEffect } from "utils/hooks";

gsap.registerPlugin(ScrollTrigger);

const ImagesProject = ({ images, imageCount, slug , width , height ,width_2 , height_2 ,slider}) => {

  const [visible, setVisible] = useState(false);

  // * for double images
  useIsomorphicLayoutEffect(() => {
    if (!slug) return;

    // * animating the double-image-slug class with scrollTrigger
    const doubleImage = document.querySelectorAll(`.double-image-${slug}`);
    if (!doubleImage) return;

    const [front, back] = Array.from(doubleImage);
    if (!front || !back) return;

    const tl = gsap.timeline();

    if (visible) {
      tl.from(front, {
        top: "240px",
      });
      tl.to(front, {
        scrollTrigger: {
          trigger: front,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        duration: 10,
        y: "-240px",
      });

      tl.from(back, {
        top: "-210px",
      });
      tl.to(back, {
        scrollTrigger: {
          trigger: front,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        duration: 10,
        y: "120px",
      });
    }

    return () => {
      tl.kill();
    };
  }, [slug, visible]);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 100 }}
    >
      {imageCount === 1 ? (
        <div className="relative h-full md:overflow-hidden  md:bottom-0">
          {/* * Image container */}
          <motion.div
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={singleImageVariant}
            transition={{ duration: 1 }}
            className="absolute md:right-[-50px] h-full sm:mt-[20px] md:top-[110px]"
          >
            <Image
              src={images[0].imageUrl}
              width= {width}
              height= {height}
              alt="image"
              className={clsx("rounded-lg shadow-lg", `single-image-${slug} `)}
              placeholder="blur"
              blurDataURL={images[0].blurImageUrl}

            />
          </motion.div>
        </div>
      ) : (
        <div className="relative h-full sm:overflow-hidden">
          {/* * Image one on top*/}
          <motion.div
            
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={doubleImageVariant.topImage}
            transition={{ duration: 1.5 }}
            className={clsx(
              "absolute md:left-0 right-[65px] z-10 overflow-hidden shadow-lg  lg:top-[400px] md:top-[240px] sm:top-[250px] top-[20px] ml-[20px]  md:ml-0",
              `double-image-${slug}`,
              slider ? 'lg:top-[250px]': "lg:top-[400px]"
            )}
          
          >
            <Image
              src={images[0].imageUrl}
              width={width}
              height={height}
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
              "absolute lg:left-[300px] left-[80px] z-0 shadow-lg   top-[-150px]  mr-[10px] md:mr-0  ",
              `double-image-${slug}`,
              slider ? 'lg:top-[0px]': "lg:top-[140px] sm:top-[100px]"
            )}
          >
            <Image
              src={images[1].imageUrl}
              width={width_2}
              height={height_2}
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
