import { existanceVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiX } from "react-icons/fi";
import { animateScroll, scroller } from "react-scroll";

const DialogSnackbar = ({ handleOpen }) => {
  const router = useRouter();
  return (
    <motion.div
      initial="invisible"
      animate="visible"
      variants={existanceVariants}
      transition={{ duration: 0.5 }}
      exit="invisible"
      className="relative flex flex-col gap-2 p-6 bg-white border-white border-double shadow-2xl w-44 dark:bg-[#353844] bg-opacity-70 rounded-2xl backdrop-blur-lg backdrop-filter"
    >
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        onClick={handleOpen}
        whileTap={{ scale: 0.9 }}
        className="absolute top-0 right-0 z-40 p-2 m-4 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-dark-bgSecondary"
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
          if (router.pathname === "/work")
            scroller.scrollTo("work", { smooth: true });
          router.push("/work");
          handleOpen();
        }}
      >
        Work
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
      <motion.div
        className="menu-link"
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (router.pathname === "/contact")
            scroller.scrollTo("contact", { smooth: true });
          router.push("/contact");
          handleOpen();
        }}
      >
        Contact
      </motion.div>
    </motion.div>
  );
};

export default DialogSnackbar;
