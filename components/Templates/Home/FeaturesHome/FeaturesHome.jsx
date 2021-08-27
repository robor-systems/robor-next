import Container from "components/Modules/Container/Container";
import FeatureCardHome from "./FeatureCardHome";

const FeaturesHome = () => {
  return (
    <Container>
      <div
        id="features-home"
        className="
        flex flex-col
        gap-2
        flex-wrap
        prose-xl
      py-16
        items-center
        bg-gray-50

    "
      >
        <h2 className="font-light">What we do</h2>
        <div className="flex w-full gap-8 bg-red-300">
          <FeatureCardHome />
          <FeatureCardHome />
          <FeatureCardHome />
        </div>
      </div>
    </Container>
  );
};

export default FeaturesHome;
