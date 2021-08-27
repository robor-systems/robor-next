import { ChevronDownIcon } from "@heroicons/react/outline";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ReactVisibilitySensor from "react-visibility-sensor";

const HeroHome = () => {
  return (
    <ReactVisibilitySensor partialVisibility offset={{ top: 400 }}>
      {({ isVisible }) => (
        <motion.div
          className="
      h-screen 
      flex
      flex-col
      items-center
      justify-center
      gap-6
      relative
    "
          initial="invisible"
          animate={isVisible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="font-semibold text-7xl">Welcome to Robor</h1>
          <h4 className="font-normal text-3xl max-w-2xl text-center">
            We specialise at developing web applications that help you build and
            scale your business.
          </h4>
          <motion.button
            className="btn-primary btn-large mt-4  "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Request Appointment
          </motion.button>

          <div
            className="
        absolute 
        bottom-5 
"
          >
            <Link to="features-home" smooth offset={50}>
              <ChevronDownIcon
                className="
          text-center
      h-10 
      w-10 
    text-gray-500 
      animate-pulse  
      hover:animate-none 
      transform-gpu 
      cursor-pointer
      transition-all
      hover:scale-125
      "
              />
            </Link>
          </div>
        </motion.div>
      )}
    </ReactVisibilitySensor>
  );
};

export default HeroHome;
