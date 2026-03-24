import Image from "next/image";
const HeroCaseStudy = ({ headerImage, title }) => {
  return (
    <div className="max-w-[100%] pt-[36.458%]  relative">
      <Image
        src={headerImage}
        alt={title}
        fill
        sizes="100vw"
        className="w-full object-cover"
      />
    </div>
  );
};

export default HeroCaseStudy;
