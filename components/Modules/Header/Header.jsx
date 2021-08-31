import { ImageNext } from "components/Elements";
import { Link } from "components/Elements";
import Container from "../Container/Container";
import NavLink from "./NavLink";
import logo from "public/assets/logos/robor-logo-light.png";

const Header = () => {
  return (
    <div className="absolute z-20 top-0 w-full">
      <Container>
        <div className="flex justify-center py-6 sm:justify-between">
          <Link href="/">
            <ImageNext
              blur={true}
              className="w-32 h-6 cursor-pointer"
              src={logo}
              alt="Robor logo"
            />
          </Link>

          <div className="hidden gap-16 sm:flex">
            <NavLink href="/?section=projects">Projects</NavLink>
            <NavLink href="/?section=team">Team</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
