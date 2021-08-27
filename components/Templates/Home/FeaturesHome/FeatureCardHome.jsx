import { ImageNext } from "components/Elements";
import { motion } from "framer-motion";

const FeatureCardHome = ({ image, title, description }) => {
  return (
    <motion.div className="mx-auto max-w-xs min-w-min  min-h-full flex-1 rounded-3xl bg-gray-100 flex flex-col py-12 px-8 items-center text-center gap-7">
      <div className="p-7 bg-white rounded-3xl shadow-xl">
        <ImageNext {...image} className="h-20 w-20" />
      </div>
      <h3 className="text-2xl mt-2 whitespace-nowrap">{title}</h3>

      <div className="text-lg m-0">{description}</div>
    </motion.div>
  );
};

export default FeatureCardHome;
