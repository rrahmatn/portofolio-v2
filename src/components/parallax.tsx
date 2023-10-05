import React, { useState, useEffect } from "react";

const Parallax: React.FC = () => {
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
        <div className="w-full  flex flex-col -ml-4 opacity-30 h-[1800px] md:h-[900px] md:-mt-96 -mt-[470px] z-0 md:py-20 items-center justify-center gap-10 overflow-x-hidden overflow-y-clip absolute ">
            <img src="/asets/img/polygon.png" alt="alt" className='w-20 h-fit md:-mr-96' style={{ transform: `translateX(${-scrollTop * 0.11}px) translateY(${scrollTop * 0.02}%) rotate(${scrollTop * 0.1}deg) scale(${scrollTop * 0.11}%)` }} />
            <div className="flex flex-row">
                <img src="/asets/img/rectangle.png" alt="alt" className='w-20 h-fit md:-mr-96' style={{ transform: `translateX(${scrollTop * 0.21}px) translateY(${scrollTop * 0.30}%) rotate(${scrollTop * 0.2}deg) scale(${scrollTop * 0.21}%)` }} />
                <img src="/asets/img/polygon.png" alt="alt" className='w-20 h-fit md:ml-96' style={{ transform: `translateX(${scrollTop * 0.01}px) translateY(${scrollTop * 0.23}%) rotate(${scrollTop * 0.1}deg) scale(${scrollTop * 0.10}%)` }} />
            </div>
            <img src="/asets/img/ellipse2.png" alt="alt" className='w-20 md:hidden absolute h-fit md:-mr-60' style={{ transform: `translateX(${-scrollTop * 0.04}px) translateY(${-scrollTop * 0.01}%) rotate(${scrollTop * 0.5}deg) scale(${scrollTop * 0.1}%)` }} />
            <img src="/asets/img/ellipse2.png" alt="alt" className='w-20 h-fit md:-mr-60' style={{ transform: `translateX(${scrollTop * 0.16}px) translateY(${-scrollTop * 0.2}%) rotate(${scrollTop * 0.2}deg) scale(${scrollTop * 0.21}%)` }} />
            <img src="/asets/img/rectangle.png" alt="alt" className='w-96 h-fit' style={{ transform: `translateX(${scrollTop * 0.02}px) translateY(${-scrollTop * 0.3}%) rotate(${-scrollTop * 0.9}deg) scale(${-scrollTop * 0.01}%)` }} />
            <img src="/asets/img/rectangle.png" alt="alt" className='w-20 h-fit md:mr-72' style={{ transform: `translateX(${scrollTop * 0.2}px) translateY(${-scrollTop * 0.2}%) rotate(${-scrollTop * 0.2}deg) scale(${-scrollTop * 0.01}%)` }} />
            <img src="/asets/img/ellipse.png" alt="alt" className='w-20 h-fit relative -mt-40' style={{ transform: `translateX(${-scrollTop * 0.02}px) translateY(${scrollTop * 0.1}%) rotate(${scrollTop * 0.1}deg) scale(${scrollTop * 0.22}%)` }} />
            <img src="/asets/img/ellipse2.png" alt="alt" className='w-20 h-fit -ml-96' style={{ transform: `translateX(${-scrollTop * 0.2}px) translateY(${-scrollTop * 0.3}%) rotate(${-scrollTop * 0.1}deg) scale(${scrollTop * 0.4}%)` }} />
        </div>
    )
}

export default Parallax