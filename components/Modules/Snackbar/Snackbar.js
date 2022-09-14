import { existanceVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import DialogSnackbar from "./DialogSnackbar";
import { FiMenu } from "react-icons/fi";
import { ProgressCircle } from "@/components/Elements";

const Snackbar = ({ scrollProgress }) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(!opened);

  if (scrollProgress > 2)
    return (
      <motion.div className={"fixed z-30 bottom-10 right-5 md:right-10"} layout>
        {opened ? (
          <DialogSnackbar handleOpen={handleOpen} />
        ) : (
          <motion.div
            initial="invisible"
            animate="visible"
            variants={existanceVariants}
            transition={{ duration: 0.5 }}
            exit="invisible"
            whileHover={{
              scale: 1.1,
            }}
            onClick={handleOpen}
            whileTap={{ scale: 0.9 }}
            className="relative bg-white rounded-full shadow-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-bgSecondary/80 dark:bg-dark-bgSecondary"
          >
            <div className="absolute flex items-center justify-center w-full h-full">
              <FiMenu className="text-2xl" />
            </div>

            <ProgressCircle radius={30} stroke={4} progress={scrollProgress} />
          </motion.div>
        )}
      </motion.div>
    );

  return null;
};

export default Snackbar;
