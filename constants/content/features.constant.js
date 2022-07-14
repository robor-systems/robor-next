import { DataEngIcon, EmbeddedSysIcon, SaasIcon } from "@/components/Icons";

const features = [
  {
    title: "SaaS",
    description:
      "We build highly scalable and performant cloud based applications that will meet your current and future needs with ease.",
    image: {
      src: "https://robor-team.s3.eu-central-1.amazonaws.com/features/saas.svg",
      alt: "SaaS Icon",
    },
    child: <SaasIcon />,
  },
  {
    title: "Embedded Systems",
    description:
      "Working with micro-controllers is our hobby and we're good at it. We can take your next IoT project from inception to conclusion.",
    image: {
      src: "https://robor-team.s3.eu-central-1.amazonaws.com/features/embedded.svg",
      alt: "Embedded Systems Icon",
    },
    child: <EmbeddedSysIcon />,
  },
  {
    title: "Data Engineering",
    description:
      "We ♥ data and can help you extract, clean, process, store and finally utilize it in your ML applications. Just tell us what you need 🙂",
    image: {
      src: "https://robor-team.s3.eu-central-1.amazonaws.com/features/data.svg",
      alt: "Data Analysis Icon",
    },
    child: <DataEngIcon />,
  },
];

export default features;
