import React, { useState } from 'react';
import Layout from '../../components/layout';
import Great from "../../assets/json/great.json";
import Tools from "../../assets/json/tools.json";
import Education from "../../assets/json/education.json"
import { FaHandsClapping, FaHtml5, FaCss3Alt, } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiMui, SiDaisyui, SiNextdotjs, SiReact, SiReactrouter, SiVite } from "react-icons/si";
import Parallax from '../../components/parallax';

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const newIndex = Math.floor(value / 20); // Mencari indeks baru setiap 20%

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const display = (currentIndex * 20 ) + 20;

 
  return (
    <>
      <Layout>
        <div className="w-full h-fit flex flex-col overflow-x-hidden">
          <div className="hero  overflow-x-hidden min-h-screen w-full h-fit bg-fixed p-0 justify-center md:items-end overflow-hidden md:-mt-14 -mt-0" style={{ backgroundImage: ('url(/asets/img/about/cover.jpg)') }}>
            <div className="hero-overlay w-screen bg-opacity-40"></div>
            <div className="hero-content h-full flex-col-reverse pt-20 p-0 w-full md:items-end md:justify-between z-20 md:px-2 md:flex-row-reverse ">
              <div className=" max-w-[260px] md:max-w-sm max-h-xs z-20 bg-cover -mt-8 md:-mt-0 bg-center flex justify-center items-center bg-blend-darken overflow-visible">
                <img src="/asets/img/about/almet.png" className="max-w-xs md:max-w-md z-20 rounded-lg shadow-md" />
              </div>
              <div>
                <div className="chat chat-start w-full md:w-auto gap-2 p-2 "  >
                  <div className="chat-image avatar ">
                    <div className="w-10 rounded-full shadow-2xl shadow-black " >
                      <img src="/asets/img/about/hero.jpg" />
                    </div>
                  </div>
                  <span className="chat-bubble h3 shadow-2xl shadow-black "> <h2 className='w-fit flex flex-row items-center gap-3'>Hello <FaHandsClapping /></h2></span>
                  {Great.map((items: string, index: number) => {
                    return (
                      <>
                        <div className="chat-image avatar " key={index}>
                          <div className="w-10 rounded-full shadow-2xl shadow-black ">
                            <img src="/asets/img/about/hero.jpg" />
                          </div>
                        </div>
                        <div className="chat-bubble h4 shadow-2xl shadow-black" >{items}</div>
                      </>
                    )
                  }
                  )}
                </div>
             </div>
            </div>
          </div>
          <div className="flex flex-col-reverse w-full md:flex-row-reverse h-fit  px-2 md:px-3 py-1 gap-1">
            <div className="artboard w-auto z-20 md:mr-3 md:w-[460px] bg-opacity-0 h-fit rounded-md bg-base-300 mx-auto flex-col p-2 gap-2">
              <span className='h4 font-medium flex flex-row gap-2 py-4'><h1 className='h2 font-extrabold'>#</h1> My Favorite Stack Tools</span>
              {Tools.map((item) => {
                return (
                  <>
                    <div className="collapse my-1 bg-base-200 bg-opacity-75 shadow-lg max-w-full">
                      <input type="radio" name='my-accordion-1' />
                      <div className="collapse-title h5 font-medium" key={item.id} >
                        {item.title}
                      </div>
                      <div className="collapse-content p px-5 ">
                        <p>{item.description}</p>
                      </div>
                    </div>

                  </>
                )
              })}
              <Parallax/>
            </div>
            <section className="mockup-window z-20 w-full h-fit border bg-base-300">
              <div className="flex flex-col justify-start items-start px-4 py-5 bg-base-200 ">
                <p className='p indent-9 text-justify'>I am a Front-End Engineer in Web Developer and also a student at the Sunan Gundung Djati State Islamic University, Bandung, majoring in Information Engineering, in January 2024 I will enter the final semester, with the concentration I am taking is Machine Learning, with JavaScript and TypeScript skills, I can use various types of frameworks, especially those on npmjs, including ReactJs, NextJs, TailwindCSS and many more, let me show you.</p>
                <h4 className='h4 my-2 font-semibold'>My Skills:</h4>
                <div className="w-full flex flex-row gap-x-14 md:gap-y-5 gap-y-3 flex-wrap">
                  <div className="flex flex-col flex-shrink-0">
                    <h5 className='h5 mb-2'>Programing Language</h5>
                    <span className="flex flex-row">
                      <span className="tooltip" data-tip="HTML5">
                        <button className="btn h1"><FaHtml5 /></button>
                      </span>
                      <span className="tooltip" data-tip="CSS">
                        <button className="btn h1"><FaCss3Alt /></button>
                      </span>
                      <span className="tooltip" data-tip="JavaScript">
                        <button className="btn h1">< SiJavascript /></button>
                      </span>
                      <span className="tooltip" data-tip="TypeScript">
                        <button className="btn h1">< SiTypescript /></button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col flex-shrink-0">
                    <h5 className='h5 mb-2'>Styling Tools / Library</h5>
                    <span className="grid grid-cols-4 ">
                      <span className="tooltip" data-tip="pure CSS">
                        <button className="btn h1"><FaCss3Alt /></button>
                      </span>
                      <span className="tooltip" data-tip="TailwindCSS">
                        <button className="btn h1">< SiTailwindcss /></button>
                      </span>
                      <span className="tooltip" data-tip="Bootstrap">
                        <button className="btn h1">< SiBootstrap /></button>
                      </span>
                      <span className="tooltip" data-tip="DiasyUI">
                        <button className="btn h1">< SiDaisyui /></button>
                      </span>
                      <span className="tooltip" data-tip="NextUI">
                        <button className="btn h1">< SiNextdotjs /></button>
                      </span>
                      <span className="tooltip" data-tip="MaterialUI">
                        <button className="btn h1">< SiMui /></button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col flex-shrink-0">
                    <h5 className='h5 mb-2'>Library and Framework</h5>
                    <span className="flex flex-row">
                      <span className="tooltip" data-tip="ReactJS">
                        <button className="btn h1"><SiReact /></button>
                      </span>
                      <span className="tooltip" data-tip="NextJS">
                        <button className="btn h1"><SiNextdotjs /></button>
                      </span>
                      <span className="tooltip" data-tip="Vite">
                        <button className="btn h1">< SiVite /></button>
                      </span>
                      <span className="tooltip" data-tip="React Router">
                        <button className="btn h1">< SiReactrouter /></button>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="hero min-h-screen w-full bg-fixed" style={{ background: ('url(/asets/img/about/bg.jpg)'), backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content w-full h-full text-center items-center text-neutral-content">
              <div className="max-w-full h-full bg-base-300 bg-opacity-30 shadow-lg items-center justify-center w-full md:w-1/2 gap-7 flex flex-col">
                <h3 className="h3 font-semibold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">My Education</h3>
                <img
                  src={`/asets/img/about/education/${Education[currentIndex].picture ? Education[currentIndex].picture : '/asets/img/about/education/kuliah.png'}`}
                  alt="education"
                  className="w-auto overflow-hidden h-60 md:h-80 mx-auto bg-base-300 bg-opacity-80 rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] "
                />
                <h4 className="h3 font-bold h-16 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">{Education[currentIndex].title}</h4>
                <input
                  type="range"
                  min={0}
                  max={91}
                  className="range range-primary justify-self-end drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                  onChange={handleInputChange}
                  value={display ? display : 20}
                />
                <div className="w-full h-3 h5 items-center flex justify-center"> Swipe For More </div>
              </div>
            </div>
          </div>
          
        </div>
      </Layout>
    </>
  )
}

export default About