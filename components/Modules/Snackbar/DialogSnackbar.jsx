import {
  existanceVariants,
  scaleVariants,
} from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiX } from "react-icons/fi";
import { animateScroll, scroller } from "react-scroll";

const { Link } = require("@/components/Elements");

const DialogSnackbar = ({ handleOpen }) => {
  const router = useRouter();
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

      <motion.div
        className="menu-link "
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (router.pathname == "/")
            animateScroll.scrollToTop({ smooth: true });
          router.push("/");
          handleOpen();
        }}
      >
        Home
      </motion.div>

      <motion.div
        className="menu-link"
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (router.pathname === "/")
            scroller.scrollTo("services", { smooth: true });
          router.push("/#services");
          handleOpen();
        }}
      >
        Services
      </motion.div>

      <motion.div
        className="menu-link"
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (router.pathname === "/")
            scroller.scrollTo("clients", { smooth: true });
          router.push("/#clients");
          handleOpen();
        }}
      >
        Clients
      </motion.div>

      <motion.div
        className="menu-link"
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (router.pathname === "/")
            scroller.scrollTo("team", { smooth: true });
          router.push("/#team");
          handleOpen();
        }}
      >
        Team
      </motion.div>
    </motion.div>
  );
};

export default DialogSnackbar;
