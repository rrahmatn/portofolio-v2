import React, { useState, useEffect } from "react";
import Layout from '../../components/layout'
import 'animate.css';

const Work: React.FC = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

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
          <img src="/asets/img/cloud.png" className="min-w-max h-full md:-ml-[800px] -ml-[1000px] md:mx-0" style={{ translate: (scrollTop * 2.6 + 'px') }} />
          <img src="/asets/img/cloud.png" className="w-full h-fit  md:ml-[500px] -ml-40" style={{ translate: (-scrollTop * 2.9 + 'px') }} />
        </figure>
        <div className="w-full h-fit flex flex-shrink-0 flex-col overflow-hidden" id="workCover">
          <div className="w-full h-screen z-[4] animate__delay-2s animate__animated animate__fadeIn animate__slower	3s flex items-center text-center gap-1 text-white justify-center flex-col z-3 absolute ">
            <h1 className="xl:text-6xl text-4xl font-black tracking-widest mx-auto ">MY PROJECT</h1>
            <h2 className="h4 mx-auto">Swipe Down</h2>
          </div>
          <div className="w-screen h-fit min-h-screen xl:max-h-[800px] bg-fixed bg-center overflow-x-hidden overflow-y-hidden" style={{ backgroundImage: 'url(/asets/img/work/parallax/sky.png)' }} >
            <img src="/asets/img/work/parallax/sun.png" alt="mountain" className='w-full z-[3] xl:top-0 right-0 hidden xl:flex h-fit' style={{ transform: `translateX(${scrollTop * 3.11}px) translateY(${-scrollTop * 0.2}%) rotate(${scrollTop * 0.1}deg)` }} />
            <img src="/asets/img/work/parallax/sun.png" alt="mountain" className='w-full z-[3] xl:bottom-4 right-0 flex xl:hidden h-fit  ' style={{ transform: `translateX(${-scrollTop * 0.2}px) translateY(${scrollTop * 1.62}px) rotate(${scrollTop * 0.1}deg) scale(${scrollTop * 1.61}%)` }} />
            <img src="/asets/img/work/parallax/tree.png" alt="mountain" className='max-w-max items-center -mr-96 xl:-mr-0 z-40 h-1/2 mt-4 sm:hidden xl:grid xl:h-screen relative xl:-mt-[1200px]' style={{ transform: `translateX(${-scrollTop * 0.5}px)` }} />
            <img src="/asets/img/work/parallax/tree.png" alt="mountain" className='max-w-max items-center -ml-[410px] xl:-mr-0 z-40 h-1/2 xl:h-screen relative md:hidden -mt-[330px] xl:-mt-[1200px]' style={{ transform: `translateX(${scrollTop * 0.5}px)` }} />
            <img src="/asets/img/work/parallax/bird.png" alt="mountain" className='w-full xl:w-1/2 z-[40] top-0 h-fit mb-0 xl:-mt-[1000px]  -mt-[1000px] ' style={{ transform: `translateX(${scrollTop * 0.61}px) translateY(${scrollTop * 0.9}px)` }} />
            <img src="/asets/img/work/parallax/mountain2.png" alt="mountain" className='w-full z-[10] hidden xl:grid h-fit ' style={{ transform: `translateY(${scrollTop * 0.08}%) ` }} />
            <img src="/asets/img/work/parallax/bird2.png" alt="mountain" className='w-full z-40 xl:w-1/2 top-0 left-4 h-fit mb-0 xl:-mt-[800px] xl:ml-[1000px] ' style={{ transform: `translateX(${-scrollTop * 1.61}px) translateY(${-scrollTop * 0.5}px)` }} />
          </div>
          <div className="w-full h-fit min-h-screen flex flex-col bg-fixed bg-center z-10 bg-black overflow-x-hidden">
            .
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Work;