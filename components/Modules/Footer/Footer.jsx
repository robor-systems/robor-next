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
        <IconFooter>
          <FiGithub />
        </IconFooter>
        <IconFooter>
          <FiLinkedin />
        </IconFooter>
        <IconFooter>
          <FiMail />
        </IconFooter>
        <IconFooter>
          <FiTwitter />
        </IconFooter>
        <IconFooter>
          <FiInstagram />
        </IconFooter>
      </div>
    </div>
  );
};

export default Footer;
