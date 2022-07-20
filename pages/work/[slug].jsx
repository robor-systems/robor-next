import workProjects from "constants/content/work.constant";

const SpecificProjectPage = (props) => {
  return <div>{props?.general?.title}</div>;
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
