import { BsChevronDown } from "react-icons/bs";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import ReactVisibilitySensor from "react-visibility-sensor";

const HeroHome = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ top: 400 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <motion.div
        className="relative flex flex-col gap-6 items-center justify-center h-screen"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl font-semibold">Welcome to Robor</h1>
        <h4 className="max-w-2xl text-center text-3xl font-normal">
          We specialise at developing web applications that help you build and
          scale your business.
        </h4>
        <motion.button
          className="btn-primary btn-large mt-4"
          whileHover={{
            scale: 1.1,
            boxShadow: `0 20px 60px -20px var(--color-primary-dark)`,
          }}
          whileTap={{ scale: 0.9 }}
        >
          Request Appointment
        </motion.button>

        <div className="absolute bottom-5">
          <Link to="features-home" smooth offset={-50}>
            <BsChevronDown className="text-center text-gray-500 text-4xl cursor-pointer transform-gpu hover:scale-125 hover:animate-none animate-pulse transition-all" />
          </Link>
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default HeroHome;
