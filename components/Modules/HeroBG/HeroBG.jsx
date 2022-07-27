import { gsap } from "gsap";
import { useTheme } from "next-themes";
import THEME from "constants/theme/theme.constant";
import { useIsomorphicLayoutEffect } from "utils/hooks";

const HeroBG = () => {
  const { theme } = useTheme();

  useIsomorphicLayoutEffect(() => {
    let lines = 4;
    for (let i = 1; i <= lines; i++) {
      const paths = Array.from(document.querySelectorAll(`.path-${i}`));
      if (!paths) return;
      gsap.set(paths, {
        autoAlpha: 1,
      });
      paths.forEach((path, j) => {
        gsap.set(path, { xPercent: 100 * j });
      });
      const pathsWrap = gsap.utils.wrap(-100, (paths.length - 1) * 100);
      // const duration = paths.length * (Math.random() * 50 - 25 + 50);
      const duration = paths.length * 50;
      gsap.to(paths, {
        xPercent: `-=${paths.length * 100}`,
        duration,
        repeat: -1,
        ease: "none",
        modifiers: {
          xPercent: (xPercent) => pathsWrap(parseFloat(xPercent)),
        },
      });
    }

    return () => {};
  }, []);

  // * set the stroke color according to the theme
  useIsomorphicLayoutEffect(() => {
    const strokeColor = theme === THEME.DARK ? "#5f6572" : "#d2dfe0";
    const bgSVG = document.querySelector(".bg-bilal");
    const paths = Array.from(bgSVG.querySelectorAll("path"));
    paths.forEach((path) => {
      path.style.stroke = strokeColor;
    });
  }, [theme]);

  return (
    <svg
      className="bg-bilal absolute top-[40px] left-[-10px]"
      xmlns="http://www.w3.org/2000/svg"
      width="2749"
      height="605"
      viewBox="0 0 2749.487 605"
    >
      <g
        id="svg_group_1"
        data-name="Group 248"
        transform="translate(-13594.155 -18418.979)"
      >
        {/* * first line animation paths */}
        <path
          id="Path_19592"
          className="path-1"
          data-name="Path 19592"
          d="M-459.168,213.995c47.428-60.7,207.187-251.722,305.632-232.219,189.269,37.5,224.315,364.01,400.857,370.177s278.918-206.93,455.461-198.121,332.287,294.265,512.6,257.181S1431.885,37.7,1611.565,31.925s317.078,380.483,445.656,388.725S2267.141,309.2,2267.141,309.2"
          transform="matrix(0.999, -0.035, 0.035, 0.999, 14056.89, 18518.762)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        />
        <path
          id="Path_19593"
          className="path-1"
          data-name="Path 19592"
          d="M-459.168,213.995c47.428-60.7,207.187-251.722,305.632-232.219,189.269,37.5,224.315,364.01,400.857,370.177s278.918-206.93,455.461-198.121,332.287,294.265,512.6,257.181S1431.885,37.7,1611.565,31.925s317.078,380.483,445.656,388.725S2267.141,309.2,2267.141,309.2"
          transform="matrix(0.999, -0.035, 0.035, 0.999, 14056.89, 18518.762)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        />

        {/* * second line animation path */}
        <path
          id="Path_19594"
          className="path-2"
          data-name="Path 19593"
          d="M-414.654,74.146c135.085-8.079,353.283,263.617,525.426,260.093S431.725,84.626,603.868,82.865s306.214,373.262,478.353,371.677c168.179-1.549,238.688-388.867,436.527-373.386s298.874,348.867,425.526,354.916,238.473-238.448,367.381-266.72"
          transform="matrix(0.999, -0.035, 0.035, 0.999, 14017.283, 18525.928)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        />
        <path
          id="Path_19595"
          className="path-2"
          data-name="Path 19593"
          d="M-414.654,74.146c135.085-8.079,353.283,263.617,525.426,260.093S431.725,84.626,603.868,82.865s306.214,373.262,478.353,371.677c168.179-1.549,238.688-388.867,436.527-373.386s298.874,348.867,425.526,354.916,238.473-238.448,367.381-266.72"
          transform="matrix(0.999, -0.035, 0.035, 0.999, 14017.283, 18525.928)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        />

        {/* * third line animation path */}
        {/* <path
          id="Path_19596"
          className="path-3"
          data-name="Path 19594"
          d="M-454.86,215.706c53.572-37.681,195.344-184.689,281.621-177.425C-1.1,37.224,94.045,352.036,266.184,384.1S524.391,261.656,696.531,249.323s265.44,246.886,425.042,204.682,281.212-238.269,458.451-243.354,293.9,223.373,401.64,248.316,177.261-7.68,287.711-100.489"
          // transform="translate(14048.417 18533.574) rotate(-3)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        />
        <path
          id="Path_19597"
          className="path-3"
          data-name="Path 19594"
          d="M-454.86,215.706c53.572-37.681,195.344-184.689,281.621-177.425C-1.1,37.224,94.045,352.036,266.184,384.1S524.391,261.656,696.531,249.323s265.44,246.886,425.042,204.682,281.212-238.269,458.451-243.354,293.9,223.373,401.64,248.316,177.261-7.68,287.711-100.489"
          // transform="translate(14048.417 18533.574) rotate(-3)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        /> */}

        {/* * forth line animaiton path */}
        <path
          id="Path_19598"
          className="path-4"
          data-name="Path 19595"
          d="M-477.982,358.571C-338.842,379.085-83.036,25.831,89.1,39.926s258.21,316.243,430.347,343.551S832.536,133.5,970.893,147.243,1166.025,429.2,1325.3,421.54,1613,88.67,1784.408,83.314s301.432,347.637,463.918,370.458"
          transform="matrix(0.999, -0.035, 0.035, 0.999, 14070.646, 18528.246)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        />
        <path
          id="Path_19599"
          className="path-4"
          data-name="Path 19595"
          d="M-477.982,358.571C-338.842,379.085-83.036,25.831,89.1,39.926s258.21,316.243,430.347,343.551S832.536,133.5,970.893,147.243,1166.025,429.2,1325.3,421.54,1613,88.67,1784.408,83.314s301.432,347.637,463.918,370.458"
          transform="matrix(0.999, -0.035, 0.035, 0.999, 14070.646, 18528.246)"
          fill="none"
          stroke="#d2dfe0"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default HeroBG;
