const { AnimatePresence, motion } = require("framer-motion");
import { AiOutlineClose } from "react-icons/ai";
import { BiError } from "react-icons/bi";
const notificationVariants = {
  initial: {
    // opacity: 0,
    y: -500,
    transition: { duration: 0.5 },
  },
  animate: {
    // opacity: 1,
    y: 20,
    transition: { duration: 0.5 },
  },
  exit: {
    // opacity: 0,
    y: -500,
    transition: { ease: "easeOut", duration: 2 },
  },
  hover: { scale: 1.05, transition: { duration: 0.1 } },
};

const ErrorToast = ({ error, onClose }) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          variants={notificationVariants} // Defined animation states
          whileHover="hover" // Animation on hover gesture
          initial="initial" // Starting animation
          animate="animate" // Values to animate to
          exit="exit" // Ta
          className="bg-red-600 text-white fixed top-0 z-50 max-w-[600px] w-full flex items-center justify-between py-4 px-3 rounded-lg shadow-2xl"
        >
          <div className="flex items-center">
            <BiError className="text-xl mr-3" />
            <p> {error}</p>
          </div>

          <AiOutlineClose
            className="text-white text-xl  cursor-pointer"
            onClick={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorToast;
