import React from "react";
import { AiFillStar } from "react-icons/ai";

function star() {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(
      <div>
        <AiFillStar className="text-[#f6d021] text-lg" />
      </div>
    );
  }
  return rows;
}

function Testimonials() {
  return (
    <div className="border-[1px] border-light-primary rounded-primary p-5">
      <div id="ddd" className="flex flex-row gap-1">
        {star}
      </div>
    </div>
  );
}

export default Testimonials;
