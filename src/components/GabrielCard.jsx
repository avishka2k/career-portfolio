import React from "react";
import { RiArtboardFill } from "react-icons/ri";

function GabrielCard(props) {
  return (
    <div className="flex flex-col border-[1px] w-full border-light-primary rounded-primary p-5 gap-5">
      <div className="flex flex-row items-center gap-5 overflow-hidden">
        <div className="bg-light-primary rounded-[100rem] p-[15px]">
          <RiArtboardFill className="text-primary-white w-[30px] h-[30px] m-auto" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-[35px]">{props.number}</p>
          <p className="text-text-gray">{props.cardText}</p>
        </div>
      </div>
    </div>
  );
}

export default GabrielCard;
