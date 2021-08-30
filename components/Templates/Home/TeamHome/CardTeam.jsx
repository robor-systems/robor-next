import {
  existanceVariants,
  gradientVariants,
  opacityVariants,
} from "constants/animations/variants.constant";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePalette } from "react-palette";
import {
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

const { ImageNext } = require("components/Elements");

const CardTeam = ({ image, name, position }) => {
  const { data } = usePalette(image);
  const [hover, setHover] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  });

  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      onMouseEnter={() => mounted.current && setHover(true)}
      onMouseLeave={() => mounted.current && setHover(false)}
      className="border-1 relative w-full h-96 rounded-3xl overflow-hidden sm:h-72"
      animate={
        hover
          ? {
              boxShadow: `0 60px 65px -60px ${data.darkMuted}`,
            }
          : {}
      }
    >
      <ImageNext
        src={image}
        alt={name}
        className="w-full h-full"
        objectFit="cover"
      />
      {hover && mounted.current && (
        <motion.div
          custom={data.darkMuted}
          className="absolute left-0 top-0 w-full h-full"
          variants={gradientVariants}
          initial="invisible"
          transition={{ duration: 0.4 }}
          animate={hover ? "visible" : "invisible"}
        ></motion.div>
      )}

      {hover && mounted.current && (
        <motion.div
          className="absolute right-0 top-0 flex flex-col gap-4 p-4 text-white text-3xl sm:gap-2 sm:text-xl"
          variants={existanceVariants}
          initial="invisible"
          transition={{ duration: 0.5 }}
          animate={hover ? "visible" : "invisible"}
        >
          <IoLogoGithub />
          <IoLogoTwitter />
          <IoMail />
          <IoLogoLinkedin />
        </motion.div>
      )}

      <motion.div
        layout
        className="absolute top-0 flex flex-col justify-end px-6 py-4 w-full h-full"
      >
        <motion.h3
          layout
          className="text-white text-2xl font-semibold sm:text-xl"
        >
          {name}
        </motion.h3>

        {hover && mounted.current && (
          <motion.h4
            className="text-white text-xl font-normal sm:text-lg"
            variants={existanceVariants}
            initial="invisible"
            transition={{ duration: 0.5 }}
            animate={hover ? "visible" : "invisible"}
          >
            {position}
          </motion.h4>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CardTeam;
