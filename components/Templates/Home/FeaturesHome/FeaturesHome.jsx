import { useState } from "react";
import { motion } from "framer-motion";
import { v4 } from "uuid";
import ReactVisibilitySensor from "react-visibility-sensor";

import { opacityVariants } from "constants/animations/variants.constant";
import features from "constants/content/features.constant";
import { SectionHeading } from "components/Elements";
import Container from "components/Modules/Container/Container";

import CardFeaturesHome from "./CardFeaturesHome";

const FeaturesHome = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 400, bottom: 400 }}
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
      >
        <motion.div
          layout
          id="services"
          className="flex flex-col items-center gap-16 pt-10 pb-20"
          initial={"invisible"}
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Our Services</SectionHeading>

          <div className="h-auto">
            <div className="flex flex-col flex-wrap w-full min-h-full gap-12 sm:flex-row">
              {features.map((feature) => (
                <CardFeaturesHome key={v4()} {...feature} isVisible={visible}>
                  {feature.child}
                </CardFeaturesHome>
              ))}
            </div>
          </div>
        </motion.div>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default FeaturesHome;
