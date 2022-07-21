import { ImageNext } from "@/components/Elements";
import Image from "next/image";

const HeroCaseStudy = ({ headerImage, blurHeaderImage, title }) => {
  return (
    <div className="relative w-full h-[227px] md:h-[427px]">
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
