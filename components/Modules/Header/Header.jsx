import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="absolute top-0 w-full">
      <Container>
        <div className="flex justify-between py-6">
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
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#team">Team</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
