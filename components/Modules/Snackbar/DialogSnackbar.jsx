import {
  existanceVariants,
  scaleVariants,
} from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const { Link } = require("@/components/Elements");

const DialogSnackbar = ({ handleOpen }) => {
  return (
    <motion.div
      initial="invisible"
      animate="visible"
      variants={existanceVariants}
      transition={{ duration: 0.5 }}
      exit="invisible"
      className="relative flex flex-col gap-2 p-6 w-44 bg-white bg-opacity-70 border-double border-white rounded-2xl shadow-2xl backdrop-blur-lg backdrop-filter"
    >
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        onClick={handleOpen}
        whileTap={{ scale: 0.9 }}
        className="absolute z-40 right-0 top-0 m-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
      >
        <FiX />
      </motion.button>
      <Link href="/">
        <motion.div
          className="menu-link"
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
        >
          Home
        </motion.div>
      </Link>
      <Link href="/?section=projects">
        <motion.div
          className="menu-link"
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
        >
          Projects
        </motion.div>
      </Link>
      <Link href="/?section=team">
        <motion.div
          className="menu-link"
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
        >
          Team
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default DialogSnackbar;
