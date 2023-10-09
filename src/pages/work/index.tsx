import React, { useState, useEffect } from "react";
import Layout from '../../components/layout'
import 'animate.css';
import project from "../../assets/json/project.json";
import { Project } from "../../types";
import { Link } from "react-router-dom";
import {FaGithubSquare} from "react-icons/fa";

const Work: React.FC = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [short, setShort] = useState<string>('website');

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  return (
    <>
      <Layout>
        <figure className="w-full h-full absolute z-10 overflow-hidden justify-between flex flex-row">
          <img src="/asets/img/cloud.png" className="min-w-max h-full md:-ml-[800px] -ml-[1000px] md:mx-0" style={{ translate: (scrollTop * 1.3 + 'px') }} />
          <img src="/asets/img/cloud.png" className="w-full h-fit  md:ml-[500px] -ml-40" style={{ translate: (-scrollTop * 1.4 + 'px') }} />
        </figure>
        <div className="w-full min-h-screen bg-black text-[#f9f5f5] flex-col overflow-x-hidden overflow-y-scroll" id="workCover">
          <div className="w-full h-screen z-[4] animate__delay-2s animate__animated animate__fadeIn animate__slower	3s flex items-center text-center gap-1 text-white justify-center flex-col z-3 absolute ">
            <h1 className="xl:text-6xl text-4xl font-black tracking-widest mx-auto drop-shadow-2xl ">MY PROJECT</h1>
            <h2 className="h4 mx-auto drop-shadow-2xl">Swipe Down</h2>
          </div>
          <div className="w-screen h-screen flex flex-col xl:max-h-[800px] bg-fixed bg-center overflow-x-hidden overflow-y-hidden" style={{ backgroundImage: 'url(/asets/img/work/parallax/sky.png)' }} >
            <img src="/asets/img/work/parallax/sun.png" alt="mountain" className='w-full z-[3] mb-40 -mt-[800px] right-0 xl:flex hidden h-fit  ' style={{ transform: `translateX(${-scrollTop * 0.2}px) translateY(${scrollTop * 2.22}px) rotate(${scrollTop * 0.1}deg) scale(${100 + scrollTop * 0.1}%)` }} />
            <img src="/asets/img/work/parallax/sun.png" alt="mountain" className='w-full z-[3] xl:bottom-4 right-0 flex xl:hidden h-fit  ' style={{ transform: `translateX(${-scrollTop * 0.2}px) translateY(${scrollTop * 1.22}px) rotate(${scrollTop * 0.1}deg) scale(${30 + scrollTop * 0.71}%)` }} />
            <img src="/asets/img/work/parallax/mountain2.png" alt="mountain" className='w-full z-[10] relative -mt-[450px] hidden xl:block h-fit ' style={{ transform: `translateY(${scrollTop * 0.08}%) ` }} />
            <img src="/asets/img/work/parallax/bird.png" alt="mountain" className='w-full xl:w-1/2 z-[12] top-0 h-fit relative mb-0 xl:-mt-[1000px] -mt-20 ' style={{ transform: `translateX(${scrollTop * 0.61}px) translateY(${scrollTop * 0.9}px)` }} />
            <img src="/asets/img/work/parallax/tree.png" alt="mountain" className='max-w-max items-center -ml-[410px]  xl:-mr-0 z-[13] h-1/2 xl:h-screen relative mt-10 xl:-mt-[50px]' style={{ transform: `translateX(${scrollTop * 0.2}px)` }} />
          </div>
          <div className="w-full md:pb-20 pb-8 h-fit pt-4 md:pt-20 z-30 flex flex-col bg-[#171f1f] overflow-x-hidden" style={{ opacity: `${scrollTop / 9}%` }} >
            <h1 className="h2 w-full px-3 md:px-20"><b className="h1 font-black px-3">#</b> Project</h1>
            <nav className="w-full flex py-4 px-2 md:justify-start md:px-20 md:gap-8 flex-row justify-between">
              <button className={`h4 w-fit px-3 py-2 border-b-2 ${short === "website" ?  "border-orange-500 text-orange-500" :"border-[#f9f5f5] text-[#f9f5f5]"} `} onClick={() => setShort('website')}>Websites</button>
              <button className={`h4 w-fit px-3 py-2 border-b-2 ${short === "aplication" ?  "border-orange-500 text-orange-500" :"border-[#f9f5f5] text-[#f9f5f5]"} `}  onClick={() => setShort('aplication')}>Aplication</button>
              <button className={`h4 w-fit px-3 py-2 border-b-2 ${short === "webDesign" ?  "border-orange-500 text-orange-500" :"border-[#f9f5f5] text-[#f9f5f5]"} `}  onClick={() => setShort('webDesign')}>Web Design</button>
            </nav>
            <div className="w-fit h-fit flex flex-row flex-wrap gap-x-4 gap-y-6 justify-center my-3 mx-auto px-2 ">
              {project.map((item: Project, index: number) => {

                return (
                  item.type === short &&
                  <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full" key={index}>
                    <figure><img src={`/asets/img/work/${item.thumbnail}`} alt="Project" /></figure>
                    <div className="card-body">
                      <h2 className="card-title tracking-wider">{item.title}</h2>
                      <p className="line-clamp-4 text-sm">{item.desc}</p>
                      <div className="card-actions justify-end">
                        <Link target="_blank" to={item.repo} className="btn btn-primary">View Repository</Link>
                      </div>
                    </div>
                  </div>
                ) 
              })}
            </div>
            <Link to="https://github.com/rrahmatn" target="_blank" className="flex flex-col md:flex-row h4 items-center mt-2 w-full md:px-20 gap-4 px-3"><h1>For More Project Visit My Github</h1><FaGithubSquare className="h1"/></Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Work;