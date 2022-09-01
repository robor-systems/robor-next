const HeroCaseStudy = ({ headerImage, title }) => {
  return (
    <div>
      <img src={headerImage} alt={title} layout="fill" objectFit="contain" />
    </div>
  );
};

export default HeroCaseStudy;
