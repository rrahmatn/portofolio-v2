import React from 'react'
import Layout from '../../components/layout'
import { RiChatPrivateLine } from "react-icons/ri";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import {TbBrandGithubFilled} from "react-icons/tb"
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="w-full h-fit min-h-screen flex flex-wrap gap-4 md:pb-40 justify-center flex-row pt-24 px-4 pb-10">
          <Link to="mailto:rizkyrahmat292@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3  h-24 font-semibold hover:scale-110 md:hover:scale-105 active:scale-110  bg-transparent flex flex-row justify-between items-center px-7 text-[24px] ii  rounded-xl"
            style={{ border: `2px solid` }}
          >
            <p>Send a Email</p>{" "}
            <div className="text-[32px] flex items-center justify-center md:text-[48px]">
              <BiLogoGmail />
            </div>
          </Link>
          <Link to="https://ngl.link/rrahmatn_30665"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3  h-24 font-semibold hover:scale-110 md:hover:scale-105 active:scale-110  bg-transparent flex flex-row justify-between items-center px-7 text-[24px] ii  rounded-xl"
            style={{ border: `2px solid` }}
          >
            <p>Send Messages Anonymously?</p>{" "}
            <div className="text-[32px] flex items-center justify-center md:text-[48px]">
              <RiChatPrivateLine />
            </div>
          </Link>
          <Link to="https://linkedin.com/in/rrahmatn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3  h-24 font-semibold hover:scale-110 md:hover:scale-105 active:scale-110  bg-transparent flex flex-row justify-between items-center px-7 text-[24px] ii  rounded-xl"
            style={{ border: `2px solid` }}
          >
            <p>Visit My LinkedIn</p>{" "}
            <div className="text-[32px] flex items-center justify-center md:text-[48px]">
              <BiLogoLinkedin />
            </div>
          </Link>
          <Link to="https://instagram.com/rrahmatn_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3  h-24 font-semibold hover:scale-110 md:hover:scale-105 active:scale-110  bg-transparent flex flex-row justify-between items-center px-7 text-[24px] ii  rounded-xl"
            style={{ border: `2px solid` }}
          >
            <p>Visit My Instagram</p>{" "}
            <div className="text-[32px] flex items-center justify-center md:text-[48px]">
              <AiFillInstagram />
            </div>
          </Link>

          <Link to="https://github.com/rrahmatn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3  h-24 font-semibold hover:scale-110 md:hover:scale-105 active:scale-110  bg-transparent flex flex-row justify-between items-center px-7 text-[24px] ii  rounded-xl"
            style={{ border: `2px solid` }}
          >
            <p>Visit My Github</p>{" "}
            <div className="text-[32px] flex items-center justify-center md:text-[48px]">
              <TbBrandGithubFilled />
            </div>
          </Link>

        </div>
      </Layout>
    </>
  )
}

export default Contact;