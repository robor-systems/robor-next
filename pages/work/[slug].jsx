import {
  HeroCaseStudy,
  ProjectInfo,
  RelatedProjectCaseStudy,
  SectionCaseStudy,
  TechStackCaseStudy,
} from "@/components/Templates/CaseStudy";
import workProjects from "constants/content/work.constant";

const SpecificProjectPage = ({ general, sections, ...props }) => {
  return (
    <div className="min-h-screen pt-[6.75rem] ">
      {/* * Header image */}
      <HeroCaseStudy heroImage={general?.headerImage} title={general?.title} />
      {/* * General info */}
      <ProjectInfo info={general} />
      {/* * Sections */}
      {sections
        .sort((a, b) => a.position > b.position)
        .map((item, index) => (
          <SectionCaseStudy index={index} key={item.id} {...item} />
        ))}
      {/* * Tech stack */}
      <TechStackCaseStudy />
      {/* * Related project */}
      <RelatedProjectCaseStudy />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/work/tokapi",
      "/work/agoric-amm",
      "/work/agoric-baseball",
      "/work/premium-voices",
      "/work/genesis-plot",
      "/work/kontractory",
    ],
    fallback: true,
  };
}

// * this project will have a dynamic slug parameter
export async function getStaticProps(context) {
  const { slug } = context.params;

  const foundProject = workProjects.find(
    (project) => project.general.slug === slug
  );

  if (!slug || !foundProject) {
    //   * redirect to 404 page if no slug is provided
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { ...foundProject },
  };
}

export default SpecificProjectPage;
