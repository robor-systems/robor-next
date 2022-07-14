import Snackbar from "../Snackbar/Snackbar";

const { default: Footer } = require("components/Modules/Footer/Footer");
const { default: Header } = require("components/Modules/Header/Header");

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-light-bgPrimary dark:bg-dark-bgPrimary">
      <Header />
      {children}
      <Snackbar />
      <Footer />
    </div>
  );
};

export default Layout;
