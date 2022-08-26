import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

import { opacityVariants } from "constants/animations/variants.constant";
import Container from "@/components/Modules/Container/Container";
import Head from "next/head";
const {
  default: FormFeedback,
} = require("@/components/Templates/Home/Feedback/FormFeedback");

const Contact = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Contact Us | Robor Systems</title>
      </Head>
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 400 }}
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
      >
        <motion.div
          className="flex justify-center pt-20 bg-form dark:bg-form-dark "
          initial="invisible"
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
        >
          <Container>
            <div className="flex flex-col w-full max-w-screen-md gap-12 py-16 mx-auto mb-8 sm:py-20 sm:gap-16 sm:px-4 ">
              <div className="flex flex-col gap-6 sm:gap-8">
                <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
                  Book Free Consultation
                </h1>

                <h2 className="  text-center text-lg">
                  Whether you want to talk about ideas, get a quote for a
                  work-item or just have a cup of joe, we&apos;re here to help.
                </h2>
              </div>
              <FormFeedback />
            </div>
          </Container>
        </motion.div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Contact;
