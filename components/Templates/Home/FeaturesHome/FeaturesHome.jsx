import { SectionHeading } from "components/Elements";
import Container from "components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import features from "constants/content/features.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
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
          className="flex flex-col gap-16 items-center  pt-10 pb-20"
          initial={"invisible"}
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Our Services</SectionHeading>

          <div className="h-auto">
            <div className="flex flex-col flex-wrap gap-12 w-full min-h-full sm:flex-row">
              {features.map((feature, index) => (
                <CardFeaturesHome key={v4()} {...feature} isVisible={visible} />
              ))}
            </div>
          </div>
        </motion.div>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default FeaturesHome;
