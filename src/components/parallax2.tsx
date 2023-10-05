import React, { useState, useEffect } from "react";

const Parallax2: React.FC = () => {
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
        <div className="w-full  flex flex-col -mt-40 md:-mt-0 -ml-4 opacity-50 h-[1800px] md:left-0 md:h-[900px] top-0 z-0 md:py-20 items-center justify-center gap-10 overflow-x-hidden overflow-y-clip absolute ">
            <img src="/asets/img/polygon.png" alt="alt" className='w-20 h-fit md:-mr-[500px]' style={{ transform: `translateX(${-scrollTop * 0.91}px) translateY(${scrollTop * 0.72}%) rotate(${scrollTop * 0.4}deg) ` }} />
            <div className="flex flex-row">
                <img src="/asets/img/rectangle.png" alt="alt" className='w-20 h-fit md:-mr-[500px]' style={{ transform: `translateX(${scrollTop * 0.21}px) translateY(${scrollTop * 0.40}%) rotate(${scrollTop * 0.5}deg) ` }} />
                <img src="/asets/img/polygon.png" alt="alt" className='w-20 h-fit md:ml-[700px]' style={{ transform: `translateX(${scrollTop * 0.21}px) translateY(${scrollTop * 0.23}%) rotate(${scrollTop * 0.1}deg) ` }} />
            </div>
            <img src="/asets/img/ellipse2.png" alt="alt" className='w-40 md:hidden absolute h-fit md:-mr-60' style={{ transform: `translateX(${-scrollTop * 0.04}px) translateY(${-scrollTop * 0.01}%) rotate(${scrollTop * 0.5}deg)`}} />
            <img src="/asets/img/ellipse2.png" alt="alt" className='w-40 h-fit md:-mr-60' style={{ transform: `translateX(${scrollTop * 0.56}px) translateY(${-scrollTop * 0.2}%) rotate(${scrollTop * 0.2}deg)` }} />
            <img src="/asets/img/rectangle.png" alt="alt" className='w-96 -mt-72 relative h-fit' style={{ transform: `translateX(${scrollTop * 0.02}px) translateY(${-scrollTop * 0.6}%) rotate(${-scrollTop * 0.9}deg) scale(${-scrollTop * 0.01}%)` }} />
            <img src="/asets/img/rectangle.png" alt="alt" className='w-20 h-fit md:mr-72' style={{ transform: `translateX(${scrollTop * 1.2}px) translateY(${-scrollTop * 0.2}%) rotate(${-scrollTop * 0.2}deg) scale(${-scrollTop * 0.01}%)` }} />
            <img src="/asets/img/ellipse.png" alt="alt" className='w-20 h-fit relative -mt-40' style={{ transform: `translateX(${-scrollTop * 0.02}px) translateY(${scrollTop * 0.1}%) rotate(${scrollTop * 0.1}deg) ` }} />
            <img src="/asets/img/ellipse2.png" alt="alt" className='w-20 h-fit -ml-96' style={{ transform: `translateX(${-scrollTop * 3.2}px) translateY(${-scrollTop * 0.3}%) rotate(${-scrollTop * 0.1}deg) `}} />
        </div>
    )
}

export default Parallax2;