import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import IconFooter from "./IconFooter";

const Footer = () => {
  return (
    <div className="w-full border flex justify-between p-8 items-center flex-col-reverse  gap-5 md:flex-row">
      <div className=" text-lg sm:text-xl flex-1 whitespace-nowrap">
        © Robor {new Date().getFullYear()}, All Rights Reserved
      </div>

      <div className="text-xl flex  items-center gap-5">
        <IconFooter link="https://github.com/robor-systems">
          <FiGithub />
        </IconFooter>
        <IconFooter link="https://www.linkedin.com/company/robor-systems">
          <FiLinkedin />
        </IconFooter>
        <IconFooter link="mailto:info@robor.systems">
          <FiMail />
        </IconFooter>
        {/* <IconFooter>
          <FiTwitter />
        </IconFooter>
        <IconFooter>
          <FiInstagram />
        </IconFooter> */}
      </div>
    </div>
  );
};

export default Footer;
