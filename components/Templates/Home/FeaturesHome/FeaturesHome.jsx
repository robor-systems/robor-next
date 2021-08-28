import { SectionHeading } from "components/Elements";
import Container from "components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import CardFeaturesHome from "./CardFeaturesHome";
import saasIcon from "public/assets/icons/features/saas-icon.png";
import embeddedIcon from "public/assets/icons/features/embedded-icon.png";
import dataIcon from "public/assets/icons/features/data-icon.png";

const FeaturesHome = () => {
  const [visible, setVisible] = useState(false);
  const features = [
    {
      title: "SaaS",
      description:
        "Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicelit.  Similique Similique Similique Similique",
      image: {
        src: saasIcon,
        alt: "SaaS Icon",
      },
    },
    {
      title: "Embedded Systems",
      description:
        "Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Similique amet consectetur amet consectetur",
      image: {
        src: embeddedIcon,
        alt: "Embedded Systems Icon",
      },
    },
    {
      title: "Data Analysis",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique amet consectetur, adipisic",
      image: {
        src: dataIcon,
        alt: "Data Analysis Icon",
      },
    },
  ];

  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        offset={{ top: 400, bottom: 400 }}
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
      >
        <motion.div
          layout
          id="features-home"
          className="flex flex-col gap-16 items-center"
          initial={"invisible"}
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>Our Services</SectionHeading>

          <div className="h-auto">
            <div className="flex flex-col flex-wrap gap-12 w-full min-h-full sm:flex-row">
              {features.map((feature, index) => (
                <CardFeaturesHome
                  key={v4()}
                  {...feature}
                  delay={index / 4}
                  isVisible={visible}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default FeaturesHome;
