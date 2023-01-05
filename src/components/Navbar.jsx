import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CgClose, CgMenu } from "react-icons/cg";

function Navbar() {
  const [nav, setNav] = useState(true);
  const menuClick = () => setNav(!nav);
  return (
    <>
      <div className="flex flex-row fixed text-primary-white w-screen h-20 bg-background-secondary">
        <div className="container px-5 lg:px-[5%] flex items-center flex-row m-auto justify-between">
          <div className="p">
            <img src={Logo} className="w-full " alt="" />
          </div>
          <div className="lg:flex hidden flex-row items-center">
            <ul className="flex gap-10">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
            <div className="flex flex-row items-center border rounded-primary border-white-opacity place-content-center w-[138px] h-[48px] ml-20">
              <a href="#s">Contact</a>
            </div>
          </div>
          <div
            onClick={menuClick}
            className="lg:hidden flex flex-row border rounded-primary border-white-opacity w-[3rem] h-[3rem]"
          >
            {nav ? (
              <CgMenu className="w-[1.5rem] h-[1.5rem] m-auto items-center" />
            ) : (
              <CgClose className="w-[1.5rem] h-[1.5rem] m-auto items-center" />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "hidden"
            : "fixed w-full h-[100rem] mt-20 bg-background-secondary flex-col text-primary-white lg:hidden"
        }
      >
        <ul className="p-7">
          <li className="cursor-pointer p-3">About</li>
          <li className="cursor-pointer p-3">Services</li>
          <li className="cursor-pointer p-3">Pricing</li>
          <li className="cursor-pointer p-3">Blog</li>
        </ul>
        {/* <div className="flex flex-row items-center border rounded-primary border-white-opacity place-content-center w-[138px] h-[48px] ml-20">
            <a href="#s">Contact</a>
          </div> */}
      </div>
    </>
  );
}

export default Navbar;
