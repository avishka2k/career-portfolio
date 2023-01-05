import React from "react";
import { AiFillStar } from "react-icons/ai";
import P3 from "../assets/p3.webp";

function Testimonials(props) {
  return (
    <div className={`border-[1px] rounded-primary p-5 border-light-primary ${props.bgStyle}`}>
      <div id="ddd" className="flex flex-row gap-1">
        <AiFillStar className="text-[#f6d021] text-2xl" />
        <AiFillStar className="text-[#f6d021] text-2xl" />
        <AiFillStar className="text-[#f6d021] text-2xl" />
        <AiFillStar className="text-[#f6d021] text-2xl" />
        <AiFillStar className="text-[#f6d021] text-2xl" />
      </div>
      <p className="pt-8 pb-10 text-text-gray">
        {props.text}
      </p>
      <div className="flex flex-row gap-4 py-3">
        <img src={P3} alt="" className="w-[5rem] h-[5rem] rounded-[100rem]" />
        <div className="">
            <p className="max-w-[11rem] text-[22px] font-bold leading-[1.8rem] pb-2">{props.name}</p>
            <p>{props.company}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
