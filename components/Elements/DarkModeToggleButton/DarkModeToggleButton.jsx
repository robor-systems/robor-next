// import { SunIcon } from "./icons/sun-icon";

import { useTheme } from "next-themes";
import clsx from "clsx";

import { MoonIcon, SunIcon } from "@/components/Icons";
import THEME from "constants/theme/theme.constant";
import { useEffect } from "react";

const iconTransformOrigin = { transformOrigin: "50% 100px" };

const DarkModeToggleButton = ({ floatingBtn }) => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme(theme === "system" ? THEME.LIGHT : theme);
  }, []);
  return (
    <button
      onClick={() => {
        setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
      }}
      className={clsx(
        "border-secondary hover:border-primary  focus:outline-none inline-flex items-center justify-center overflow-hidden rounded-full border-2 transition",
        "w-12 h-12  p-1",
        floatingBtn
          ? "fixed z-32 bottom-28 right-7 md:right-12 bg-[#fff] dark:bg-dark-bgPrimary"
          : ""
      )}
    >
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className="relative w-8 h-8">
        <span
          className="absolute inset-0 rotate-90 transform text-gray-500 transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}
        >
          <MoonIcon />
        </span>
        <span
          className="absolute inset-0 rotate-0 transform text-gray-500 transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}
        >
          <SunIcon />
        </span>
      </div>
      <span className={clsx("sr-only ml-4 text-gray-500 dark:text-white")}>
        Toggle Dark Mode
      </span>
    </button>
  );
};

export default DarkModeToggleButton;
