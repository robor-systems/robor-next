import Snackbar from "../Snackbar/Snackbar";
import { useRouter } from 'next/router';
const { default: Footer } = require("components/Modules/Footer/Footer");
const { default: Header } = require("components/Modules/Header/Header");

const Layout = ({ children }) => {
  const {  pathname } = useRouter();
  return (
    <div className="relative min-h-screen bg-light-bgPrimary dark:bg-dark-bgPrimary">
      <Header />
      {children}
      <Snackbar />
      {pathname !== '/work' && <Footer /> }
    
    </div>
  );
};

export default Layout;
