import { Link } from "@/components/Elements";

const NavLink = ({ href, children }) => {
  return (
    <div>
      <Link href={href}>
        <div className="group relative flex flex-col gap-2 items-center">
          <div className="navlink">{children}</div>
          <div className="absolute -bottom-2 w-0 group-hover:w-12 h-1 bg-primary rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
        </div>
      </Link>
    </div>
  );
};

export default NavLink;
