import { ImageNext } from "components/Elements";
import { translateVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";

const ItemProcess = ({ visible, order, delay, ...props }) => {
  return (
    <motion.div
      variants={translateVariants}
      className={`flex flex-col gap-6 items-center order-${order}`}
      initial="invisible"
      animate={visible ? "visible" : "invisible"}
      transition={{ duration: 1, delay }}
    >
      <div className="p-4 bg-white rounded-2xl shadow-xl">
        <ImageNext src={props.image} alt={props.title} className="w-20 h-20" />
      </div>
      <h3 className="text-2xl font-light">{props.title}</h3>
    </motion.div>
  );
};

export default ItemProcess;
