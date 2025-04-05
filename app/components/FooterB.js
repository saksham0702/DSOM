import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
import { TfiInfo } from "react-icons/tfi";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";

import Image from "next/image";

const FooterB = () => {
  return (
    <footer className="bg-[#fbfbfb] text-gray-700  flex flex-col  h-screen">
      <div className="container  py-6 px-4  flex flex-col md:flex-row gap-10 items-start space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="w-[380px] h-[266.797px] ml-[115px]  text-[#212529]">
          <div className=" relative left-15 mb-4 ">
            <Image
              src="/logopng.png"
              alt="logo image"
              height={100}
              width={210}
            />
          </div>

          <p className="mt-2 text-[16px] text-lg w-[370px] px-1 text-left  h-[120px]">
            Address Guru Is Online Local Business Directory That Provide
            Information About Your Daily Needs Just One Click Away. We Get Your
            Business Listed On It And Grow Online By Reaching Everyone Who
            Search You Online.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
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

        {/* Middle Section - Links */}
        <div className="flex space-x-20 mt-4 relative right-5">
          <div>
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
          <div>
            <div className="flex text-2xl relative right-2 items-center">
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
        </div>

        {/* Right Section - App Download */}
        <div className="text-center mt-4 ml-6 md:text-left w-[250px]">
          <h3 className="font-semibold text-2xl text-black">
            Download our app here...
          </h3>
          <a href="#" className="mt-2 block">
            <Image
              src="/download.jpg"
              alt="google play imsge"
              height={100}
              width={170}
            />
          </a>
        </div>
      </div>

    
      <div className="bg-white mt-4 text-black p-6">
        <div className="grid md:grid-cols-4 gap-6 px-20">
          {/* Contact by Phone */}
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

        
          {/* Give your Feedback */}
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
            <h3 className="font-bold ">Our Partners</h3>
            <Image
            className="mt-6 relative "
              src="/adxventure_logo.png"
              alt="Partners"
              width={150}
              height={100}
            />
            
            <Image
            className=" absolute left-245 "
              src="/comapnies.png"
              alt="Partners"
              width={250}
              height={100}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <div className=" text-xs relative  text-[#8b8b8b] w-[900px] h-[144px] pl-20">
          <p>
            <strong>Disclaimer:</strong> The information provided on AddressGuru
            is submitted by users and businesses and is for general
            informational purposes only. All trademarks, logos, and brand names
            mentioned belong to their respective owners. AddressGuru is not
            responsible for any losses, damages, or disputes arising from user
            interactions, including but not limited to financial transactions or
            service agreements.
          </p>
          <p className="mt-3">
            You are free to use our platform for commercial purposes, but any
            other kind of use is strictly prohibited. We are free to ban any
            type of content or Ad which is not complying with our policies.
          </p>
          <p className="mt-3">
            Before posting anything or becoming a partner of Address Guru, read
            carefully all the posting policies.
          </p>
        </div>
      </div>
      <div className="w-full py-4 text-white flex items-center pl-24 gap-160 bg-black ">
        <p><strong>22,512</strong> Live Ads |<strong> 3,665+ </strong>Agents</p>

       <div className="flex items-center gap-1"> © 2024 AddressGuru | by: <p className="text-blue-600 font-bold"> AdxVenture</p> </div> 
       
      </div>
    </footer>
  );
};

export default FooterB;
