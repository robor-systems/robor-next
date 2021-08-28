import { ImageNext } from "components/Elements";
import { Link } from "components/Elements";
import Container from "../Container/Container";
import NavLink from "./NavLink";
import logo from "public/assets/logos/robor-logo-light.png";

const Header = () => {
  return (
    <div className="absolute top-0 w-full">
      <Container>
        <div className="flex justify-between py-6">
          <Link href="/">
            <ImageNext
              blur={true}
              className="w-28 min-h-full cursor-pointer"
              src={logo}
              alt="Robor logo"
            />
          </Link>

          <div className="flex gap-16">
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
