import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Tools from "../../assets/json/tools.json";
import Education from "../../assets/json/education.json";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import {
  SiMysql,
  SiMongodb,
  SiSvelte,
  SiJsonwebtokens,
  SiPassport,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiDaisyui,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiVite,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsGithub, BsGit } from "react-icons/bs";
import { FaGolang, FaDocker } from "react-icons/fa6";
import Parallax from "../../components/parallax";
import Parallax2 from "../../components/parallax2";
import { Link } from "react-router-dom";
import whosme from "../../assets/json/whosme.json";
import { Whosme } from "../../types";

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const newIndex = Math.floor(value / 20); // Mencari indeks baru setiap 20%

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const display = currentIndex * 20 + 20;
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Layout>
        <div className="w-screen  h-fit flex flex-col overflow-hidden">
          <div className="hero md:h-screen overflow-x-hidden min-h-screen w-full h-fit bg-fixed p-0 justify-center md:items-center overflow-hidden md:pt-12 -mt-0 ">
            <div className="hero-overlay w-screen bg-opacity-40"></div>
            <div className="hero-content h-full flex-col md:px-12 pt-40 px-3 justify-center w-full md:items-center md:justify-between z-20  md:flex-row-reverse ">
              <div className="w-72 h-72 md:w-96 md:h-96 z-20 rounded-full bg-blend-darken bg-[#ac7c58] -mt-10 md:-mt-0 justify-center flex items-end  overflow-visible">
                <img
                  src="/asets/img/about/cover.png"
                  alt="rrahmatn"
                  className="w-[520px] absolute h-fit  z-20 rounded-b-full"
                />
                <img
                  src="/asets/img/ellipse.png"
                  alt="rrahmatn"
                  className="z-10 w-24 relative -ml-20 mt-32  my-auto right-0"
                  style={{
                    transform: `translateX(${scrollTop * 0.11}px) scale(${
                      100 + scrollTop * 0.11
                    }%)`,
                  }}
                />
                <img
                  src="/asets/img/polygon.png"
                  alt="rrahmatn"
                  className="z-30 w-28  absolute   mb-12 my-auto  right-20"
                  style={{ transform: `rotate(${25 + scrollTop * 1.2}deg)` }}
                />
                <img
                  src="/asets/img/ellipse2.png"
                  alt="rrahmatn"
                  className="z-10 -mt-3 ml-8 -mr-2 w-40 my-auto relative right-0"
                  style={{
                    transform: `translateX(${-scrollTop * 0.11}px) translateY(${
                      scrollTop * 0.02
                    }%) rotate(${11 + scrollTop * 0.22}deg) scale(${
                      100 + scrollTop * 0.08
                    }%)`,
                  }}
                />
              </div>
              <section className="max-w-xl pl-2 md:gap-3 gap-1 md:mx-0 mx-auto z-10 md:px-10 grid">
                <h2 className=" h2 font-semibold drop-shadow-lg text-amber-600">
                  Rizky Rahmat Nugraha
                </h2>
                <h1 className="mb-3 h font-bold">Front-End Developer</h1>
                <summary className="mb-5 list-none drop-shadow-md md:px-0 pr-10 text-sm">
                  I am a Front-End Engineer in Web Developer and also a student
                  at the Sunan Gundung Djati State Islamic University, Bandung,
                  majoring in Information Engineering, in January 2024 I will
                  enter the final semester, with the concentration I am taking
                  is Machine Learning, with JavaScript and TypeScript skills, I
                  can use various types of frameworks, especially those on
                  npmjs, including ReactJs, NextJs, TailwindCSS and many more,
                  let me show you.
                </summary>
              </section>
            </div>
          </div>
          <Parallax2 />
          <div className="w-screen flex flex-col-reverse overflow-hidden md:flex-row-reverse h-fit  px-2 md:px-3 py-1 gap-1">
            <div className="artboard w-auto z-20 md:mr-3 md:w-[460px] bg-opacity-0 h-fit rounded-md bg-base-300 mx-auto flex-col p-2 gap-2">
              <span className="h4 font-medium flex flex-row gap-2 py-4">
                <h1 className="h2 font-extrabold">#</h1> My Favorite Stack Tools
              </span>
              {Tools.map((item) => {
                return (
                  <>
                    <div className="collapse my-1 bg-base-200 bg-opacity-75 shadow-lg max-w-full">
                      <input type="radio" name="my-accordion-1" />
                      <div
                        className="collapse-title h5 font-medium"
                        key={item.id}
                      >
                        {item.title}
                      </div>
                      <div className="collapse-content p px-5 ">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <Parallax />
            <section className="mockup-window md:w-2/3 z-20 w-auto  h-fit border  bg-base-300">
              <div className="flex flex-col justify-start items-start md:pl-10 mx-auto px-4 py-5 bg-base-200 ">
                <h4 className="h4 my-4 font-semibold">My Skills:</h4>
                <div className="w-full flex flex-row gap-x-20 md:gap-y-10 gap-y-5 flex-wrap">
                  <div className="flex flex-col min-w-[270px] flex-shrink-0">
                    <h5 className="h5 mb-2">Basic</h5>
                    <span className="grid grid-cols-3">
                      <span className="tooltip" data-tip="HTML5">
                        <button className="btn h1">
                          <FaHtml5 />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="CSS">
                        <button className="btn h1">
                          <FaCss3Alt />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col min-w-[270px] flex-shrink-0">
                    <h5 className="h5 mb-2">Programing Language</h5>
                    <span className="grid grid-cols-3">
                      <span className="tooltip" data-tip="JavaScript">
                        <button className="btn h1">
                          <SiJavascript />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="TypeScript">
                        <button className="btn h1">
                          <SiTypescript />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Golang">
                        <button className="btn h1">
                          <FaGolang />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col min-w-[270px] flex-shrink-0">
                    <h5 className="h5 mb-2">Styling Tools / Library</h5>
                    <span className="grid grid-cols-3 ">
                      <span className="tooltip" data-tip="pure CSS">
                        <button className="btn h1">
                          <FaCss3Alt />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="TailwindCSS">
                        <button className="btn h1">
                          <SiTailwindcss />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Bootstrap">
                        <button className="btn h1">
                          <SiBootstrap />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="DiasyUI">
                        <button className="btn h1">
                          <SiDaisyui />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="NextUI">
                        <button className="btn h1">
                          <SiNextdotjs />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="MaterialUI">
                        <button className="btn h1">
                          <SiMui />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col min-w-[270px] flex-shrink-0">
                    <h5 className="h5 mb-2">Front-End Library/Framework</h5>
                    <span className="grid grid-cols-3">
                      <span className="tooltip" data-tip="ReactJS">
                        <button className="btn h1">
                          <SiReact />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="NextJS">
                        <button className="btn h1">
                          <SiNextdotjs />
                        </button>
                      </span>

                      <span className="tooltip" data-tip="Svelte">
                        <button className="btn h1">
                          <SiSvelte />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="React Router">
                        <button className="btn h1">
                          <SiReactrouter />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col min-w-[270px] flex-shrink-0">
                    <h5 className="h5 mb-2">Back-End Library/Framework</h5>
                    <span className="grid grid-cols-3">
                      <span className="tooltip" data-tip="NestJS">
                        <button className="btn h1">
                          <SiNestjs />
                        </button>
                      </span>

                      <span className="tooltip" data-tip="ExpressJS">
                        <button className="btn h1">
                          <SiExpress />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Jsonwebtoken">
                        <button className="btn h1">
                          <SiJsonwebtokens />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Passport">
                        <button className="btn h1">
                          <SiPassport />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col min-w-[270px] flex-shrink-0">
                    <h5 className="h5 mb-2">Databases</h5>
                    <span className="grid grid-cols-3">
                      <span className="tooltip" data-tip="MySql">
                        <button className="btn h1">
                          <SiMysql />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Postgresql">
                        <button className="btn h1">
                          <BiLogoPostgresql />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="MongoDB">
                        <button className="btn h1">
                          <SiMongodb />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col min-w-[270px] flex-shrink-0">
                    <h5 className="h5 mb-2">Other</h5>
                    <span className="grid grid-cols-3">
                      <span className="tooltip" data-tip="Vite">
                        <button className="btn h1">
                          <SiVite />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="GitHub">
                        <button className="btn h1">
                          <BsGithub />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Git">
                        <button className="btn h1">
                          <BsGit />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Docker">
                        <button className="btn h1">
                          <FaDocker />
                        </button>
                      </span>
                      <span className="tooltip" data-tip="Prisma">
                        <button className="btn h1">
                          <SiPrisma />
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
                <h3 className="h4 pl-3 mt-8">and others. </h3>
              </div>
            </section>
          </div>
          <div
            className="hero min-h-screen w-full bg-fixed"
            style={{
              background: "url(/asets/img/about/bg.jpg)",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content w-full h-full text-center items-center text-neutral-content">
              <div className="max-w-full h-full bg-base-300  bg-opacity-30 shadow-lg items-center justify-center w-full md:w-1/2 gap-7 flex flex-col">
                <h3 className="h3 font-semibold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                  My Education
                </h3>
                <img
                  src={`/asets/img/about/education/${
                    Education[currentIndex].picture
                      ? Education[currentIndex].picture
                      : "/asets/img/about/education/kuliah.png"
                  }`}
                  alt="education"
                  className="w-auto overflow-hidden h-60 md:h-80 mx-auto z-10 bg-base-300 rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] "
                />
                <h4 className="h3 font-bold h-16 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                  {Education[currentIndex].title}
                </h4>
                <input
                  type="range"
                  min={0}
                  max={91}
                  className="range range-primary z-20 justify-self-end drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                  onChange={handleInputChange}
                  value={display}
                />
                <div className="w-full h-3 h5 items-center flex justify-center">
                  {" "}
                  Swipe For More{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col px-3 md:px-20 my-2">
            <span className="w-full px-2  h3 flex flex-row font-semibold my-4 items-center gap-1">
              {" "}
              <b className="h2 font-bold">#</b> Who/How do people think I am?{" "}
            </span>
            <div className="w-full h-fit md:w-1/2 gap-2 flex-col">
              {whosme.map((item: Whosme, index: number) => {
                return (
                  <Link
                    to={`https://instagram.com/${item.instagram}`}
                    target="_blank"
                    className="w-full my-2 "
                    key={index}
                  >
                    <div className="chat chat-start">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full shadow-2xl overflow-hidden">
                          <img
                            src={`/asets/img/about/${
                              item.gender === "female"
                                ? "female.jpg"
                                : "male.jpg"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="chat-header drop-shadow-md font-semibold ">
                        {item.name}
                      </div>
                      <div className="chat-bubble shadow-xl">{item.text}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="w-full px-2 h3 my-3 justify-center  flex flex-row items-center gap-2">
              want to judge who I am?
            </div>
            <Link
              to="https://t.me/rrahmatn"
              target="_blank"
              className="w-1/2 md:w-1/2 mx-auto justify-center border-2 border-current rounded-md px-2 h3 flex flex-row items-center gap-2"
            >
              Send Here{" "}
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
