import { SectionHeading } from "components/Elements";
import { opacityVariants } from "constants/animations/variants.constant";
import clients from "constants/content/clients.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import ItemClients from "./ItemClients";

const OurClients = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        id="clients"
        className="text-blu flex flex-col gap-12 items-center   pb-16  pt-20 w-full  overflow-hidden"
        initial="invisible"
        animate={visible ? "visible" : "invisible"}
        variants={opacityVariants}
        transition={{ duration: 1 }}
      >
        <SectionHeading>Our Clients</SectionHeading>

        <div className="grid gap-12 grid-cols-2 px-12 max-w-screen-lg md:gap-16 md:grid-cols-4">
          {clients.map((item, index) => (
            <ItemClients key={v4()} {...item} visible={visible} />
          ))}
        </div>
      </motion.div>
    </ReactVisibilitySensor>
  );
};

export default OurClients;
