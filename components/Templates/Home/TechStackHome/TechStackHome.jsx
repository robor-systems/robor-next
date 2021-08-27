import { SectionHeading } from "components/Elements";
import Container from "components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import techStack from "constants/content/techStack.constant";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import ItemTechStack from "./ItemTechStack";

const TechStackHome = () => {
  return (
    <Container>
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <motion.div
            id="features-home"
            className="flex flex-col gap-24 items-center py-16"
            initial="invisible"
            animate={isVisible ? "visible" : "invisible"}
            variants={opacityVariants}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading>Technologies we use</SectionHeading>
            <div className="flex flex-wrap gap-32">
              {techStack.map((item) => (
                <ItemTechStack key={v4()} {...item} />
              ))}
            </div>
          </motion.div>
        )}
      </ReactVisibilitySensor>
    </Container>
  );
};

export default TechStackHome;
