import { ImageNext } from "@/components/Elements";
import Image from "next/image";

const HeroCaseStudy = ({ heroImage, title }) => {
  return (
    <div className="relative w-full h-[227px] md:h-[427px]">
      <Image
        className="object-left"
        src={heroImage}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default HeroCaseStudy;
