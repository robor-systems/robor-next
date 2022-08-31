import { ImageNext } from "@/components/Elements";
import Image from "next/image";

const HeroCaseStudy = ({ headerImage, title }) => {
  return (
    <div className="relative ">
      <div className=" h-[22vh] sm:h-[45vh] md:h-[45vh] lg:h-[380px] xl:h-[77vh] 3xl:h-[82vh]">
        <Image
          className="object-left"
          src={headerImage}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HeroCaseStudy;
