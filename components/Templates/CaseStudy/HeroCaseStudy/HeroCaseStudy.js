import { ImageNext } from "@/components/Elements";
import Image from "next/image";

const HeroCaseStudy = ({ headerImage, blurHeaderImage, title }) => {
  return (
    <div className="relative w-full h-[22vh] sm:h-[45vh] md:h-[48vh] lg:h-[60vh] xl:h-[78vh]">
      <Image
        className="object-left"
        src={headerImage}
        alt={title}
        layout="fill"
        objectFit="cover"
        blurDataURL={blurHeaderImage}
        placeholder="blur"
      />
    </div>
  );
};

export default HeroCaseStudy;
