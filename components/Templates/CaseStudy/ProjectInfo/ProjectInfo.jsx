const ProjectInfo = ({ info }) => {
  return (
    <div className=" px-10 py-10 md:px-10 xl:px-40 bg-light-bgSecondary dark:bg-dark-bgSecondary text-light-contentSecondary dark:text-dark-contentSecondary">
      <div className="container grid sm:grid-cols-6 gap-y-6 sm:gap-x-10 sm:gap-y-10 mx-auto ">
        {/* * Client size */}
        <div className="flex flex-col justify-center col-span-3 md:col-span-2 lg:col-span-1">
          <h4 className="project-info-heading">Client size</h4>
          <p className="project-info-content">{info?.clientSize}</p>
        </div>
        {/* * Location */}
        <div className="flex flex-col justify-center col-span-3 md:col-span-2 lg:col-span-2">
          <h4 className="project-info-heading">Location</h4>
          <p className="project-info-content">{info?.location}</p>
        </div>
        {/* * Services */}
        <div className="flex flex-col justify-center col-span-full lg:col-span-3">
          <h4 className="project-info-heading">Services</h4>
          <p className="project-info-content break-words">{info?.services}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
