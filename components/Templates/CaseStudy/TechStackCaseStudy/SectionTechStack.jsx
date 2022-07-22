import { v4 } from "uuid";

const SectionTechStack = ({ title, stack }) => {
  return (
    <div className="col-span-1 space-y-4 md:col-span-1">
      <h5 className="font-semibold text-xl pb-[10px] border-b-2 text-light-content dark:text-dark-content border-[#A0A8BB]">
        {title}
      </h5>
      {/* * stack */}
      <ul className="list-none list-inside">
        {stack.map((item, index) => (
          <li
            key={v4()}
            className="text-sm font-light md:text-lg text-light-contentSecondary dark:text-dark-contentSecondary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionTechStack;
