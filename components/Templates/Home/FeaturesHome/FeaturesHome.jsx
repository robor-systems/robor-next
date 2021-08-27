import Container from "components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import features from "constants/features.constant";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import FeatureCardHome from "./FeatureCardHome";

const FeaturesHome = () => {
  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 400, bottom: 400 }}
      >
        {({ isVisible }) => (
          <motion.div
            id="features-home"
            className="
        flex flex-col
        gap-16
        py-16
        items-center
        h-screen
    "
            initial="invisible"
            animate={isVisible ? "visible" : "invisible"}
            variants={opacityVariants}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-semibold text-4xl">What we do</h2>

            <div className="h-auto">
              <div className="flex flex-col  sm:flex-row flex-wrap w-full gap-12 min-h-full">
                {features?.map((feature) => (
                  <FeatureCardHome key={v4()} {...feature} />
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
