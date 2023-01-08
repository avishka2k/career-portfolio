import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { DiGithubAlt } from "react-icons/di";

function Footer() {
  return (
    <section className="pt-20">
      <div className="bg-background-secondary ">
        <div className="container text-primary-white m-auto md:px-[5%] lg:px-[10%] px-5 pt-[5rem] pb-[2.5rem]">
          <div className="border-b-2 border-b-background-opacity flex md:flex-row flex-col gap-8 md:gap-0 justify-between m-auto w-full pb-14 items-center text-center md:items-start md:text-left">
            <div className="flex flex-col">
              <p className="pb-5 text-primary-white font-semibold text-xl">
                Personal
              </p>
            </div>
            <div className="flex flex-col">
              <p className="pb-5 text-light-primary uppercase">Menu</p>
              <ul>
                <li className="pb-2 cursor-pointer">About</li>
                <li className="pb-2 cursor-pointer">Service</li>
                <li className="pb-2 cursor-pointer">Blog</li>
                <li className="pb-2 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="pb-5 text-light-primary uppercase">Service</p>
              <ul>
                <li className="pb-2 cursor-pointer">Design</li>
                <li className="pb-2 cursor-pointer">Development</li>
                <li className="pb-2 cursor-pointer">Marketing</li>
                <li className="pb-2 cursor-pointer">See more</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-3">
                <MdEmail className=" cursor-pointer text-[40px] text-primary-white bg-light-primary rounded-[100rem] p-2" />
                <IoCall className=" cursor-pointer text-[40px] text-primary-white bg-light-primary rounded-[100rem] p-2" />
                <RiLinkedinFill className=" cursor-pointer text-[40px] text-primary-white bg-light-primary rounded-[100rem] p-2" />
                <DiGithubAlt className=" cursor-pointer text-[40px] text-primary-white bg-light-primary rounded-[100rem] p-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row justify-between pt-[2.5rem]">
            <p className=" text-white-opacity text-sm">Copyright © 2022 Avishka. All Rights Reserved.</p>
            <div className="flex flex-row gap-10">
                <p className=" cursor-pointer">Terms of Use</p>
                <p className=" cursor-pointer">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
