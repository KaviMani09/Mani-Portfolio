import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const About = () => {
  const experiences = [
    { title: "Experience", years: "0+ years", icon: <GiSandsOfTime className="text-yellow-500 text-3xl ml-7" /> },
    { title: "Projects", years: "15+ completed", icon: <MdWork className="text-yellow-500 text-3xl ml-7" /> },
    { title: "Support", years: "24/7", icon: <AiOutlinePhone className="text-yellow-500 text-3xl ml-5" /> },
  ];

  return (
    <div id="About">
      <div className="container m-auto mt-16 ">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
        About
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my Introduction.
        </p>
      </div>
      {/* Card Wrapper */}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-9 flex items-center justify-center sm:flex-col">
        {/* Left Section */}
        <div className="summary mr-16">
          <img className="h-[250px] w-[250px] " src="https://i.postimg.cc/VND9Cd9P/MANIKANDAN.png" alt="K. Manikandan's Profile" />
          <div data-aos="zoom-in" className="flex items-center mt-6">
            <FaUser className="text-yellow-500 text-3xl mr-6" />
            <h1 className="text-3xl font-bold">MY SELF</h1>
          </div>
          <p>
            I’m K. Manikandan, a recent graduate with a Bachelor’s degree in Computer Science seeking a Full Stack Developer position to utilize my skills in front-end and back-end development and kickstart my career in software development.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex p-5 items-center justify-center mr-20">
          <button
            data-aos="zoom-in"
            aria-label="Learn more about my background and skills"
            className="text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] bg-white">
            <BsArrowRight className="md:rotate-90" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center sm:w-full">
          <div className="card flex gap-4 ">
            {experiences.map((exp, index) => (
              <div key={index} className="box-1 text-center">
                {exp.icon}
                <big>{exp.title}</big>
                <p>{exp.years}</p>
              </div>
            ))}
          </div>
<br /><br />
          <div className="summary  ml-11">
            <h2>
              Full Stack Developer Fresher with a strong foundation in HTML, CSS, JavaScript, PHP, and MySQL. Eager to contribute to innovative web projects and continually expand my skill set to create dynamic and user-friendly applications. Ready to join immediately!
            </h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;







