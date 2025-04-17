import React from 'react'
import Image from "next/image";
import {
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
    FaXTwitter,
    FaInstagram,
  } from "react-icons/fa6";
  import { TfiInfo } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";


const FooterB = () => {
  return (
    <div className='flex flex-col pl-3 lg:pl-0 '>

       {/* first section of footer */}
       <div className='flex flex-col lg:flex-row justify-around lg:pl-20'>
        {/* part 1 */}
        <div className="  flex flex-col gap-4  pt-8 ">
    <div className="object-cover h-12  w-47 relative left-18 ">
    <Image
    className="absolute  "
        src="/logopng.png"
        alt='Address Guru logo'
        priority
        layout="fill"
      />
    </div>

     <p className="px-4  w-full lg:w-sm">
     Address Guru Is Online Local Business Directory That Provide Information 
     About Your Daily Needs Just One Click Away.
      We Get Your Business Listed On It And Grow Online By Reaching Everyone Who Search You Online.
     </p>

      {/* Social Media Icons */}
      <div className="flex space-x-4 pl-5 ">
       <a href="#" className="text-gray-600 hover:text-black text-xl">
         <FaFacebookF />
       </a>
       <a href="#" className="text-gray-600 hover:text-black text-xl">
         <FaYoutube />
       </a>
       <a href="#" className="text-gray-600 hover:text-black text-xl">
         <FaLinkedinIn />
       </a>
       <a href="#" className="text-gray-600 hover:text-black text-xl">
         <FaXTwitter />
       </a>
       <a href="#" className="text-gray-600 hover:text-black text-xl">
         <FaInstagram />
       </a>
     </div>
   </div>
    {/* part 2 */}

    <div className='px-6 mt-8 whitespace-nowrap'>
    <div className=" relative right-2 flex text-2xl items-center">
      <TfiInfo />

      <h3 className=" text-lg">Important Links</h3>
    </div>

    <ul className="mt-6 space-y-1 text-blue-600  ">
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          About Us
        </a>
      </li>

      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </li>
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Become a Partner
        </a>
      </li>
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Posting Rules
        </a>
      </li>
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Marketplace
        </a>
      </li>
    </ul>
  </div>
  {/* part 3 */}
  <div className='px-6 mt-8 lg:ml-10 whitespace-nowrap'>
    <div className="flex text-2xl relative right-2 items-center ">
      <IoSearchSharp />

      <h3 className=" text-lg">Quick Links</h3>
    </div>
    <ul className="mt-6 space-y-1 text-blue-600 ">
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Post Ad
        </a>
      </li>
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Our Plans
        </a>
      </li>
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Infringement Policy
        </a>
      </li>
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </li>
      <li className="flex items-center relative right-2 gap-1">
        <FaAngleRight className="text-lg text-black" />
        <a href="#" className="hover:underline">
          Open the app
        </a>
      </li>
    </ul>
  </div>

  {/* part 4 */}
  <div className="pl-4 mt-4 lg:mt-6  ">
    <h3 className="font-semibold text-xl lg:text-2xl lg:w-60 text-black">
      Download our app here...
    </h3>
    <a href="#" className="mt-2 block">
      <Image
        src="/download.jpg"
        alt="google play imsge"
        height={500}
        width={500}
        className='w-40'
      />
    </a>
  </div>

 
  

       </div>

        {/* second section */}

        <div className=' mt-15 flex flex-col lg:flex-row lg:justify-around lg:px-20 pl-5 space-y-1 lg:space-y-0 '>

          {/* contact section */}
          <div>
      <h3 className="font-bold ">Contact by Phone</h3>
      <p className="flex items-center mt-2">
        <FaPhoneAlt className="text-2xl relative top-1 " />
        <a
          href="tel:9410102425"
          className="text-blue-600 text-sm pl-4 hover:underline"
        >
          94-1010-2425
        </a>
      </p>
      <p className="text-xs pl-10 text-gray-600">
        Booking time: 0800 - 2000 hrs
      </p>
    </div>

    {/* feedback section */}
     <div>
      <h3 className="font-bold">Give your Feedback</h3>
      <p className="flex items-center mt-2">
        <FaEnvelope className="text-2xl relative top-1" />
        <a
          href="mailto:contact@addressguru.in"
          className="text-blue-600 text-sm pl-4 hover:underline"
        >
          contact@addressguru.in
        </a>
      </p>
      <p className="text-xs pl-10 text-gray-600">Help us improve!</p>
    </div>

    {/* Services and Support */}
    <div>
      <h3 className="font-bold">Services and Support</h3>
      <p className="flex items-center mt-2">
        <FaHeadset className="text-2xl relative top-1" />
        <a
          href="#"
          className="text-blue-600 text-sm pl-4 hover:underline"
        >
          Support Centre
        </a>
      </p>
      <p className="text-xs pl-10 text-gray-600">
        29, Tagore Villa, Dehradun UK
      </p>
    </div>

        {/* Our Partners */}
        <div>
      <h3 className="font-bold lg:pr-10 ">Our Partners</h3>
      <Image
      className="mt-6 relative "
        src="/adxventure_logo.png"
        alt="Partners"
        width={150}
        height={100}
      />
      
     
    </div>

    {/* third section description and partners */}




        </div>

 



    </div>
  )
}

export default FooterB