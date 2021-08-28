import { SectionHeading } from "components/Elements";
import Container from "components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import techStack from "constants/content/techStack.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import ItemTechStack from "./ItemTechStack";

const TechStackHome = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <motion.div
          id="features-home"
          className="flex flex-col gap-16 items-center"
          initial="invisible"
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <SectionHeading>Technologies we use</SectionHeading>
          <div className="flex flex-wrap gap-8 px-8 sm:gap-16 sm:max-w-screen-md md:gap-20">
            {techStack.map((item) => (
              <ItemTechStack key={v4()} {...item} visible={visible} />
            ))}
          </div>
        </motion.div>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default TechStackHome;
