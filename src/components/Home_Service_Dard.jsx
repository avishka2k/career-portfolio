import React from "react";
import { RiArtboardFill } from "react-icons/ri";
import {HiOutlinePlus} from "react-icons/hi"

function Home_Service_Dard(props) {
  return (
    <div className="flex flex-col border-[1px] border-light-primary rounded-primary px-5 py-10 gap-5">
      <div className="flex flex-row items-center gap-5">
        <div className="bg-light-primary rounded-[100rem] p-[15px]">
          <RiArtboardFill className="text-primary-white w-[30px] h-[30px] m-auto" />
        </div>
        <p className="font-bold">{props.title}</p>
      </div>
      <p className=" text-text-gray font-light">{props.discription}</p>
      <div className="flex flex-row items-center gap-5 cursor-pointer">
        <div className="bg-primary-white rounded-[100rem] p-[10px] shadow">
          <HiOutlinePlus className=" text-light-primary w-[20px] h-[20px] m-auto" />
        </div>
        <p className=" text-[14px] cursor-pointer">Learn more</p>
      </div>
    </div>
  );
}

export default Home_Service_Dard;
