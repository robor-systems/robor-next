import { ImageNext } from "components/Elements";
import {
  opacityVariants,
  translateVariants,
} from "constants/animations/variants.constant";
import { motion } from "framer-motion";

const ItemClients = ({ visible, delay, ...props }) => {
  return (
    <motion.div
      variants={opacityVariants}
      initial="invisible"
      animate={visible ? "visible" : "invisible"}
      transition={{ duration: 1 }}
    >
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <ImageNext
          {...props}
          className="h-12 transition-all duration-300 w-28 grayscale hover:grayscale-0 sm:w-36 sm:h-16"
        />
      </a>
    </motion.div>
  );
};

export default ItemClients;
