import { ImageNext } from "components/Elements";
import { scaleVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";

const CardFeaturesHome = ({ image, title, description, isVisible, delay }) => {
  return (
    <motion.div
      layout
      className="flex flex-1 flex-col gap-7 items-center mx-auto px-8 py-12 min-w-min max-w-xs min-h-full text-center bg-gray-100 rounded-3xl"
      initial="invisible"
      animate={"visible"}
      variants={scaleVariants}
      transition={{ duration: 1, delay }}
    >
      <div className="p-7 bg-white rounded-3xl shadow-xl">
        <ImageNext {...image} className="w-20 h-20" />
      </div>
      <h3 className="mt-2 whitespace-nowrap text-2xl">{title}</h3>

      <div className="m-0 text-lg">{description}</div>
    </motion.div>
  );
};

export default CardFeaturesHome;
