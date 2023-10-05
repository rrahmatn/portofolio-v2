import { useAtom } from 'jotai';
import { darkMode } from './state';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImProfile } from "react-icons/im";
import { BsJournalCode } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { BiLogoInstagram } from 'react-icons/bi';
import { PiTelegramLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { MdOutlineMailOutline } from "react-icons/md";

const Navbar: React.FC = () => {

  const [toggleTheme, setToggleTheme] = useAtom(darkMode);

  return (
    <>
      <div className="drawer fixed z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className={`w-full navbar fixed top-0 z-50 shadow-md bg-base-300`}>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 font-bold stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <NavLink to="/" className="btn btn-ghost justify-start normal-case flex-1 text-xl font-extrabold flex flex-row">
              <div className="avatar min-[310px]:inline-flex hidden">
                <div className="w-8 mx-1 rounded-full">
                  <img src="/asets/img/about/hero.jpg" />
                </div>
              </div>rrahmatn</NavLink>
            <div className="flex-none navbar-center  hidden lg:block">
              <ul className="menu menu-horizontal gap-7 text-md font-semibold">
                <li><NavLink to="/about">About <ImProfile className="text-2xl font-bold" /></NavLink></li>
                <li><NavLink to="/work">Work <BsJournalCode className="text-2xl font-bold" /></NavLink></li>
                <li><NavLink to="/contact">Contact <RiContactsBook2Line className="text-2xl font-bold" /></NavLink></li>
              </ul>
            </div>
            <div className="flex-end flex w-auto lg:w-1/3 justify-end">
              <label className="swap swap-rotate px-3">
                <input type="checkbox" onClick={() => { setToggleTheme(!toggleTheme) }} />
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side z-40 h-screen">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 pt-[76px] min-h-full bg-base-300 shadow-xl text-xl flex flex-col justify-between ">
            <div className="w-full h-fit gap-3 flex flex-col">
              <li><NavLink className="flex justify-between font-medium" to="/about">About <ImProfile className="text-2xl font-bold" /></NavLink></li>
              <li><NavLink className="flex justify-between font-medium" to="/work">Work <BsJournalCode className="text-2xl font-bold" /></NavLink></li>
              <li><NavLink className="flex justify-between font-medium" to="/contact">Contact <RiContactsBook2Line className="text-2xl font-bold" /></NavLink></li>
            </div>
            <li className='flex flex-row gap-2 justify-center w-full'>
              <NavLink to="https://instagram.com/rrahmatn_" target="_blank"><BiLogoInstagram className='text-3xl font-bold' /></NavLink>
              <NavLink to="https://t.me/rrahmatn" target="_blank"><PiTelegramLogoBold className='text-3xl font-bold' /></NavLink>
              <NavLink to="https://www.linkedin.com/in/rrahmatn" target="_blank"><TiSocialLinkedinCircular className='text-3xl font-bold' /></NavLink>
              <NavLink to="mailto:rizkyrahmat292@gmail.com" target="_blank"><MdOutlineMailOutline className='text-3xl font-bold' /></NavLink>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar