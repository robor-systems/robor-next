import Image from "next/image";
const HeroCaseStudy = ({ headerImage, title }) => {
  return (
    <div className="max-w-[100%] pt-[36.458%]  relative">
      <Image
        src={headerImage}
        alt={title}
        layout="fill"
        className="w-full"
        objectFit="cover"
      />
    </div>
  );
};

export default HeroCaseStudy;
