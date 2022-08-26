import { motion } from "framer-motion";

const IconFooter = ({ children, link }) => {
  return (
    <motion.div
      className="p-2 text-2xl rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 "
      whileTap={{ scale: 0.9 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </motion.div>
  );
};

export default IconFooter;
