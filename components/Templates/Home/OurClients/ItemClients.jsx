import { ImageNext } from "components/Elements";
import { translateVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";

const ItemClients = ({ visible, delay, ...props }) => {
  return (
    <motion.div
      variants={translateVariants}
      className={`flex flex-col gap-6 items-center`}
      initial="invisible"
      animate={visible ? "visible" : "invisible"}
      transition={{ duration: 1, delay }}
    >
      <motion.div className="p-4 rounded-2xl">
        <ImageNext src={props.image} alt={props.title} className="w-20 h-20" />
      </motion.div>
    </motion.div>
  );
};

export default ItemClients;
