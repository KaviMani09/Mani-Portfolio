import React, { useState } from "react";
import { RiLink } from "react-icons/ri";
import { Link } from "react-router-dom";

const Studies = () => {
  const [currentEducationSlide, setCurrentEducationSlide] = useState(0);
  const [currentexperienceSlide, setCurrentexperienceSlide] = useState(0);

  const experience = [
    {
      title: "Experiences",
      head: "",
      link: "",
      date: "June 2023",
      description: (
        <ul>
          <li>
            <strong>Experiences :</strong> Developed and deployed dynamic web
            applications using <b>Html, Css, JavaScript, Php, Bootstrap, React js</b>.
            Designed and managed databases with <b>MYSQL</b>, optimizing data storage
            and retrieval. Integrated third-party APIs and services to enhance
            application functionality and user experience. Collaborated with
            cross-functional on Freelancr projects, ensuring timely delivery an
            client satisfaction. Implemented responsive design principles to
            ensure compatibility across various devices and browsers.
            Implemented version control using Git with VS Code to manage code
            changes and maintain project history. ,
          </li>
        </ul>
      ),
    },
    {
      title: "Certificate",
      head: "",
      link: "Full Stack Developer",
      date: "04 March 2024",
      description: (
    <img  className="h-[250px] w-[450px] " src="https://i.postimg.cc/B6CBF1vv/photo-2024-09-26-18-04-33.jpg" />
      ),
    },
  ];

  const education = [
    {
      title: "B.sc, Computer Science",
      head: "Tirukkoilur College of Art's & Science",
      date: "Year 2020 - Year 2023",
      description: (
        <ul>
          <li>
            <strong>COLLEGE :</strong> I Did Completed My Bachelor Of Computer
            Science in Tirukkoilur College of Art’s & science Tirukkoilur{" "}
          </li>
          <li>
            <strong>UNIVERSITY : </strong> Thiruvallur University (vellore){" "}
          </li>
          <li>
            <strong>PERCENTAGE : </strong> ( 76% )
          </li>
          <li>
            <strong>COURSE WORK </strong>
          </li>
          <li>
            <strong>YEAR OF COMPLETION : </strong> 2023 ( Four Months )
          </li>
          <li>
            <strong>FRONTEND :</strong> HTML, CSS, Javascript
          </li>
          <li>
            <strong>BACKEND :</strong> PHP{" "}
          </li>
          <li>
            <strong>DATABASE TECHNOLOGIES :</strong> MYSQL
          </li>
        </ul>
      ),
    },
    {
      title: "Schools",
      head: " Government School",
      date: "Year 2018 - Year 2020",
      description: (
        <ul>
          <li>
            <strong>HSC TWELFTH : </strong> Kabilar Boy's Higher Secondary
            School Tirukkoilur
          </li>
          <li>
            <strong>GROUP : </strong> Computer Science
          </li>
          <li>
            <strong>Percentage : </strong> 60%{" "}
          </li>
          <li>
            <strong>HSC ELEVENTH : </strong> Kabilar Boy's Higher Secondary
            School Tirukkoilur
          </li>
          <li>
            <strong>GROUP : </strong> Computer Science
          </li>
          <li>
            <strong>Percentage : </strong> 50%
          </li>
          <li>
            <strong>SSLC TENTH : </strong> Government High School kodukkapattu
          </li>
          <li>
            <strong>Percentage : </strong> 70%
          </li>
        </ul>
      ),
    },
  ];

  const handlePreviousexperienceSlide = () => {
    setCurrentexperienceSlide((prev) =>
      prev === 0 ? experience.length - 1 : prev - 1
    );
  };

  const handleNextexperienceSlide = () => {
    setCurrentexperienceSlide((prev) =>
      prev === experience.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousEducationSlide = () => {
    setCurrentEducationSlide((prev) =>
      prev === 0 ? education.length - 1 : prev - 1
    );
  };

  const handleNextEducationSlide = () => {
    setCurrentEducationSlide((prev) =>
      prev === education.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div id="Studies">
      <div className="container m-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            Studies
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
        </div>
        <div data-aos="fade-up" className="left flex-1 w-full">
          <p className="text-gray-700 font-medium w-[100%]">
            Here are my experiences and qualifications.
          </p>
        </div>
        {/* card */}
        <div className="card-wrapper w-[100%] sm:w-full mt-5  flex md:flex-col sm:gap-5 mx-auto">
          <div className="left flex-1 flex items-center justify-center">
            <fieldset
              data-aos="zoom-in"
              className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-3"
            >
              <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
                EXPERIENCES
              </legend>
              <div className="relative ">
                <div className="card-wrapper w-[100%] sm:w-full  flex flex-col items-center mx-auto">
                  <div className="relative w-full flex items-center justify-center overflow-hidden">
                    <div className="carousel-container w-full sm:w-full overflow-hidden">
                      <div
                        className="carousel-inner flex transition-transform duration-500"
                        style={{
                          transform: `translateX(-${
                            currentexperienceSlide * 100
                          }%)`,
                        }}
                      >
                        {experience.map((exp, index) => (
                          <div
                            className="carousel-item w-full flex-shrink-0"
                            key={index}
                          >
                            <div className="flex flex-col gap-1 sm:gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                {exp.title}
                              </h1>
                              <h1 className="text-[1.4rem] font-semibold text-gray-500 sm:text-xl">
                                {exp.head}
                              </h1>
                              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                                {exp.date}
                              </span>
                              <p className="text-[.9rem] text-justify break-words text-gray-500">
                                {exp.description}
                              </p>
                              {exp.image && (
                                <img
                                  src={exp.image}
                                  alt={`${exp.title} image`}
                                  className="mt-2 w-full h-auto rounded-lg"
                                />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={handlePreviousexperienceSlide}
                      className="button left-button"
                    >
                      &#9664;
                    </button>
                    <button
                      onClick={handleNextexperienceSlide}
                      className="button right-button"
                    >
                      &#9654;
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          {/* Education Section */}
          <div className="left flex-1 flex items-center justify-center">
            <fieldset
              data-aos="zoom-in"
              className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
            >
              <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
                EDUCATION
              </legend>
              <div className="relative ">
                <div className="card-wrapper w-[100%] sm:w-full  flex flex-col items-center mx-auto">
                  <div className="relative w-full flex items-center justify-center overflow-hidden">
                    <div className="carousel-container w-full sm:w-full overflow-hidden">
                      <div
                        className="carousel-inner flex transition-transform duration-500"
                        style={{
                          transform: `translateX(-${
                            currentEducationSlide * 100
                          }%)`,
                        }}
                      >
                        {education.map((edu, index) => (
                          <div
                            className="carousel-item w-full flex-shrink-0"
                            key={index}
                          >
                            <div className="flex flex-col gap-1 sm:gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                {edu.title}
                              </h1>
                              <h1 className="text-[1.4rem] font-semibold text-gray-500 sm:text-xl">
                                {edu.head}
                              </h1>
                              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                                {edu.date}
                              </span>
                              <p className="text-[.9rem] text-justify break-words text-gray-500">
                                {edu.description}
                              </p>
                              {edu.image && (
                                <img
                                  src={edu.image}
                                  alt={`${edu.title} image`}
                                  className="mt-2 w-full h-auto rounded-lg"
                                />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={handlePreviousEducationSlide}
                      className="button left-button"
                    >
                      &#9664;
                    </button>
                    <button
                      onClick={handleNextEducationSlide}
                      className="button right-button"
                    >
                      &#9654;
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;












