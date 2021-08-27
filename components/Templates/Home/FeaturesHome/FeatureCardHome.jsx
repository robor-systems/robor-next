import { ImageNext } from "components/Elements";

const FeatureCardHome = ({ image, title, description }) => {
  return (
    <div className="h-96  mx-auto flex-1 rounded-3xl bg-gray-100 flex flex-col p-8 items-center text-center">
      <ImageNext {...image} className="h-10 w-10" />

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default FeatureCardHome;
