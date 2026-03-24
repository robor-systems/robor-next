import Snackbar from "../Snackbar/Snackbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DarkModeToggleButton from "@/components/Elements/DarkModeToggleButton/DarkModeToggleButton";
import { useScroll } from "framer-motion";
import Footer from "@/components/Modules/Footer/Footer";
import Header from "@/components/Modules/Header/Header";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = (y) => setScroll(y * 100);
    const unsubscribeY = scrollYProgress.on("change", handleScroll);

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
        {pathname !== "/clients" && <Snackbar scrollProgress={scroll} />}
      </div>

      {pathname !== "/clients" && <Footer />}
    </div>
  );
};

export default Layout;
