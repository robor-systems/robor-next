import { ImageNext } from "components/Elements";
import { scaleVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";

const CardFeaturesHome = ({ image, title, description, delay, children }) => {
  return (
    <motion.div
      layout
      className="flex flex-col items-center flex-1 max-w-xs min-h-full px-8 py-12 mx-auto text-center bg-light-bgSecondary dark:bg-dark-bgSecondary gap-7 min-w-min rounded-3xl hover:shadow-2xl"
      initial="invisible"
      animate={"visible"}
      variants={scaleVariants}
      transition={{ duration: 1 }}
    >
      <div className="shadow-xl p-7 bg-light-bgPrimary dark:bg-dark-bgPrimary rounded-3xl">
        {/* <ImageNext {...image} className="w-20 h-20" /> */}
        {children}
      </div>
      <h3 className="mt-2 text-2xl whitespace-nowrap text-light-content dark:text-dark-content">
        {title}
      </h3>

      <div className="m-0 text-lg text-light-content dark:text-dark-content">
        {description}
      </div>
    </motion.div>
  );
};

export default CardFeaturesHome;
