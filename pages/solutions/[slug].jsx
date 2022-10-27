import { ImageGenerator } from "@/components/Templates/Solutions/index";
import solutions from "constants/content/solutions.constant";
import Head from "next/head";

const SolutionPage = ({ general }) => {
  return (
    <>
      <Head>
        <title>{general?.title} | Robor Systems</title>
      </Head>
      <div className="min-h-screen pt-[6.75rem] my-20">
        <div className="max-w-3xl mx-auto">
          <ImageGenerator />
        </div>
      </div>
    </>
  );
};

export default SolutionPage;

export async function getStaticPaths() {
  return {
    paths: ["/solutions/image-generator"],
    fallback: true,
  };
}

// * this project will have a dynamic slug parameter
export async function getStaticProps(context) {
  const { slug } = context.params;

  const foundSolution = solutions.find(
    (solution) => solution.general.slug === slug
  );

  if (!slug || !foundSolution) {
    //   * redirect to 404 pa ge if no slug is provided
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...foundSolution,
    },
  };
}
