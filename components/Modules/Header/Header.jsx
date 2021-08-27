import { ImageNext } from "components/Elements";
import Link from "components/Elements/Link/Link";
import Container from "../Container/Container";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="absolute top-0 w-full">
      <Container>
        <div className="flex justify-between py-6">
          <Link href="/">
            <ImageNext
              className="min-h-full w-28   cursor-pointer"
              src="/assets/logos/robor-logo-light.png"
              alt="Robor logo"
            />
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
