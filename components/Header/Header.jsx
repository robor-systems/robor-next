import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="">
      <div className="container flex  justify-between  mx-auto px-8 py-6  sm:px-4">
        <Link href="/" passHref>
          <div className="flex h-6 w-auto cursor-pointer">
            <Image
              src="/assets/logos/robor-logo-light.png"
              alt="Robor logo"
              width="100%"
              height="100%"
              className="object-contain "
            />
          </div>
        </Link>

        <div className="flex gap-16 ">
          <Link href="/#projects">
            <a className="navlink">Projects</a>
          </Link>
          <Link href="/#team">
            <a className="navlink">Team</a>
          </Link>
          <Link href="/contact">
            <a className="navlink">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
