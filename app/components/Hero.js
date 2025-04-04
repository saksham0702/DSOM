import React from 'react'
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Button from './Button';

const Hero = () => {
  return (
    <div className="flex gap-2 z-0  pl-2 m-2 ">
    {/* Image section */}
    <div className="border-1 border-gray-300 rounded-md relative left-[-4px] h-28 w-44  ">
      <Image
        className="w-44 h-26 "
        src="/main-logo.png"
        alt="main-image"
        height={100}
        width={100}
      />
    </div>

    {/* heading section */}
    <div className="flex flex-col">
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
        <Button className="px-2" text="Show Number" Icon={BsFillTelephoneFill} />
      </div>
      <div className="bg-green-700 hover:bg-green-800 text-white  px-4 py-1 text-sm font-semi rounded-sm ">
        <Button className="px-2" text="Enquire now" Icon={AiFillMessage} />
      </div>
      <div className=" hover:bg-black font-normal  hover:text-white border-1 px-3 py-1 text-sm font-semi rounded-sm ">
        <Button className="px-2" text="Share" Icon={FaShareAlt} />
      </div>
      <div className="text-blue-600 border-1 font-normal  border-blue-600 hover:bg-gray-400 hover:text-white  px-4 py-1 text-sm font-semi rounded-sm ">
        <Button className="px-2" text="Write a Review" Icon={FaStar} />
      </div>
      <div className=" border-1 font-normal  px-4 py-1 text-sm font-semi rounded-sm ">
        <Button className="px-2" text="10904" Icon={MdOutlineRemoveRedEye} />
      </div>
    </div>
    </div>

    
  </div>
  )
}

export default Hero