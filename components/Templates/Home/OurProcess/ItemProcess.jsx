import { motion } from "framer-motion";

import { translateVariants } from "constants/animations/variants.constant";

const ItemProcess = ({ visible, delay, ...props }) => {
  return (
    <motion.div
      variants={translateVariants}
      className={`flex flex-col gap-6 items-center`}
      initial="invisible"
      animate={visible ? "visible" : "invisible"}
      transition={{ duration: 1, delay }}
    >
      <motion.div
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center p-4 bg-white rounded-2xl dark:bg-dark-bgPrimary"
      >
        {props.icon}
      </motion.div>
      <h3 className="text-lg  text-light-contentSecondary dark:text-dark-content">
        {props.title}
      </h3>
    </motion.div>
  );
};

export default ItemProcess;
