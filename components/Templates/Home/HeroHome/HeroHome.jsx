import { ChevronDownIcon } from "@heroicons/react/outline";
import { Button, Link } from "react-scroll";

const HeroHome = () => {
  return (
    <div
      className="
      h-screen 
      flex
      flex-col
      items-center
      justify-center
      gap-6
      relative

    "
    >
      <h1 className="font-semibold text-7xl">Welcome to Robor</h1>
      <h4 className="font-normal text-3xl max-w-2xl text-center">
        We specialise at developing web applications that help you build and
        scale your business.
      </h4>
      <button className="btn-primary btn-large mt-4">
        Request Appointment{" "}
      </button>

      <Link to="features-home" smooth offset={50}>
        <ChevronDownIcon
          className="
      absolute 
      bottom-5 
      h-10 
      w-10 
    text-gray-500 
      animate-pulse  
      hover:animate-none 
      transform-gpu 
      cursor-pointer
      transition-all
      hover:scale-125
      "
        />
      </Link>
    </div>
  );
};

export default HeroHome;
