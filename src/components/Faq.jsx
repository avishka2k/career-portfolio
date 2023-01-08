import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

function Faq() {
  const [faq, setfaq] = useState(null);
  const itemClick = (i) => {
    if (faq === i) {
      return setfaq(null);
    }
    setfaq(i);
  };

  const FaqData = [
    {
      title: "A digital agency is a business",
      answare:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
    {
      title: "A digital agency is a business",
      answare:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
    {
        title: "A digital agency is a business",
        answare:
          "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
      },
  ];

  return (
    <>
      {FaqData.map((faq_data, i) => (
        <div
          key={i}
          className={`flex flex-col border-b border-white-opacity m-auto p-3 ${
            faq === i ? " bg-primary-white" : " bg-background-secondary"
          }`}
        >
          <div
            onClick={() => itemClick(i)}
            className="flex flex-row items-center cursor-pointer justify-between gap-10 lg:gap-[8rem]"
          >
            <p
              className={`text-[20px] font-bold ${
                faq === i ? "" : "text-primary-white"
              }`}
            >
              {faq_data.title}
            </p>

            <VscTriangleDown className="text-[20px] w-6 h-6 bg-light-primary p-[4px] rounded-[100rem] text-background-primary" />
          </div>
          <div className="">
            <p
              className={`pt-8  max-w-[22rem] ${
                faq === i ? " text-text-gray" : "hidden"
              }`}
            >
              {faq_data.answare}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Faq;
