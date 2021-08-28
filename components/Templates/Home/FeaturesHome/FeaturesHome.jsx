import { SectionHeading } from "components/Elements";
import Container from "components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import features from "constants/content/features.constant";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import CardFeaturesHome from "./CardFeaturesHome";

const FeaturesHome = () => {
  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 400, bottom: 400 }}
      >
        {({ isVisible }) => (
          <motion.div
            layout
            id="features-home"
            className="flex flex-col gap-16 items-center py-16 h-screen"
            initial="invisible"
            animate={isVisible ? "visible" : "invisible"}
            variants={opacityVariants}
            transition={{ duration: 0.5, when: "beforeChildren" }}
          >
            <SectionHeading>Our Services</SectionHeading>

            <div className="h-auto">
              <div className="flex flex-col flex-wrap gap-12 w-full min-h-full sm:flex-row">
                {features?.map((feature, index) => (
                  <CardFeaturesHome
                    key={v4()}
                    {...feature}
                    delay={index / 4}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </ReactVisibilitySensor>
    </Container>
  );
};

export default FeaturesHome;
