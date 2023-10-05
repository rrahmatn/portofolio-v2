/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Stack from '../components/stacks'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { HiCursorArrowRipple } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import Activity from "../assets/json/activity.json";
import Hireme from "../assets/json/hireme.json";
import "./style.css"
import Card from '../components/card';
import Parallax from '../components/parallax';

const Home: React.FC = () => {
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
                <div className="flex min-h-screen flex-col w-screen overflow-hidden items-center gap-2">
                    <div className="hero max-w-full min-h-screen overflow-x-hidden bg-blend-color-burn bg-pan-right" style={{ backgroundImage: 'url(/asets/img/ceria.jpg)' }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content overflow-hidden overflow-x-hidden text-left items-end md:items-center md:justify-between  md:p-0 pb-12 max-w-full w-full h-screen text-neutral-content">
                            <div className="max-w-xl  md:gap-3 gap-1 z-10 md:px-10 grid">
                                <h2 className=" h2 font-semibold drop-shadow-lg text-amber-600">Hi , I am Rahmat.</h2>
                                <h1 className='mb-3 h font-bold'>Front-End Developer</h1>
                                <summary className="mb-5 list-none drop-shadow-md h5 md:px-0 pr-10 ">I am from Indonesia and I am a final semester student of <b className='text-green-600'>Informatics Engineering </b> at the <b className='text-green-600'>Islamic State University Sunan Gunung Djati Bandung</b> , I was a Front-End Developer for approximately 2 years.</summary>
                                <a href="#content1" className='w-fit'> <button className={`btn btn-primary  w-fit shadow-xl `} >More About Me</button></a>
                            </div>
                            <div className="w-screen h-full flex flex-col-reverse justify-between items-end py-10 absolute overflow-hidden">
                                <img src="/asets/img/line.svg" alt="line" className="w-1/6 h-fit opacity-30 mt-20"  style={{ transform: `translateX(${scrollTop * 1.11}px) translateY(${scrollTop * 0.92}%) rotate(${scrollTop * 0.1}deg) scale(${scrollTop * 0.61}%)` }}/>
                                <img src="/asets/img/polygon.png" alt="line" className="w-1/2 md:w-1/4 h-fit absolute opacity-30  mr-80 md:mr-[1000px]"  style={{ transform: `translateX(${scrollTop * 1.11}px) translateY(${-scrollTop * 0.92}%) rotate(${-scrollTop * 0.3}deg) ` }}/>
                                <img src="/asets/img/ellipse2.png" alt="line" className="w-1/3 md:w-full h-fit opacity-30 md:mt-60 md:mr-80 " style={{ transform: `translateX(${scrollTop * 4}px) translateY(${scrollTop * 0.06}%) rotate(${scrollTop * 0.1}deg) scale(${-scrollTop * 0.05}%)` }}  />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-3 lg:flex-row px-1 lg:px-5 snap-center" id="content1">
                        <div className="mockup-window border bg-base-300 w-auto mx-0 md:mx-10 lg:mx-auto shadow-xl lg:w-2/3">
                            <div className="flex bg-base-200 flex-col gap-2 px-4 py-2">
                                <h2 className="h3 font-semibold pb-4"> <b className="font-extrabold h2">#</b> Here’s what I can do to help:</h2>
                                <ul className="flex flex-col w-full p gap-2" >
                                    <li className="flex items-center"><BsFillCheckCircleFill className="text-xl mx-1 mr-3 flex-shrink-0 " /><p className="inline"><b>Portofolio</b> Websites.</p></li>
                                    <li className="flex items-center"><BsFillCheckCircleFill className="text-xl mx-1 mr-3 flex-shrink-0" /><p className="inline">Make the <b>Company</b> go Digital.</p></li>
                                    <li className="flex items-center"><BsFillCheckCircleFill className="text-xl mx-1 mr-3 flex-shrink-0" /> <p className="inline"><b>UKM</b> go Digital.</p></li>
                                    <li className="flex items-center"><BsFillCheckCircleFill className="text-xl mx-1 mr-3 flex-shrink-0" /> <p className="inline">Makes marketing management <b>easier</b>  , using a <b>Cashier System</b></p></li>
                                    <li className="flex items-center"><BsFillCheckCircleFill className="text-xl mx-1 mr-3 flex-shrink-0" /><p className="inline">Work as a <b>Team</b> or <b>Individually.</b> </p></li>
                                    <li className="flex items-center mx-8 font-medium">...........</li>
                                    <li ><NavLink to="/about" className="flex font-bold mx-6">For More <HiCursorArrowRipple className="text-2xl" /></NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <Stack />
                    </div>
                    <div className="w-full h-fit flex flex-col my-4 z-10 lg:flex-row shadow-md">
                        <figure className="w-full lg:w-auto z-10 h-auto lg:min-h-[420px] lg:h-full overflow-hidden">
                            <img src="/asets/img/hero.jpg" alt="hero" className="w-full shrink-0 h-fit lg:w-fit lg:max-h-[364px] lg:h-full" />
                        </figure>
                        <article className="w-full lg:w-1/2 z-10 h-fit min-h-[420px] flex flex-col py-3 pl-4">
                            <h1 className="inline w-fit font-extrabold h3"><b>#</b> What Im doing Right Now!</h1>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 px-3 list-none gap-4">
                                {Activity.map(i => {
                                    return (
                                        <summary key={i.id}>
                                            <h5 className="h5 font-medium py-3"><b className="font-bold px-1">#</b>{i.title}</h5>
                                            <p className="pl-2 p">{i.content}</p>
                                        </summary>
                                    )
                                })}
                            </div>
                            <NavLink to="/work" className="mx-auto my-5 link h4 underline-offset-4 "> Let me show you ... </NavLink>
                        </article>
                    </div>
                    <div className="w-full h-fit flex flex-col  items-enter justify-center">
                        <Parallax/>
                        <span className='w-full z-20 text-center h-fit h2 font-bold tracking-wider myShadow'>Why Hire Me?</span>
                        <div className="w-full z-20 h-fit max-w-7xl grid grid-rows-1 md:px-20 gap-10 md:gap-1 mx-auto mt-12 md:grid-cols-3">
                            {Hireme.map((i) => <Card key={i.id} description={i.description} title={i.title} picture={i.picture} />)}
                        </div>
                    </div>
                    <div className="w-full h-fit px-2">
                        
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Home;