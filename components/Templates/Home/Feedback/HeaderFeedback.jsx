const HeaderFeedback = () => {
  return (
    <div className="flex flex-col justify-center flex-1 gap-8 text-center lg:gap-12 lg:text-left">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-[2.5rem] sm:leading-[4.25rem] lg:leading-[5.75rem] font-extrabold bg-gradient-to-r from-primary-dark dark:from-[#FEFEFE] to-[#004f53] dark:to-[#F3F7F9] bg-clip-text text-transparent ">
        We would love to hear from you.
      </h1>

      <p className="text-lg font-light leading-7 sm:text-2xl">
        Whether you want to talk about ideas, get a quote for a work-item or
        just have a cup of joe, we&apos;re here to help.
      </p>
    </div>
  );
};

export default HeaderFeedback;
