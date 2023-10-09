import React, { useEffect, useState } from "react";

const Phone: React.FC = () => {

  const [time, setTime] = useState("");
  
  useEffect(() => {

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const initialTime = hour + ":" + (minute < 10 ? "0" : "") + minute;
    setTime(initialTime);

    const setNow = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const newTime = hour + ":" + (minute < 10 ? "0" : "") + minute;

      setTime(newTime);
    }, 6000);

    return () => clearInterval(setNow);
  }, []);
  
  



  return (
    <>
      <aside className="mockup-phone scale-75 shadow-md bg-none ">
        <div className="camera"></div>
        <div className="display ">
          <div className="artboard bg-slate-300 artboard-demo shadow-md flex flex-col items-center justify-start p-0 phone-1">
            <nav className="h-6 w-full py-[2px] bg-gray-800 flex flex-row justify-between px-7">
              <span className="p  tracking-widest text-white">{time}</span>
            </nav>
            <div className="w-full h-full text-black font-semibold tracking-widest grid place-items-center">
                <h1>Coming Soon ....</h1>
            </div>
           
          </div>
        </div>
      </aside>
    </>
  )
}

export default Phone