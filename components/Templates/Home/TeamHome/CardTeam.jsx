const { ImageNext } = require("components/Elements");

const CardTeam = ({ image, name }) => {
  return (
    <div className="border-1 w-full h-72 sm:h-60">
      <ImageNext
        src={image}
        alt={name}
        className="w-full h-full"
        objectFit="cover"
      />
    </div>
  );
};

export default CardTeam;
