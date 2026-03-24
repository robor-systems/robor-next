import coreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...coreWebVitals,
  {
    rules: {
      "react/display-name": "off",
    },
  },
];

export default eslintConfig;
