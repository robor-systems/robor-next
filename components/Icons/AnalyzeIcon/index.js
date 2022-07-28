import { useTheme } from "next-themes";

import THEME, { SVG_COLORS } from "constants/theme/theme.constant";
import { useIsomorphicLayoutEffect } from "utils/hooks";

const AnalyzeIcon = () => {
  const { theme } = useTheme();

  useIsomorphicLayoutEffect(() => {
    const analyzeIconPath = document.querySelectorAll(".analyze-icon-path");

    // * apply fill color to saas-icon-path
    Array.from(analyzeIconPath).forEach((item) => {
      item.setAttribute(
        "fill",
        theme === THEME.DARK ? SVG_COLORS.darkPrimary : SVG_COLORS.lightPrimary
      );
    });
  }, [theme]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88.123"
      height="85.281"
      viewBox="0 0 88.123 85.281"
    >
      <path
        className="analyze-icon-path"
        d="M7.107,76.877H44.061V74.034H7.107A4.264,4.264,0,0,1,2.843,69.77V7.232A4.264,4.264,0,0,1,7.107,2.968H69.645a4.263,4.263,0,0,1,4.264,4.264v32.69h2.843V7.232A7.115,7.115,0,0,0,69.645.125H7.107A7.115,7.115,0,0,0,0,7.232V69.77A7.116,7.116,0,0,0,7.107,76.877Zm0,0"
        transform="translate(0 -0.125)"
      />
      <path
        className="analyze-icon-path"
        d="M62.344,62.469h2.842v2.842H62.344Zm0,0"
        transform="translate(-56.658 -56.783)"
      />
      <path
        className="analyze-icon-path"
        d="M124.676,62.469h2.843v2.842h-2.843Zm0,0"
        transform="translate(-113.305 -56.783)"
      />
      <path
        className="analyze-icon-path"
        d="M187.016,62.469h2.843v2.842h-2.843Zm0,0"
        transform="translate(-169.96 -56.783)"
      />
      <path
        className="analyze-icon-path"
        d="M62.344,124.8h65.381v2.843H62.344Zm0,0"
        transform="translate(-56.658 -113.43)"
      />
      <path
        className="analyze-icon-path"
        d="M76.546,191.707l-3.61,3.61a7.129,7.129,0,1,0,2.01,2.01l3.61-3.61Zm-7.524,13.8a4.264,4.264,0,1,1,0-8.527,4.189,4.189,0,0,1,1.827.426l-2.831,2.832,2.009,2.01,2.833-2.83a4.185,4.185,0,0,1,.426,1.826A4.263,4.263,0,0,1,69.022,205.5Zm0,0"
        transform="translate(-56.231 -174.235)"
      />
      <path
        className="analyze-icon-path"
        d="M264.941,249.484H289.1v2.842H264.941Zm0,0"
        transform="translate(-240.778 -226.742)"
      />
      <path
        className="analyze-icon-path"
        d="M264.941,311.82h9.949v2.842h-9.949Zm0,0"
        transform="translate(-240.778 -283.393)"
      />
      <path
        className="analyze-icon-path"
        d="M405.2,311.82h19.9v2.842H405.2Zm0,0"
        transform="translate(-368.248 -283.393)"
      />
      <path
        className="analyze-icon-path"
        d="M561.047,249.484H575.26v2.842H561.047Zm0,0"
        transform="translate(-509.879 -226.742)"
      />
      <path
        className="analyze-icon-path"
        d="M76.546,378.723l-3.61,3.61a7.129,7.129,0,1,0,2.01,2.01l3.61-3.61Zm-7.524,13.8a4.264,4.264,0,0,1,0-8.528,4.194,4.194,0,0,1,1.827.426l-2.831,2.832,2.009,2.009,2.833-2.83a4.188,4.188,0,0,1,.426,1.826A4.264,4.264,0,0,1,69.022,392.52Zm0,0"
        transform="translate(-56.231 -344.195)"
      />
      <path
        className="analyze-icon-path"
        d="M264.941,436.492H289.1v2.843H264.941Zm0,0"
        transform="translate(-240.778 -396.695)"
      />
      <path
        className="analyze-icon-path"
        d="M264.941,498.836h9.949v2.843h-9.949Zm0,0"
        transform="translate(-240.778 -453.353)"
      />
      <path
        className="analyze-icon-path"
        d="M405.2,498.836h11.37v2.843H405.2Zm0,0"
        transform="translate(-368.248 -453.353)"
      />
      <path
        className="analyze-icon-path"
        d="M561.047,436.492h5.685v2.843h-5.685Zm0,0"
        transform="translate(-509.879 -396.695)"
      />
      <path
        className="analyze-icon-path"
        d="M76.546,565.738l-3.61,3.61a7.128,7.128,0,1,0,2.01,2.01l3.61-3.61Zm-7.524,13.8a4.264,4.264,0,0,1,0-8.528,4.181,4.181,0,0,1,1.827.426l-2.831,2.832,2.009,2.009,2.833-2.83a4.189,4.189,0,0,1,.426,1.827A4.264,4.264,0,0,1,69.022,579.535Zm0,0"
        transform="translate(-56.231 -514.154)"
      />
      <path
        className="analyze-icon-path"
        d="M264.941,623.512h18.477v2.843H264.941Zm0,0"
        transform="translate(-240.778 -566.659)"
      />
      <path
        className="analyze-icon-path"
        d="M264.941,685.852h9.949v2.843h-9.949Zm0,0"
        transform="translate(-240.778 -623.313)"
      />
      <path
        className="analyze-icon-path"
        d="M405.2,685.852h5.685v2.843H405.2Zm0,0"
        transform="translate(-368.248 -623.313)"
      />
      <path
        className="analyze-icon-path"
        d="M520.031,510.3a21.32,21.32,0,1,0-21.32-21.32A21.32,21.32,0,0,0,520.031,510.3Zm0-39.8a18.477,18.477,0,1,1-18.478,18.477A18.478,18.478,0,0,1,520.031,470.507Zm0,0"
        transform="translate(-453.228 -425.024)"
      />
      <path
        className="analyze-icon-path"
        d="M612.064,593.064l-2.544,1.27,2.843,5.685a1.42,1.42,0,0,0,1.044.768,1.557,1.557,0,0,0,.221.019,1.424,1.424,0,0,0,1.005-.416l17.055-17.056-2.009-2.01-15.662,15.662Zm0,0"
        transform="translate(-553.931 -528.318)"
      />
    </svg>
  );
};

export default AnalyzeIcon;
