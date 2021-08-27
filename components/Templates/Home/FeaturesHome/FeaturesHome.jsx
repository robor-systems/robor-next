import Container from "components/Modules/Container/Container";
import features from "constants/features.constant";
import { v4 } from "uuid";
import FeatureCardHome from "./FeatureCardHome";

const FeaturesHome = () => {
  return (
    <Container>
      <div
        id="features-home"
        className="
        flex flex-col
        gap-12
        py-16
        items-center
    "
      >
        <h2 className="font-semibold text-4xl">What we do</h2>

        <div className="flex w-full gap-8 min-h-full">
          {features?.map((feature) => (
            <FeatureCardHome key={v4()} {...feature} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturesHome;
