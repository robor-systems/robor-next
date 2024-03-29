import { existanceVariants } from "constants/animations/variants.constant";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";
import { IconButton } from "@/components/Elements";

const CardTeam = ({
  name,
  position,
  image,
  video,
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
      className="relative w-full overflow-hidden border border-1 h-96 rounded-3xl sm:h-72 dark:border-none"
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
        poster={image}
        src={video}
        className="object-cover w-full h-full p-3"
        muted
        autoPlay
        playsInline
        style={{ pointerEvents: "none" }}
        // * cache video for performance
        preload="auto"
      ></video>
      {/* {hover && mounted && (
        <motion.div
          custom={mounted && "black"}
          className="absolute top-0 left-0 w-full h-full"
          variants={gradientVariants}
          initial="invisible"
          transition={{ duration: 0.4 }}
          animate={hover ? "visible" : "invisible"}
        ></motion.div>
      )} */}
      {hover && (
        <motion.div
          className="absolute top-0 right-0 flex flex-col gap-4 p-4 text-3xl sm:gap-3 sm:text-xl"
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
        className="absolute top-0 flex flex-col justify-end w-full h-full px-6 py-4"
      >
        <motion.h3
          layout
          className="text-2xl font-semibold text-black sm:text-xl"
        >
          {name}
        </motion.h3>

        {hover && (
          <motion.h4
            className="text-xl font-normal text-black sm:text-lg"
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
