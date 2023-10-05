import skills from "../assets/json/skills.json";
import { useState, useEffect } from "react";

const Stack = () => {
    const [skillIndex, setSkillIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSkillIndex((prevSkillIndex) => (prevSkillIndex + 1) % skills.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div onClick={() => setSkillIndex((prevSkillIndex) => (prevSkillIndex + 1) % skills.length)} className="w-full lg:w-auto  h-80 flex items-center my-auto shrink-0 justify-center overflow-hidden p-5">
                <figure className="stack w-[260px] md:w-[364px] h-fit shrink-0 ">
                    <img src={`/asets/img/skill/${skills[skillIndex]}`} alt={`Image ${skillIndex + 1}`} className="rounded shadow-lg cursor-pointer" width={364} height={288} />
                    <img src={`/asets/img/skill/${skills[(skillIndex + 1) % skills.length]}`} alt={`Image ${skillIndex + 2}`} className="rounded shadow-md" width={364} height={288} />
                    <img src={`/asets/img/skill/${skills[(skillIndex + 2) % skills.length]}`} alt={`Image ${skillIndex + 3}`} className="rounded  shadow-xl" width={364} height={288} />
                </figure>
            </div>
        </>
    )
}

export default Stack