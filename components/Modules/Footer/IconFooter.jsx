import { motion } from "framer-motion";

const IconFooter = ({ children, link }) => {
  return (
    <motion.div
      className="text-2xl hover:bg-gray-100 p-2 rounded-full cursor-pointer"
      whileTap={{ scale: 0.9 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </motion.div>
  );
};

export default IconFooter;
