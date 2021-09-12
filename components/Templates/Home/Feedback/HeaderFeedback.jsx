const HeaderFeedback = () => {
  return (
    <div className="flex flex-col flex-1 gap-8 lg:gap-12  justify-center  text-center lg:text-left">
      <h1 className=" text-3xl sm:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r  from-primary-dark to-[#004f53]  bg-clip-text text-transparent">
        We would love to hear from you.
      </h1>

      <p className="text-lg sm:text-2xl lg:text-3xl">
        Whether you want to talk about ideas, get a quote for a work-item or just have a cup of joe, we&apos;re here to help.
      </p>
    </div>
  );
};

export default HeaderFeedback;
