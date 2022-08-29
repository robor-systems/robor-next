import { BsChevronDown } from "react-icons/bs";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ReactVisibilitySensor from "react-visibility-sensor";
import Container from "@/components/Modules/Container/Container";
import NextLink from "next/link";
import clsx from "clsx";
import HeroBG from "@/components/Modules/HeroBG/HeroBG";

const HeroHome = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 400 }}
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
      >
        <div className=" mt-[50px]">
          <div className="absolute top-0 right-0 h-screen min-w-full overflow-hidden">
            <HeroBG />
          </div>
          <motion.div
            className="relative flex flex-col items-center justify-center h-screen gap-6"
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            variants={opacityVariants}
            transition={{ duration: 1 }}
          >
            <h1
              className={clsx(
                "font-bold text-center dark:text-dark-content text-shadow text-light-content",
                "text-4xl sm:text-5xl md:text-6xl"
              )}
            >
              Building{" "}
              <span className="text-light-primary dark:text-dark-primary">
                {" "}
                Robust
              </span>{" "}
              Systems
            </h1>
            <h2
              className={clsx(
                "font-normal text-center dark:text-dark-content text-shadow text-light-content",
                "max-w-2xl text-xl sm:text-2xl md:text-2xl"
              )}
            >
              We can help build your next great idea.
              {/* We specialise in developing cloud based applications that help you
              build and scale your business. */}
            </h2>
            <NextLink href="/contact">
              <motion.button
                className="mt-8 !px-[34px]  btn-primary btn-large dark:bg-dark-primary"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                BOOK FREE CONSULTATION
              </motion.button>
            </NextLink>

            <div className="absolute bottom-5">
              <Link to="services" smooth offset={-50} href="#">
                <BsChevronDown className="text-4xl text-center text-gray-500 transition-all cursor-pointer transform-gpu hover:scale-125 hover:animate-none animate-pulse" />
              </Link>
            </div>
          </motion.div>
        </div>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default HeroHome;
