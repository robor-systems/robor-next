import { ImageNext } from "components/Elements";
import {
  scaleVariants,
  translateVariants,
} from "constants/animations/variants.constant";
import { motion } from "framer-motion";

const ItemTechStack = ({ visible, ...props }) => {
  return (
    <motion.div
      className="flex flex-1 justify-center"
      variants={translateVariants}
      initial="invisible"
      animate={visible ? "visible" : "invisible"}
      transition={{ duration: 1 }}
    >
      <ImageNext {...props} className="w-20 h-20" />
    </motion.div>
  );
};

export default ItemTechStack;
