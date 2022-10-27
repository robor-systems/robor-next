import Snackbar from "../Snackbar/Snackbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DarkModeToggleButton from "@/components/Elements/DarkModeToggleButton/DarkModeToggleButton";
import { useViewportScroll } from "framer-motion";
const { default: Footer } = require("components/Modules/Footer/Footer");
const { default: Header } = require("components/Modules/Header/Header");

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const { scrollYProgress } = useViewportScroll();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = (y) => setScroll(y * 100);
    const unsubscribeY = scrollYProgress.onChange(handleScroll);

    return () => {
      unsubscribeY();
    };
  });

  return (
    <div className="relative min-h-screen bg-light-bgPrimary dark:bg-dark-bgPrimary overflow-hidden">
      <Header />
      {children}
      <div className="flex-col">
        {scroll > 2 ? <DarkModeToggleButton floatingBtn={true} /> : ""}
        {pathname !== "/clients" && pathname !== "/solutions" && (
          <Snackbar scrollProgress={scroll} />
        )}
      </div>

      {pathname !== "/clients" && pathname !== "/solutions" && <Footer />}
    </div>
  );
};

export default Layout;
