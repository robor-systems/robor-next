import {
  existanceVariants,
  gradientVariants,
} from "constants/animations/variants.constant";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { usePalette } from "react-palette";

const { ImageNext } = require("components/Elements");

const CardTeam = ({ image, name, position }) => {
  const { data } = usePalette(image);
  const [hover, setHover] = useState(false);

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        transition={{ duration: 0.5 }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="border-1 relative w-full h-96 rounded-3xl overflow-hidden sm:h-72"
        whileHover={{
          boxShadow: "0 70px 63px -60px #000000",
        }}
      >
        <ImageNext
          src={image}
          alt={name}
          className="w-full h-full"
          objectFit="cover"
        />
        {hover && (
          <motion.div
            custom={data.darkMuted}
            className="absolute left-0 top-0 w-full h-full"
            variants={gradientVariants}
            initial="invisible"
            transition={{ duration: 0.4 }}
            animate={hover ? "visible" : "invisible"}
          ></motion.div>
        )}
        <motion.div
          layout
          className="absolute top-0 flex flex-col justify-end px-6 py-4 w-full h-full"
        >
          <motion.h3 layout className="text-white text-xl font-semibold">
            {name}
          </motion.h3>

          {hover && (
            <motion.h4
              className="text-white text-lg font-normal"
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
    </AnimateSharedLayout>
  );
};

export default CardTeam;
