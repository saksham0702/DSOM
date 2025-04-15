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
import { FaShare } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";
import Slider from "./Slider";
import Button from "./Button";


const Hero = () => {
  const [pop, setpop] = useState(false);

  const getPopup = () => {
    setpop(!pop);
  };
  return (
    <div className="md:flex relative gap-2 m-2">
      {/*  popup section */}
      {pop === true ? (
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
      )}

      {/* popup ends */}

      <div className="md:flex-col md:flex h-auto w-full items-start">
        {/* Image section for desktop */}
        <div className="flex gap-5">
          <div className="border-1 hidden md:block  border-gray-300 rounded-md relative left-[-4px] h-28 w-44  ">
            <Image
              className="w-44 h-26 "
              src="/main-logo.png"
              alt="main-image"
              height={100}
              width={100}
            />
          </div>

          {/* for desktop */}
          <div className=" hidden md:flex flex-col">
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
        <div className="flex flex-col md:hidden gap-2 px-1">
          <p className="text-[10px] right-0.5  absolute">
            Posted At: 31 Aug 2018 | Ad Id: 13
          </p>
          <h1 className=" leading-4 mt-4 text-[15px] font-[700]">
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
              onClick={getPopup}
              className=" ml-2 text-blue-600 text-sm underline capitalize whitespace-nowrap cursor-pointer"
            >
              view more
            </p>
          </div>

          <hr className="w-full h-[1px] text-gray-200 px-5" />
          {/* coaching institute */}

          <div className="flex items-center justify-between ">
            <h2 className="font-[700]">Coaching Institute</h2>

            <div className="flex items-center gap-1 mr-2 bg-green-200 px-3 py-1 rounded-xl ">
              <RiVerifiedBadgeFill className="text-lg text-green-600 gap-1" />

              <p className="text-xs">AGVerified</p>
            </div>
          </div>
          <hr className="w-full h-[1px] text-gray-200 px-5" />
          {/* reviews popup is here */}

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <p className=" text-[16px] bg-green-700 py-1 px-1 font-bold w-14 flex items-center justify-center gap-1 rounded-lg text-white">
                4.6
                <FaStar />
              </p>
              <p className="text-orange-600"> (20 reviews)</p>
            </div>

            <div className="flex items-center text-xs font-semibold gap-1 bg-blue-600 text-white px-2 h-6 mr-2 rounded-lg">
              <FaStar className="text-orange-400 text-xs" />
              <p>view reviews</p>
            </div>
          </div>

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
              <IoMdTime /> <p className="sm:text-sm">Business Hours : 8:00 AM to 8:00 PM</p>{" "}
            </div>
          </div>

          <hr className="w-full h-[1px] text-gray-200 px-5" />

            {/* Buttons section */}
           <div className="flex justify-between w-full  items-center relative ">
              <div className="bg-[#0dcaf0] text-[14px]   rounded-sm text-center py-1 px-2">
              <Button text= "Call" Icon={FaPhoneVolume} />
              </div>
              <div className="bg-[#00a63e] text-[14px]   text-white rounded-sm text-center  py-1 px-2 ">
              <Button text= "WhatsApp" Icon={FaWhatsapp} />
              </div>
              <div className="bg-[#198754] text-[14px]  text-white rounded-sm text-center py-1 px-1 pr-2">
              <Button text= "Enquiry" Icon={AiFillMessage} />
              </div>
              <div className=" border-1 text-gray-600 text-md  rounded-sm text-center p-1.5 ">
               <FaGlobe />
              </div>
             
           </div>
        </div>
      </div>

      {/* heading section for desktop  */}
    </div>
  );
};

export default Hero;