import { ImageNext } from "components/Elements";
import { Link } from "components/Elements";
import Container from "../Container/Container";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="absolute z-20 top-0 w-full">
      <Container>
        <div className="flex justify-center py-6 sm:justify-between ">
          <Link href="/">
            <ImageNext
              className="w-28  sm:w-32 h-6 cursor-pointer"
              src={
                "https://robor-team.s3.eu-central-1.amazonaws.com/robor-logo.svg"
              }
              alt="Robor logo"
            />
          </Link>

          <div className="hidden gap-16 sm:flex">
            <NavLink href="projects" id>
              Projects
            </NavLink>
            <NavLink href="team" id>
              Team
            </NavLink>
            <NavLink href="contact">Contact</NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
