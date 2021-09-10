import { existanceVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";
import { IconButton } from "@/components/Elements";

const CardTeam = ({
  name,
  position,
  image,
  socials: {
    github,
    linkedin,
    // emailAddress = "mailto:johndoe@appleseed.com",
    // twitter = "https://twitter.com",
  },
}) => {
  const videoRef = useRef(null);

  const [hover, setHover] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  });

  useEffect(() => {
    if (hover) {
      videoRef.current.playbackRate = 1.5;
      videoRef.current.currentTime = 1;
      videoRef.current.play();
    }
  }, [hover]);

  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border-1 relative w-full h-96 rounded-3xl overflow-hidden sm:h-72 border "
      animate={
        hover
          ? {
              boxShadow: `0 60px 50px -70px black`,
            }
          : {}
      }
    >
      <video
        ref={videoRef}
        // src="/assets/monkey-video.mp4"
        src={image}
        // src="https://robor-team.s3.eu-central-1.amazonaws.com/team/danish-final.mp4"
        className="w-full h-full object-cover p-3"
      ></video>
      {/* {hover && mounted && (
        <motion.div
          custom={mounted && "black"}
          className="absolute left-0 top-0 w-full h-full"
          variants={gradientVariants}
          initial="invisible"
          transition={{ duration: 0.4 }}
          animate={hover ? "visible" : "invisible"}
        ></motion.div>
      )} */}
      {hover && (
        <motion.div
          className="absolute right-0 top-0 flex flex-col gap-4 p-4 text-3xl sm:gap-3 sm:text-xl"
          variants={existanceVariants}
          initial="invisible"
          transition={{ duration: 0.5 }}
          animate={hover ? "visible" : "invisible"}
        >
          <IconButton>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FiGithub />
            </a>
          </IconButton>
          {/* <IconButton>
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FiTwitter />
            </a>
          </IconButton>
          <IconButton>
            <a
              href={emailAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FiMail />
            </a>
          </IconButton> */}
          <IconButton>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FiLinkedin />
            </a>
          </IconButton>
        </motion.div>
      )}
      <motion.div
        layout
        className="absolute top-0 flex flex-col justify-end px-6 py-4 w-full h-full"
      >
        <motion.h3
          layout
          className="text-black text-2xl font-semibold sm:text-xl"
        >
          {name}
        </motion.h3>

        {hover && (
          <motion.h4
            className="text-black text-xl font-normal sm:text-lg"
            variants={existanceVariants}
            initial="invisible"
            transition={{ duration: 0.5 }}
            animate={hover ? "visible" : "invisible"}
          >
            {position}
          </motion.h4>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CardTeam;
