import React from "react";
import Button from "../components/Button";
import MainImg from "../assets/homemain.webp";

function Home() {
  return (
    <div className="pt-20 flex flex-col">
      <div className="bg-background-secondary pb-10 w-screen lg:h-screen">
        <div className="container flex flex-col px-5 lg:px-10 m-auto">
          <div className="flex flex-col md:flex-row-reverse items-center md:lg:justify-between">
            <img
              src={MainImg}
              alt=""
              className="w-[20rem] md:max-w-[30rem] md:w-full m-auto"
            />
            <div className="flex flex-col text-left gap-3 md:max-w-[30rem]">
              <p className="text-light-primary uppercase text-[16px] tracking-[3px]">
                Gabriel Pires
              </p>
              <p className="text-[56px] text-primary-white font-bold leading-[70px]">
                The Simple, Clean Design
              </p>
              <p className="text-[16px] leading-[35px] text-white-opacity">
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>
              <div className="flex float-left mt-5">
                <Button text="Explore Work" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
