import React from "react";
import WorkCard from "../../chip/WorkCard";

const Projects= () => {
  return (
    <div id="Projects" className="container m-auto mt-16">
      {/* heading */}
      <div 
      data-aos="fade-up"
       className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Projects</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div 
      data-aos="fade-up"
       className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
         <a href="https://github.com/KaviMani09">Click More Projects Github </a>
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[100%] sm:w-full mt-5">
      <div className="card-box flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-12 sm:grid-cols-1 sm:space-y-0 ">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;






