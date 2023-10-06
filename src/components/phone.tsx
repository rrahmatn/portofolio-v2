import React, { useEffect, useState } from "react";

const Phone: React.FC = () => {

  const [time, setTime] = useState("");
  const [thisOption , setThisOption] = useState(3);
  const [option , setOption] = useState(["Here To Hire" , "Just Saying Hello"]);
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
  
  useEffect(()=>{

    if(thisOption === 0){
      setOption(["telegram" , "Email"])
    }if(thisOption === 1){
      setOption(["fine" , "fine , what about u?"])
    }
  },[thisOption])



  return (
    <>
      <aside className="mockup-phone scale-75 shadow-md bg-none ">
        <div className="camera"></div>
        <div className="display ">
          <div className="artboard bg-slate-300 artboard-demo shadow-md flex flex-col items-center justify-start p-0 phone-1">
            <nav className="h-6 w-full py-[2px] bg-gray-800 flex flex-row justify-between px-7">
              <span className="p  tracking-widest text-white">{time}</span>
            </nav>
            <div className="w-full h-full flex shadow-md flex-col bg-slate-300 justify-end p-1 overflow-x-hidden overflow-y-scroll">
                <div className="chat chat-start " >
                  <div className="chat-image avatar">
                    <div className="w-10 shadow-md rounded-full">
                      <img src="/asets/img/about/hero.jpg" />
                    </div>
                  </div>
                  <div className="chat-header px-2 text-black ">
                    Rahmat
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble shadow-md text-white  bg-gray-800">halo</div>
                </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 shadow-md rounded-full">
                    <img src="/asets/img/about/hero.jpg" />
                  </div>
                </div>
                <div className="chat-header px-2 text-black">
                  Anakin
                  <time className="text-xs opacity-50">{time}</time>
                </div>
                <div className="chat-bubble shadow-md text-white  bg-gray-800">I hate you!</div>
              </div>
            </div>
            <div className="w-full h-24 bg-gray-800 flex flex-row text-white justify-end p-2 py-3 shadow-md gap-4">
              <button className="w-1/2" onClick={()=>{
                setThisOption(0);
                console.log(option);
              }}>{option[0]}</button>
              <button className="w-1/2" onClick={()=>setThisOption(1)}>{option[1]}</button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Phone