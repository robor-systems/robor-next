const { default: Footer } = require("components/Footer/Footer");
const { default: Header } = require("components/Header/Header");

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
