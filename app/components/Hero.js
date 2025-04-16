"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsEye, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaShare } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import About from "./About";
import Report from "./Report";
import Slider from "./Slider";
import Button from "./Button";
import AddressPopUp from "./AddressPopup";
import LeftImage from "./LeftImage";
import Left from "./Left";
import Form from "./Form";
import Last from "./Last";

const Hero = () => {
  const [pop, setPop] = useState(false);

  const handleOpen = () => {
    setPop(true);
  };

  return (
    <div className="md:flex  md:gap-2 m-2">
      {/*  popup section */}
      {/* {pop === true ? (
        <div className="fixed z-[999999999] bg-black/50 w-full h-[100vh] top-0 left-0 m-0">
          <div className=" flex items-center h-full w-full justify-center mt-10 ">
            <div className="bg-white flex justify-center items-center flex-col py-2 px-3 rounded-md max-w-md w-[90%]">
              <div className="w-full flex justify-between px-1 items-center mb-1">
                <h1 className="font-bold ">DSOM : Dehradun School of Online Marketing</h1>
                <RxCross1 
                  onClick={getPopup} 
                  className="cursor-pointer text-xl hover:text-red-500" 
                />
              </div>

              <div className="capitalize font-semibold w-full text-center mb-1">full address</div>
              <div className="flex  gap-2 mb-4">
                <FaLocationDot className="text-red-500 text-2xl" />
             <p className="text-base">
             29 Tagore Villa, Above Bank of Baroda, Connaught Place, Dehradun
             -Uttarakhand
             </p>
              </div>

              <div className="">
              <div className="bg-orange-600 w-fit text-center  text-white px-4 py-2 text-sm font-semibold rounded-sm ">
                <Button
                  className="px-2"
                  text="Get GMap Direction"
                  Icon={FaShare}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}

      {/* popup ends */}

      {/* all the left section */}
      <div className="md:flex-col md:flex h-auto w-full items-start">
        {/* Image section for desktop */}
        <div className="flex gap-5">
          <div className="border-1 hidden lg:block  border-gray-300 rounded-md relative left-[-4px] h-28 w-44  ">
            <Image
              className="w-44 h-26 "
              src="/main-logo.png"
              alt="main-image"
              height={100}
              width={100}
            />
          </div>

          {/* for desktop */}
          <div className=" hidden lg:flex flex-col">
            <h1 className=" font-bold text-[22px] mb-1">
              DSOM - Dehradun School of Online Marketing
            </h1>

            <div className="flex items-center gap-2 font-light">
              <p className="text-[11px] bg-green-700 py-1 px-2 font-bold h-5 flex items-center justify-center rounded-lg text-white">
                4.6
              </p>
              <div className="flex text-sm items-center gap-1 text-orange-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar className="text-[16px] " />
              </div>
              <p>(20 review )</p>
            </div>
            <div className="flex  text-md text-zinc-900">
              <p>29 Tagore Villa, Above Bank of Baroda, Connau ...</p>
              <a className="underline text-blue-600" href="">
                view map
              </a>
            </div>
            <div className="flex mt-4 gap-2 font-semibold">
              <div className="bg-blue-600 hover:bg-blue-700 text-white  px-4 py-1 text-sm font-semi rounded-sm ">
                <Button
                  className="px-2"
                  text="Show Number"
                  Icon={BsFillTelephoneFill}
                />
              </div>
              <div className="bg-green-700 hover:bg-green-800 text-white  px-4 py-1 text-sm font-semi rounded-sm ">
                <Button
                  className="px-2"
                  text="Enquire now"
                  Icon={AiFillMessage}
                />
              </div>
              <div className=" hover:bg-black font-normal  hover:text-white border-1 px-3 py-1 text-sm font-semi rounded-sm ">
                <Button className="px-2" text="Share" Icon={FaShareAlt} />
              </div>
              <div className="text-blue-600 border-1 font-normal  border-blue-600 hover:bg-gray-400 hover:text-white  px-4 py-1 text-sm font-semi rounded-sm ">
                <Button className="px-2" text="Write a Review" Icon={FaStar} />
              </div>
              <div className=" border-1 font-normal  px-4 py-1 text-sm font-semi rounded-sm ">
                <Button
                  className="px-2"
                  text="10904"
                  Icon={MdOutlineRemoveRedEye}
                />
              </div>
            </div>
          </div>
        </div>

        {/* slider section and details section */}
        
        <Slider />
       
        {/* details and popup section */}

        <div className="flex flex-col">
        <div className="flex flex-col lg:hidden w-full gap-2 px-1">
          <p className="text-[10px] text-black/70 right-3 mt-1  absolute">
            Posted At: 31 Aug 2018 | Ad Id: 13
          </p>
          <h1 className=" leading-4 mt-5 text-[15px] font-[700]">
            DSOM : Dehradun School of Online Marketing
          </h1>
          {/* popup at view more */}
          <div className="flex  items-center">
            <div className="flex text-sm items-center overflow-hidden whitespace-nowrap  w-67 ">
              <FaLocationDot className="absolute items-start" />
              <p className="text-sm ml-4">
                29 Tagore Villa, Above Bank of Baroda, Connaught Place, Dehradun
                -Uttarakhand
              </p>
            </div>
            ...
            <p
              onClick={handleOpen}
              className=" ml-2 text-blue-600 text-sm underline capitalize whitespace-nowrap cursor-pointer"
            >
              view more
            </p>
          </div>

          <hr className="w-full h-[1px] text-gray-200 px-5" />
          {/* coaching institute */}

          <div className="flex items-center min-md:w-xl justify-between ">
            <h2 className="font-[700]">Coaching Institute</h2>

            <div className="flex items-center gap-1  bg-green-200 px-3 py-1 rounded-xl ">
              <RiVerifiedBadgeFill className="text-lg text-green-600 gap-1" />

              <p className="text-xs">AGVerified</p>
            </div>
          </div>
          <hr className="w-full h-[1px] text-gray-200 px-5" />
          {/* reviews popup is here */}

          <div className="flex justify-between min-md:w-xl">
            <div className="flex items-center gap-1">
              <p className=" text-[18px] bg-[#008236] h-6 px-[3px] py-[4px] font-bold w-14 flex items-center justify-center gap-1 rounded-sm text-white">
                4.6
                <FaStar />
              </p>
              <p className="text-orange-500"> (20 Review)</p>
            </div>

            <div className="flex items-center text-xs font-semibold gap-1 bg-[#155dfc] text-white px-2  rounded-lg">
              <FaStar className="text-orange-400 text-xs" />
              <p>View Reviews</p>
            </div>
          </div>
          {/* review and popup section ends */}

          {/* location and other data */}

          <div className="flex flex-col ">
            <p className="flex items-center gap-2">
              {" "}
              <FaLocationDot /> Dehradun/Uttrakhand
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaRegEye />
              Views : 10936
            </p>
            <div className="flex items-center gap-2 ">
              {" "}
              <IoMdTime />{" "}
              <p className="sm:text-sm">
                Business Hours : 8:00 AM to 8:00 PM
              </p>{" "}
            </div>
          </div>
          {/* location and other data ends */}

          <hr className="w-full h-[1px] text-gray-200 px-5" />

          {/* Buttons section */}
          <div className="flex justify-between  min-md:w-xl  items-center relative ">
            <div className="bg-[#0dcaf0] text-[14px]   rounded-sm text-center py-1 px-2">
              <Button text="Call" Icon={FaPhoneVolume} />
            </div>
            <div className="bg-[#00a63e] text-[14px]   text-white rounded-sm text-center  py-1 px-2 ">
              <Button text="WhatsApp" Icon={FaWhatsapp} />
            </div>
            <div className="bg-[#198754] text-[14px]  text-white rounded-sm text-center py-1 px-1 pr-2">
              <Button text="Enquiry" Icon={AiFillMessage} />
            </div>
            <div className=" border-1 text-gray-600 text-md  rounded-sm text-center p-1.5 ">
              <FaGlobe />
            </div>
          </div>
          {/* button section ends */}
          <hr className="w-full h-[1px] text-gray-200 px-5" />

        
        </div>
           {/* report section  */}
         <div className="lg:hidden ">
         <Report  />
         </div>

{/* report section ends */}

{/* about and course section */}

<About />

{/* about section ends */}
        </div>
       
      </div>

      {/* all the right section */}

      <div className="lg:flex flex-col hidden relative right-15 top-35">
        <Left />
        <div className="max-w-md relative right-4">
        <Report />
       </div>
        <LeftImage />
        <Form />
        <Last />
       
      </div>


      {/* heading section for desktop  */}

      <AddressPopUp isOpen={pop} isClose={() => setPop(false)} />
    </div>
  );
};

export default Hero;
