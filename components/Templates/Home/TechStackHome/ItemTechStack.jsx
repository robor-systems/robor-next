import { ImageNext } from "components/Elements";
import { translateVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";

const ItemTechStack = ({ visible, ...props }) => {
  return (
    <motion.div
      className="flex justify-center flex-1"
      variants={translateVariants}
      initial="invisible"
      animate={visible ? "visible" : "invisible"}
      transition={{ duration: 1 }}
    >
      {props.icon ? (
        <div className="flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20">
          {props.icon}
        </div>
      ) : (
        <ImageNext {...props} className="w-12 h-12 sm:w-20 sm:h-20" />
      )}
    </motion.div>
  );
};

export default ItemTechStack;
