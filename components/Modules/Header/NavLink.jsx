import { useRouter } from "next/router";
import { animateScroll, scroller } from "react-scroll";

const NavLink = ({ href, children, id }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (router.pathname === "/" && id)
          scroller.scrollTo(href, { smooth: true });
        router.push(`/${id ? `#${href}` : href}`);
      }}
      className="cursor-pointer"
    >
      <div className="group w-fit relative flex flex-col gap-2 items-center">
        <div className="navlink">{children}</div>
        <div className="absolute -bottom-2 w-0 group-hover:w-full h-1 bg-light-primary dark:bg-dark-primary rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
      </div>
    </div>
  );
};

export default NavLink;
