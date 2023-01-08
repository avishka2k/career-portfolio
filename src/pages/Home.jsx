import React from "react";
import Button from "../components/Button";
import MainImg from "../assets/homemain.webp";
import HomeServiceCard from "../components/HomeServiceCard";
import ImageCardBtn from "../components/ImageCardBtn";
import Image1 from "../assets/p1.webp";
import Image2 from "../assets/p2.webp";
import Image3 from "../assets/p3.webp";
import Gabriel from "../assets/gabriel.webp";
import GabrielCard from "../components/GabrielCard";
import ListRight from "../assets/Path.svg";
import StarImg from "../assets/Star.webp";
import Features from "../assets/features.webp";
import GetStarted from "../assets/getStarted.webp";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import { HiMapPin } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <div className="pt-20">
        <div className="flex bg-background-secondary pb-10 w-full md:h-screen">
          <div className="container flex flex-col px-5 md:px-[5%] lg:px-[10%] m-auto">
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
                  <Button text="see my work" btnstyle="bg-light-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-20">
        <div className="container flex flex-col px-5 md:px-[5%] lg:px-[10%] m-auto">
          <div className="flex flex-col text-center gap-3 max-w-[30rem] m-auto">
            <p className="uppercase text-light-primary tracking-[3px]">
              service
            </p>
            <p className="font-bold text-[40px] md:text-[56px] pb-14 leading-[120%]">
              How I Can Help You With
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <HomeServiceCard
              title="Design"
              discription="Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
            />
            <HomeServiceCard
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
        <div className="bg-background-secondary pb-20">
          <div className="container m-auto md:px-[5%] lg:px-[10%] flex flex-col w-full px-5 pt-[66px] pb-[20px] border-white-opacity border-b md:border-none">
            <div className="flex flex-col gap-[5px]">
              <p className="uppercase text-light-primary tracking-[3px]">
                portfolio
              </p>
              <p className=" text-[40px] font-bold text-primary-white">
                Latest Work
              </p>
              <div className="flex float-left my-5">
                <Button
                  text="Explore more"
                  btnstyle="border-[1px] border-white-opacity"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col m-auto container md:px-[5%] md:flex-row">
            <div className="flex flex-col relative border-white-opacity border p-3">
              <img src={Image1} alt="" className="" />
              <div className="absolute bottom-[15%] text-center left-[10%]">
                <ImageCardBtn />
                <p className="font-bold text-primary-white text-3xl">SOFA</p>
              </div>
            </div>
            <div className="flex flex-col  relative border-white-opacity border p-3">
              <img src={Image2} alt="" className="" />
              <div className="absolute bottom-[15%] text-center left-[10%]">
                <ImageCardBtn />
                <p className="font-bold text-primary-white text-3xl">SOFA</p>
              </div>
            </div>
            <div className="flex flex-col relative border-white-opacity border p-3">
              <img src={Image3} alt="" className="" />
              <div className="absolute bottom-[15%] text-center left-[10%]">
                <ImageCardBtn />
                <p className="font-bold text-primary-white text-3xl">SOFA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="container m-auto lg:px-[10%] flex flex-col w-full px-5 pb-[20px] md:flex-row md:justify-between md:items-center gap-5">
          <img
            src={Gabriel}
            alt=""
            className="md:max-w-[25rem] lg:max-w-[35rem]"
          />
          <div className="flex flex-col gap-[5px] max-w-[450px]">
            <p className="uppercase text-light-primary tracking-[3px]">
              Gabriel Pires
            </p>
            <p className="text-[40px] font-bold leading-[50px] pb-5">
              Professional Web Designer
            </p>
            <p className="pb-3">Provides a full service range</p>
            <p className=" text-text-gray">
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <div className="flex float-left mt-5">
              <Button
                text="about me"
                btnstyle="bg-primary-white shadow text-text-back"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="flex flex-col justify-between container m-auto md:px-[5%] lg:px-[10%] md:flex-row px-5 gap-3">
          <GabrielCard number="42%" cardText="Years of experience" />
          <GabrielCard number="73%" cardText="Projects Done" />
        </div>
      </section>
      <section className="pt-20">
        <div className="bg-background-secondary ">
          <div className="container md:items-center m-auto md:px-[5%] lg:px-[10%] flex flex-col w-full px-5 pt-[5rem] pb-[5rem] md:border-none gap-5 md:flex-row-reverse justify-between">
            <img
              src={Features}
              alt=""
              className="md:max-w-[22rem] lg:max-w-[27rem]"
            />
            <div className="flex flex-col gap-[5px] max-w-[25rem] relative">
              <img
                src={StarImg}
                alt=""
                className="absolute w-[7rem] lg:bottom-[-11.25rem] bottom-[-8.25rem]"
              />
              <p className="uppercase text-light-primary tracking-[3px]">
                Features
              </p>
              <p className=" text-[40px] leading-[50px] font-bold text-primary-white">
                Give Your Site A New Look
              </p>
              <p className="pt-5 text-white-opacity">
                Service range including technical skills, design, business
                understanding.
              </p>
              <ul className="pt-5">
                <li className="flex flex-row py-[5px] items-center gap-3 text-white-opacity text-[14px]">
                  <img
                    src={ListRight}
                    alt=""
                    className=" bg-light-primary rounded-[100rem] p-[4px] w-6 h-6"
                  />
                  Range including technical skills
                </li>
                <li className="flex flex-row py-[5px] items-center gap-3 text-white-opacity text-[14px]">
                  <img
                    src={ListRight}
                    alt=""
                    className=" bg-light-primary rounded-[100rem] p-[4px] w-6 h-6"
                  />
                  Business understanding
                </li>
                <li className="flex flex-row py-[5px] items-center gap-3 text-white-opacity text-[14px]">
                  <img
                    src={ListRight}
                    alt=""
                    className=" bg-light-primary rounded-[100rem] p-[4px] w-6 h-6"
                  />
                  Partner on the long run
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col m-auto container md:px-[5%] md:flex-row"></div>
        </div>
      </section>

      <section className="">
        <div className="bg-background-3">
          <div className="container m-auto md:px-[5%] lg:px-[10%] flex flex-col w-full px-5 pt-[66px] pb-[20px] md:border-none">
            <div className="flex flex-col md:flex-row lg:items-center md:justify-between">
              <div className="flex flex-col md:max-w-[15rem]">
                <p className="uppercase text-light-primary tracking-[3px]">
                  Get Started
                </p>
                <p className=" text-[24px] font-bold">
                  I Help Companies Move Faster
                </p>
                <div className="flex float-left mt-5 mb-8">
                  <Button
                    text="contact me"
                    btnstyle="bg-light-primary shadow"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-[5rem] lg:items-center">
                <p className="text-text-gray max-w-[25rem]">
                  Put themselves in the merchant's shoes. It is meant to partner
                  on the long run.
                </p>
                <img
                  src={GetStarted}
                  alt=""
                  className="pt-5 md:pt-0 md:max-w-[20rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="pb-10">
          <div className="container m-auto md:px-[5%] lg:px-[10%] flex flex-col w-full px-5 pt-[66px] pb-[20px] md:border-none">
            <div className="flex flex-col gap-[5px] max-w-[17rem]"></div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container flex flex-col px-5 md:px-[5%] lg:px-[10%] m-auto">
          <div className="flex flex-col text-center gap-3 max-w-[30rem] m-auto">
            <p className="uppercase text-light-primary tracking-[3px]">
              Testimonials
            </p>
            <p className="font-bold text-[40px] md:text-[56px] pb-14 leading-[120%]">
              What My Clients Saying
            </p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Testimonials
              text="Outsource your digital marketing efforts, instead of handling in-house.
        They can provide your business with a variety."
              company="Twitter"
              name="Graham Griffiths"
              bgStyle=""
            />
            <Testimonials
              text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions."
              company="Meta Inc."
              name="Alan Marti"
              bgStyle="bg-primary-white"
            />
            <Testimonials
              text="Outsource your digital marketing efforts, instead of handling in-house.
        They can provide your business with a variety."
              company="Twitter"
              name="Graham Griffiths"
              bgStyle=""
            />
          </div>
          <div className="flex float-left m-auto pt-10">
            <Button
              text="see all"
              btnstyle="bg-primary-white shadow text-text-back"
            />
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div className="bg-background-secondary pb-20 relative">
          <div className="container m-auto md:px-[5%] lg:px-[10%] px-5 pt-[66px] pb-[20px] gap-5 ">
            <div className="flex flex-col md:items-center md:flex-row lg:h-[20rem] gap-5 justify-between">
              <div className="flex flex-col gap-[5px] max-w-[30rem]">
                <p className="uppercase text-light-primary tracking-[3px]">
                  Faq
                </p>
                <p className=" text-[40px] leading-[50px] font-bold text-primary-white">
                  Frequently Asked Questions
                </p>
                <p className="pt-5 text-white-opacity">
                  A digital agency is a business you hire to outsource your
                  digital marketing efforts, instead of handling in-house.
                </p>
                <p className=" text-primary-white pt-5">Contact Me</p>
              </div>
              <div className="md:min-w-[20rem]">
                <div className="border-t border-x border-white-opacity overflow-hidden rounded-primary">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="bg-background-secondary ">
          <div className="container md:items-center gap-10 m-auto md:px-[5%] lg:px-[10%] flex flex-col w-full px-5 pt-[5rem] pb-[5rem] md:border-none md:flex-row justify-between">
            <div className="flex flex-col bg-primary-white w-full max-w-[30rem] p-8 rounded-primary">
              <p className=" text-[24px] font-semibold">Get In Touch</p>
              <div className=" flex flex-col ">
                <form action="">
                  <div className="mb-5">
                    <input
                      placeholder="Name"
                      className="outline-none hover:border-light-primary focus:border-light-primary p-2 h-[2.5rem] w-full border rounded-primary border-light-primary"
                      type="text"
                      name="name"
                      id=""
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      placeholder="Email"
                      className="outline-none hover:border-light-primary focus:border-light-primary p-2 h-[2.5rem] w-full border rounded-primary border-light-primary"
                      type="email"
                      name="email"
                      id=""
                    />
                  </div>
                  <div className="mb-5">
                    {" "}
                    <textarea
                      placeholder="Message"
                      className="outline-none hover:border-light-primary focus:border-light-primary p-2 w-full border rounded-primary border-light-primary"
                      name="Message"
                      id=""
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex float-right my-5">
                    <Button btnstyle="bg-light-primary" text="Submit Now" />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] max-w-[30rem]">
              <p className="uppercase text-light-primary tracking-[3px]">
                Contact
              </p>
              <p className=" text-[40px] leading-[50px] font-bold text-primary-white">
                Contact Me
              </p>
              <p className="pt-5 text-white-opacity">
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>
              <ul className="pt-5">
                <li className="flex flex-row py-[6px] items-center gap-3 text-white-opacity text-[14px]">
                  <MdEmail className=" text-[30px] text-primary-white bg-light-primary rounded-[100rem] p-1" />
                  Range including technical skills
                </li>
                <li className="flex flex-row py-[6px] items-center gap-3 text-white-opacity text-[14px]">
                  <IoCall className=" text-[30px] text-primary-white bg-light-primary rounded-[100rem] p-1" />
                  Business understanding
                </li>
                <li className="flex flex-row py-[6px] items-center gap-3 text-white-opacity text-[14px]">
                  <HiMapPin className=" text-[30px] text-primary-white bg-light-primary rounded-[100rem] p-1" />
                  Partner on the long run
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="container m-auto lg:px-[10%] flex flex-col w-full px-5 md:flex-row-reverse md:justify-between md:items-center gap-5">
          <img
            src={Gabriel}
            alt=""
            className="md:max-w-[25rem] lg:max-w-[35rem]"
          />
          <div className="flex flex-col gap-[5px] max-w-[450px]">
            <p className="uppercase text-light-primary tracking-[3px]">
              Gabriel Pires
            </p>
            <p className="text-[40px] font-bold leading-[50px] pb-5">
              Help To Build Your Dream Project
            </p>
            <p className=" text-text-gray">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <div className="flex float-left mt-5">
              <Button text="Contact Me" btnstyle="bg-light-primary shadow" />
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default Home;
