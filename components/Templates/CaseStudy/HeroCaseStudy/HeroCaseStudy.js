const HeroCaseStudy = ({ headerImage, title }) => {
  return (
    <div>
      <img
        src={headerImage}
        alt={title}
        layout="fill"
        objectFit="contain"
        className="w-full"
      />
    </div>
  );
};

export default HeroCaseStudy;
