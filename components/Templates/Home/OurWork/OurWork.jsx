import { motion } from "framer-motion";
import { useState } from "react";
import { InView } from "react-intersection-observer";

import {
  existanceVariants,
  opacityVariants,
} from "@/constants/animations/variants.constant";
import { SectionHeader } from "@/components/Elements";
import { FiArrowRight } from "react-icons/fi";
import SliderOurWork from "./SliderOurWork";
import Container from "@/components/Modules/Container/Container";
import Link from "next/link";

const OurWork = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <InView
        triggerOnce
        onChange={(inView) => inView && setVisible(inView)}
      >
        <motion.section
          id="clients"
          className="flex flex-col items-center w-full gap-16 pt-52 pb-52  overflow-hidden"
          initial="invisible"
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          {/* * Heading */}
          <SectionHeader
            title="Our Work"
            subtitle="A peek of what we have delivered to our amazing customers."
          />

          {/* * Projects Slider */}
          <SliderOurWork />

          {/* * View all projects button */}
          <motion.div
            variants={existanceVariants}
            initial="invisible"
            animate={visible ? "visible" : "invisible"}
            transition={{ duration: 1 }}
          >
            <Link href="/clients" className="rounded-xl font-semibold flex items-center justify-center px-6 py-4 space-x-2 border-[3px] hover:bg-light-primary hover:dark:bg-dark-primary hover:dark:text-[#fff]  hover:text-[#fff] dark:border-dark-primary border-light-primary text-light-primary dark:text-dark-primary">
              <span className="uppercase">View All Projects</span>
              <FiArrowRight className="text-xl" />
            </Link>
          </motion.div>
        </motion.section>
      </InView>
    </Container>
  );
};

export default OurWork;
