import {  useRef , useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
const SectionCaseStudy = ({
  header,
  subHeader,
  index,
  description,
  image,
  blurImage,

  ...props
}) => {

const leftTextRef = useRef(null)
const rightTextRef = useRef(null)
const imgRef = useRef(null)
const imgContainer= useRef(null)
useEffect(()=>{
  const el_Left=leftTextRef.current;
  const el_Right =rightTextRef.current;
  const el_img = imgRef.current;


  tl.from(el_Left,{ x : -50})
  tl.to(el_Left,{
 
    scrollTrigger: {
      trigger: el_Left,
      start: "left right",
      end: " right left",
      scrub: 1,
      toggleActions: 'play none none reverse'
    },

    x: 0,
  },
)

  tl.from(el_Right,{ x : 50})
  tl.to(el_Right,{
    scrollTrigger: {
      trigger:el_Right,
      start: " right left",
      end: "left right",
      scrub: 1,
      toggleActions: 'play none none reverse'
    },
    x : 0
  })

  tl.from(el_img,{ opacity:0 })
  tl.to(el_img,{
    
    delay:1,
      scrollTrigger: {
        trigger:el_img,
        start: "top center",
        end: "top bottom",
        toggleActions: 'play none none reset'
      },
      opacity:1,
      duration:3,
     
  })
 

},[])
  return (
    <div
      className={clsx(
        index % 2 === 0
          ? "bg-light-bgPrimary dark:bg-dark-bgPrimary"
          : "bg-light-bgSecondary dark:bg-dark-bgSecondary",
        "md:py-24 py-16 px-8 md:px-24 lg:px-44",
        "space-y-10 md:space-y-10",
    
      )}
    >
      {/* * Top content */}
      <div className={clsx("grid grid-cols-2 gap-10")}>
        {/* * left content */}
        <motion.div 
        className="flex flex-col justify-center space-y-2 md:col-span-1 col-span-full text-light-contentSecondary dark:text-dark-contentSecondary"
        ref={leftTextRef}
        >
          {/* * subheader */}
          <h4 className="project-info-heading ">{subHeader}</h4>
          {/* * header */}
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-light-primary dark:text-dark-primary">
            {header}
          </h1>
        </motion.div>
        {/* * right content */}
        <motion.div 
        className="font-light text-md md:text-lg md:col-span-1 col-span-full"
        ref={rightTextRef}
        
        >
          {description}
        </motion.div>
      </div>
      {/* * bottom images div */}
  
    
      {!!image &&
        <div ref={imgContainer} className="flex items-center justify-center w-full h-[220px] md:h-[456px] m-auto">
          <motion.div className="relative w-full h-full"
            ref={imgRef}
          >
            <Image
              src={image}
              alt={header}
              layout="fill"
              objectFit="contain"
              // placeholder="blur"
              // blurDataURL={blurImage}
            />
          </motion.div>
        </div>
    
}
    
    </div>
  );
};

export default SectionCaseStudy;
