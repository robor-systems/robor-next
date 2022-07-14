import { motion } from "framer-motion";

import { ImageNext } from "components/Elements";
import { translateVariants } from "constants/animations/variants.constant";
import { useTheme } from "next-themes";

const ItemProcess = ({ visible, delay, ...props }) => {
  const { theme } = useTheme();
  return (
    <motion.div
      variants={translateVariants}
      className={`flex flex-col gap-6 items-center`}
      initial="invisible"
      animate={visible ? "visible" : "invisible"}
      transition={{ duration: 1, delay }}
    >
      <motion.div
        initial={{
          boxShadow:
            "6px 2px 16px 0px rgba(136, 165, 191, 0.3),   -6px -2px 16px 0px rgba(255, 255, 255, 1)",
        }}
        whileHover={{
          boxShadow:
            "3px 3px 6px 0px #ccdbe8 inset, -3px -3px 6px 1px rgba(255, 255, 255, 0.5) inset",
        }}
        transition={{ duration: 0.3 }}
        className="p-4 bg-white rounded-2xl"
      >
        <ImageNext src={props.image} alt={props.title} className="w-20 h-20" />
      </motion.div>
      <h3 className="text-2xl font-light text-light-content dark:text-dark-content">
        {props.title}
      </h3>
    </motion.div>
  );
};

export default ItemProcess;
