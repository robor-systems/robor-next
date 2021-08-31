import { BsChevronDown } from "react-icons/bs";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import ReactVisibilitySensor from "react-visibility-sensor";
import Container from "@/components/Modules/Container/Container";
import NextLink from "next/link";

const HeroHome = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 400 }}
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
      >
        <>
          <div className="bg-hero absolute right-0 top-0 min-w-full h-screen"></div>
          <motion.div
            className="relative flex flex-col gap-6 items-center justify-center h-screen"
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            transition={{ duration: 1 }}
          >
            <h1 className="text-shadow text-4xl font-semibold sm:text-5xl md:text-7xl">
              Welcome to Robor
            </h1>
            <h4 className="text-shadow max-w-2xl text-center text-xl font-normal sm:text-2xl md:text-3xl">
              We specialise at developing web applications that help you build
              and scale your business.
            </h4>
            <NextLink href="/contact">
              <motion.button
                className="btn-primary btn-large mt-4"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                Request Appointment
              </motion.button>
            </NextLink>

            <div className="absolute bottom-5">
              <Link to="features-home" smooth offset={-50}>
                <BsChevronDown className="text-center text-gray-500 text-4xl cursor-pointer transform-gpu hover:scale-125 hover:animate-none animate-pulse transition-all" />
              </Link>
            </div>
          </motion.div>
        </>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default HeroHome;
