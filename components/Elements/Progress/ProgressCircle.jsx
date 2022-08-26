import THEME from "constants/theme/theme.constant";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const ProgressCircle = (props) => {
  const circleRef = useRef(null);

  const { radius, stroke, progress } = props;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const { theme } = useTheme();

  useEffect(() => {
    if (circleRef.current) {
      // * set the stroke
      circleRef.current.style.stroke =
        theme === THEME.DARK ? "#00B7BF" : "#00747A";
    }
  }, [theme]);

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="transform -rotate-90"
    >
      <circle
        ref={circleRef}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default ProgressCircle;
