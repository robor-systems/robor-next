import { ImageNext } from "@/components/Elements";
import Image from "next/image";

const HeroCaseStudy = ({ headerImage, blurHeaderImage, title }) => {
  return (
    <div className="relative ">
   
  <div className=" h-[18vh] sm:h-[45vh] md:h-[37vh] lg:h-[380px] xl:h-[77vh]">
    <Image
        className="object-left"
        src={headerImage}
        alt={title}
        layout="fill"
        objectFit="contain"
        blurDataURL={blurHeaderImage}
        placeholder="blur"
      />
   </div>
    </div>
  );
};

export default HeroCaseStudy;
