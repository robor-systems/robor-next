import { motion } from "framer-motion";

const IconButton = ({ children }) => {
  return (
    <motion.div
      className=" rounded-full cursor-pointer z-20  "
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default IconButton;
