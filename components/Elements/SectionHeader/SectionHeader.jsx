import Container from "@/components/Modules/Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <div className=" flex flex-col gap-6 items-center">
        <SectionHeading>{title}</SectionHeading>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </div>
    </Container>
  );
};

export default SectionHeader;
