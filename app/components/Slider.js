'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaShare } from 'react-icons/fa';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { RxCross1 } from 'react-icons/rx';

const Slider = () => {
 
  const [pop, setpop] = useState(false);
    
  const getPopup = () => {
    setpop(!pop);
  };
  return (
    
    <div className=" w-full h-[160px] md:h-[300px]  lg:w-[720px]   lg:h-[400px] lg:mt-5 ">
    {/* pop section starts  */}
    {pop === true ? (
        <div className="fixed z-[999999999] bg-black/50 w-full h-[100vh] top-0 left-0 m-0">
          <div className=" flex items-center h-full w-full justify-center mt-10 ">
            <div className="bg-white relative bottom-7 flex justify-center items-center flex-col py-2 px-3 rounded-md max-w-md w-[90%]">

             <div className='  mr-2 absolute  right-0 top-1 cursor-pointer   border-2 rounded-full border-blue-700'>
             <RxCross1 onClick={getPopup} className=" text-sm text-blue-700 " 
                             />
             </div>
             
               <h1 className=' mt-4 text-xl font-bold'>Share on</h1>

              {/* icons area */}
              <div className="flex gap-2 mt-2 mb-1">
      <div className="bg-green-500 text-white p-2  text-xl">
        <FaWhatsapp />
      </div>
      <div className="bg-blue-400 text-white p-2  text-xl">
        <FaTelegramPlane />
      </div>
      <div className="bg-blue-600 text-white p-2 text-xl">
        <FaFacebookF />
      </div>
      <div className="bg-blue-700 text-white p-2  text-xl">
        <FaLinkedinIn />
      </div>
      <div className="bg-black text-white p-2 text-xl">
        <FaXTwitter />
      </div>
    </div>

              </div>

            
          </div>
        </div>
      ) : (
        <></>
      )}

    {/* popsection ends */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop={true}
        className="min-w-full h-full  sm:h-[280px] md:h-full md:w-full rounded-md"
      >
           <div onClick={getPopup} className="absolute top-0 right-0 h-7 w-7 cursor-pointer shadow-md border-1 border-gray-200 flex items-center justify-center rounded-md bg-white text-black sm:hidden z-10">
              <FaShare />
            </div>
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide
            key={item}
            className="relative w-full h-full rounded-md bg-white flex justify-center items-center"
          >
            <Image
              src={`/slider${item}.png`}
              alt={`Slide ${item}`}
              fill
              className="object-cover rounded-md"
            />
           
          </SwiperSlide>
        ))}
      </Swiper>
       <div className="lg:flex flex-col hidden w-full gap-2 px-1">
          <p className="text-[10px] left-140 mt-1  absolute">
            Posted At: 31 Aug 2018 | Ad Id: 13
          </p>
          </div>
    </div>
  );
};

export default Slider;
