import React from "react";
import Button from "../components/Button";
import MainImg from "../assets/homemain.webp";
import Home_Service_Dard from "../components/Home_Service_Dard";

function Home() {
  return (
    <div>
      <div className="pt-20">
        <div className="bg-background-secondary pb-10 w-full lg:h-screen">
          <div className="container flex flex-col px-5 lg:px-[5%] m-auto">
            <div className="flex flex-col md:flex-row-reverse items-center md:justify-between">
              <img
                src={MainImg}
                alt=""
                className="w-[20rem] md:max-w-[45%] md:w-full"
              />
              <div className="flex flex-col text-left gap-3 md:max-w-[30rem]">
                <p className="text-light-primary uppercase text-[16px] tracking-[3px]">
                  Gabriel Pires
                </p>
                <p className="text-[56px] md:text-[72px] text-primary-white font-bold leading-[70px]">
                  The Simple, Clean Design
                </p>
                <p className="text-[16px] leading-[25px] text-white-opacity">
                  Agency provides a full service range including technical
                  skills, design, business understanding.
                </p>
                <div className="flex float-left mt-5">
                  <Button text="Explore Work" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-20">
        <div className="container flex flex-col px-5 lg:px-[5%] m-auto">
          <div className="flex flex-col text-center gap-3 max-w-[30rem] m-auto">
            <p className="uppercase text-light-primary">service</p>
            <p className="font-bold text-[40px] md:text-[56px] pb-14 leading-[120%]">
              How I Can Help You With
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Home_Service_Dard
              title="Design"
              discription="Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
            />
            <Home_Service_Dard
              title="Development"
              discription="Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
            />
          </div>
          <div className="flex flex-row pt-14 gap-2 m-auto">
            <p className=" text-text-gray">Want more service?</p>
            <p>Explore Now</p>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="flex flex-col bg-background-secondary w-full h-20">
          <p className=" uppercase text-light-primary">portfolio</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
