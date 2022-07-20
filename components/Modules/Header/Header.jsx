import DarkModeToggleButton from "@/components/Elements/DarkModeToggleButton/DarkModeToggleButton";
import RoborLogo from "@/components/Icons/RoborLogo";
import { Link } from "components/Elements";
import Container from "../Container/Container";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="absolute top-0 z-20 w-full">
      <Container>
        {/* * we want to use css grid that has a logo on the left side */}
        {/* * and the content on the right side */}
        <div className="grid grid-cols-5 gap-2 p-6">
          {/* * Left side will span 2 columns and have the link logo */}
          <div className="flex justify-between col-span-4 md:col-span-1 lg:col-span-2 xl:col-span-3 sm:justify-between">
            <Link href="/">
              <RoborLogo />
            </Link>
          </div>
          {/* * Right content will have links and the dark mode toggle button */}
          <div className="flex items-center justify-end col-span-1 md:col-span-4 xl:col-span-2 md:justify-between md:space-x-12 lg:col-span-3">
            <div className="hidden md:gap-8 lg:gap-12 md:flex">
              <NavLink href="services" id>
                Services
              </NavLink>
              <NavLink href="clients" id>
                Clients
              </NavLink>
              <NavLink href="team" id>
                Team
              </NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>
            <div className="flex">
              <DarkModeToggleButton variant="icon" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
