import { ImageNext } from "components/Elements";

const FeatureCardHome = ({ image, title, description }) => {
  return (
    <div className="mx-auto max-w-xs  min-h-full flex-1 rounded-3xl bg-gray-100 flex flex-col py-12 px-8 items-center text-center gap-7">
      <div className="p-7 bg-white rounded-3xl shadow-xl">
        <ImageNext {...image} className="h-20 w-20" />
      </div>
      <h3 className="text-2xl mt-2">{title}</h3>

      <div className="text-lg m-0">{description}</div>
    </div>
  );
};

export default FeatureCardHome;
