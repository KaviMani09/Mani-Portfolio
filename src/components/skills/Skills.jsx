import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import { IoLogoHtml5, IoLogoCss3, IoReactjs } from "react-icons/io";
import {
 SiBootstrap,
  SiGithub,
  SiMysql,
  SiPhp,
  SiVisualstudiocode,
  SiJavascript,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const SkillIcons = ({ icons }) => (
  <div className="circle">
    {icons.map((src, index) => (
      <span key={index} style={{ "--i": index + 1 }}>
        <img
          src={src}
          alt={`Skill icon for ${src.split("/").pop().split(".")[0]}`}
          height="75px"
        />
      </span>
    ))}
  </div>
);

const Skills = ({ darkMode }) => {
  const skillIcons = [
    "https://i.postimg.cc/c1XN6VxR/html-5.png",
    "https://i.postimg.cc/K8FLW4Vb/css3.png",
    "https://i.postimg.cc/X7rDv17q/javascript.png",
    "https://i.postimg.cc/pLyPV9WD/php.png",
    "https://i.postimg.cc/K8yvfcxL/MySQL.png",
    "https://i.postimg.cc/g013N4bS/React.png",
    "https://i.postimg.cc/T132mMNZ/Bootstrap.png",
    "https://i.postimg.cc/13BcwcdN/tailwind.png",
    "https://i.postimg.cc/1tqRrryK/Github-Dark.png",
    "https://i.postimg.cc/wxPHBqrJ/git.png",
    "https://i.postimg.cc/52B2js68/vscode.png",
    "https://i.postimg.cc/9f0KsM5z/XAMPP.webp",
    "https://i.postimg.cc/zXDpLtzK/canva.png",
    "https://i.postimg.cc/HxwmzfWs/netlify.png",
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
            <p className="text-gray-700 font-medium">Programming Language</p>

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
