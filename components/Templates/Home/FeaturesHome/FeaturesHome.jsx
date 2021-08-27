import Container from "components/Modules/Container/Container";
import { features } from "constants/features.constant";
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
        flex-wrap
        prose-xl
        py-16
        items-center
    "
      >
        <h2 className="font-semibold">What we do</h2>
        <div className="flex w-full gap-8 ">
          {features?.map((feature) => (
            <FeatureCardHome key={v4()} {...feature} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturesHome;
