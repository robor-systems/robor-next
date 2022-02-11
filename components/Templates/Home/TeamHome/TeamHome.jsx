import { SectionHeader } from "components/Elements";
import Container from "components/Modules/Container/Container";
import { opacityVariants } from "constants/animations/variants.constant";
import team from "constants/content/team.constant";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { v4 } from "uuid";
import CardTeam from "./CardTeam";

const TeamHome = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 400 }}
      >
        <motion.div
          id="team"
          className="flex flex-col gap-16 items-center  pb-20 pt-16"
          initial="invisible"
          animate={visible ? "visible" : "invisible"}
          variants={opacityVariants}
          transition={{ duration: 1 }}
        >
          <SectionHeader
            title="Our Team"
            subtitle="The 🧠 🧠 🧠 behind this venture:"
          />
          <div className="grid-cols-16 grid gap-8 w-full max-w-xs sm:grid-cols-2 sm:max-w-lg md:grid-cols-3 md:max-w-3xl">
            {team.map((member) => (
              <CardTeam key={v4()} {...member} />
            ))}
          </div>
        </motion.div>
      </ReactVisibilitySensor>
    </Container>
  );
};

export default TeamHome;
