import React, { useState, useEffect } from "react";
import { AiFillTwitterCircle, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaSun, FaMoon, FaWhatsapp, FaPlay } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Manikandan.pdf";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode);
    }
  }, []);

  const handleEmailButtonClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = "mailto:kavimanikandan27@gmail.com";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=kavimanikandan27@gmail.com",
        "_blank"
      );
    }
  };

  const handleWhatsappButtonClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = "https://wa.me/7823999388";
    } else {
      window.open(
        "https://web.whatsapp.com/send?phone=7823999388",
        "_blank"
      );
    }
  };

  // const handleDarkModeButtonClick = () => {
  //   setIsDarkMode(prevMode => {
  //     const newMode = !prevMode;
  //     localStorage.setItem("darkMode", JSON.stringify(newMode));
  //     return newMode;
  //   });
  // };

  return (
    <div id="home" className={`bg-gradient-to-r ${isDarkMode ? 'from-gray-800 to-gray-800' : 'from-green-200 to-blue-200'}`}>
      <div className="container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px] flex sm:flex-col-reverse sm:pt-0">
        <div className="left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2 data-aos="fade-up" className="text-5xl font-bold sm:text-[2rem]">
              Manikandan
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Freelancer", 2000]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p className="text-[1.1rem] font-medium w-3/4 md:w-full text-black sm:text-[.95rem]">
            Passionate web developer specializing in responsive design and user-friendly interfaces.
Let’s bring your vision to life with innovative solutions and cutting-edge technology.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">

            <a href={resumePDF} className="bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold hover:text-yellow-500"
              onClick={(event) => handleClick(event, resumePDF)}>
           <div className="flex items-center gap-1 relative">
              Resume view 
          </div>
           </a>

          <a href={resumePDF} className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-yellow-500" download>
            <div className="flex items-center gap-1 relative">
              <FiDownload />
            </div>
          </a>
          </div>

          <div className="icons flex mt-5">
            <ul data-aos="fade-up" data-aos-duration="1500" className="flex gap-5">
              <li>
                <a href="https://github.com/KaviMani09">
                  <AiFillGithub className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kavimanikandan09">
                  <FaLinkedinIn className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/roughed__boi__mani">
                  <AiFillInstagram className="h-[1.8rem] w-[1.8rem] text-[1rem] hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/@kaviMani0927">
                  <AiFillTwitterCircle className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[80%] w-fit flex items-center sm:items-end">
            <div className="h-[80%] md:h-[95%]">
              <img
                loading="lazy"
                className="image h-[450px] w-[450px] md:h-[300px] md:w-[300px] overflow-hidden object-cover md:m-auto sm:m-0"
                src="https://i.postimg.cc/VND9Cd9P/MANIKANDAN.png"
                alt="mine"
              />
            </div>
            <div className="absolute bottom-20 md:bottom-3 right-2 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000" className="relative cursor-pointer">
                <img
                  loading="lazy"
                  className="w-[120px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt="Full Stack Developer"
                />
                <FaPlay className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email button */}
      <div className="fixed bottom-10 right-10 sm:right-5 sm:bottom-5 bg-yellow-500 w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center rounded-full z-20 animate-bounce">
        <button data-aos="fade-up" data-aos-duration="1200" onClick={handleEmailButtonClick} className="box font-medium text-white flex items-start justify-center gap-1">
          <MdEmail className="rotate-[15deg] text-white text-3xl sm:text-2xl hover:scale-110 cursor-pointer" />
        </button>
      </div>

      {/* WhatsApp button */} 
      <div className="fixed bottom-28 right-10 sm:right-5 sm:bottom-20 bg-yellow-500 w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full z-20 animate-bounce">
        <button data-aos="fade-up" data-aos-duration="1200" onClick={handleWhatsappButtonClick} className="box font-medium text-white flex items-start justify-center gap-1">
          <FaWhatsapp className="rotate-[15deg] text-white text-3xl sm:text-2xl hover:scale-110 cursor-pointer" />
        </button>
      </div>

      {/* Dark mode button */}
      {/* <div className="fixed bottom-28 right-10 sm:right-5 sm:bottom-20 bg-yellow-500 w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full z-20 animate-bounce">
        <button data-aos="fade-up" data-aos-duration="1200" onClick={handleDarkModeButtonClick} className="box font-medium text-white flex items-start justify-center gap-1">
          {isDarkMode ? (
            <FaSun className="text-white text-3xl sm:text-2xl hover:scale-110 cursor-pointer" />
          ) : (
            <FaMoon className="text-white text-3xl sm:text-2xl hover:scale-110 cursor-pointer" />
          )}
        </button>
      </div> */}
    </div>
  );
};

export default Hero;
