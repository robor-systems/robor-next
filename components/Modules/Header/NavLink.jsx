import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <div>
      <Link href={href}>
        <a>
          <div className="flex flex-col gap-2  items-center group relative ">
            <div className="navlink ">{children}</div>
            <div className="absolute -bottom-2 w-0 opacity-0 h-1 bg-primary  rounded-lg group-hover:w-12 group-hover:opacity-100 transition-all ease-in-out duration-300 "></div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavLink;
