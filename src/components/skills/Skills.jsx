import React from "react";
import ProgressBar from "../../chip/ProgressBar"; 
import SkillBox from "../../chip/SkillBox"; 
import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiBootstrap, SiGithub, SiMysql, SiPhp, SiVisualstudiocode, SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const SkillIcons = ({ icons }) => (
  <div className="circle">
    {icons.map((src, index) => (
      <span key={index} style={{ "--i": index + 1 }}>
        <img src={src} alt={`Skill icon for ${src.split('/').pop().split('.')[0]}`} height="75px" />
      </span>
    ))}
  </div>
);

const Skills = ({ darkMode }) => {
  const skillIcons = [
    "src/assets/asset/SVGIcons/html-5.svg",
    "src/assets/asset/SVGIcons/css3.svg",
    "src/assets/asset/SVGIcons/javascript.svg",
    "src/assets/asset/SVGIcons/php.png",
    "src/assets/asset/SVGIcons/MySQL.png",
    "src/assets/asset/SVGIcons/React.svg",
    "src/assets/asset/SVGIcons/tailwind.png",
    "src/assets/asset/SVGIcons/Bootstrap.svg",
    "src/assets/asset/SVGIcons/Github-Dark.svg",
    "src/assets/asset/SVGIcons/git.png",
    "src/assets/asset/SVGIcons/XAMPP.webp",
    "src/assets/asset/SVGIcons/vscode.png",
    "src/assets/asset/SVGIcons/canva.png",
  ];

  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
         {/* Content */}
         <div data-aos="fade-up" className="flex">
          <div className="left flex-1 w-full">
            <p className="text-gray-700 font-medium">
              Programming Language
            </p>

            {/* Left box */}
            <div className="body-part-2">
              <div className="hoodie-guy-animation-class">
                <div className="hoodie-guy"></div>
              </div>
              <div className="background-circle"></div>
            </div>
          </div>

          {/* Right box */}
          <SkillIcons icons={skillIcons} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
