import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import IconFooter from "./IconFooter";

const Footer = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between w-full gap-5 p-8 border dark:border-gray-700 md:flex-row">
      <div className="flex-1 text-lg sm:text-xl whitespace-nowrap">
        © Robor {new Date().getFullYear()}, All Rights Reserved
      </div>
      <div className="flex items-center gap-5 text-xl">
        <Link
          href="/qualityPolicy"
          className="text-light-primary dark:text-dark-primary"
        >
          Quality Policy
        </Link>
        <IconFooter link="https://github.com/robor-systems">
          <FiGithub className="text-light-primary dark:text-dark-primary" />
        </IconFooter>
        <IconFooter link="https://www.linkedin.com/company/robor-systems">
          <FiLinkedin className="text-light-primary dark:text-dark-primary" />
        </IconFooter>
        <IconFooter link="mailto:info@robor.systems">
          <FiMail className="text-light-primary dark:text-dark-primary" />
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
