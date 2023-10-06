import React, { ReactNode } from 'react'
import Navbar from './navbar';
import Footer from './footer';
import {AiFillCloseCircle , AiFillMessage} from "react-icons/ai"
import Phone from './phone';


interface LayoutProps {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {

    // const [openModal , setOpenModal] = useState(false)

    return (
        <>
            <div className="w-screen max-w-full overflow-x-hidden h-fit flex flex-col items-start justify-center">
                <Navbar />
                <div className="w-full h-fit flex flex-col">
                    {children}
                </div>
                <Footer />
                <button className="btn fixed bottom-5 bg-base-100 drop-shadow-xl text-4xl h-fit w-fit p-2 rounded-full right-4 z-[100]" onClick={() => {
                    const modalElement = document.getElementById('my_modal_3') as HTMLDialogElement;
                    if (modalElement) {
                        modalElement.showModal();
                    }
                }}><AiFillMessage/></button>
                <dialog id="my_modal_3" className="modal mx-auto ml-auto mr-4  h-screen m-0 p-0  w-fit">
                    <div className="modal-box p-0 h-fit w-fit bg-opacity-0 pl-auto pt-auto m-0 overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost h-fit w-fit  absolute right-2 top-2"><AiFillCloseCircle className="text-5xl font-bold"/></button>
                        </form>
                       <Phone/>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Layout