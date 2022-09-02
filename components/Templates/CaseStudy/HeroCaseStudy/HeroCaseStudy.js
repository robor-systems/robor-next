import Image from "next/image";
const HeroCaseStudy = ({ headerImage, title }) => {
  return (
    <div className="h-[22vh] sm:h-[45vh] md:h-[45vh] lg:h-[380px] xl:h-[77vh] relative">
      <Image src={headerImage} alt={title} layout="fill" className="w-full" />
    </div>
  );
};

export default HeroCaseStudy;
