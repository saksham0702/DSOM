import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Left from "./components/Left";
import { RxCross2 } from "react-icons/rx";

import { FaRegHandPointRight } from "react-icons/fa6";
import LeftImage from "./components/LeftImage";
import Form from "./components/Form";
import Last from "./components/Last";
import FooterB from "./components/FooterB";

const page = () => {
  return (
    <main className="flex flex-col">
    <div className=" h-[2000px] bg-[#eeeeee] flex flex-col">
      <div className="w-[1140px] h-[24px] text-[13px]  flex absolute top-14 left-32 py-2 mt-2 gap-1">
        <a className="text-blue-500 underline" href="">
          Home
        </a>{" "}
        <p>/</p>{" "}
        <a className="text-blue-500 underline" href="">
          Coaching Institute
        </a>{" "}
        <p>/</p>{" "}
        <p className="text-[#535a61] ">
          DSOM - Dehradun School of Online Marketing
        </p>
      </div>

      {/* center section */}
      <div className="w-[1120px]  bg-white rounded-md border-1 flex flex-col border-gray-300 relative top-24 left-30">
      <Hero />
      <div className="flex ">
        <div className="flex flex-col  min-w-[721.328px] ">
        
        <About />
        </div>
        <div>

         <Left />
         <div className="flex justify-between text-xs pt-1">

          <div className="flex items-center relative right-2 gap-1 text-red-600">
           <RxCross2 className="bg-red-600  text-white" />
            <p>Report</p>
          </div>

           <div className="flex items-center mr-4">
            <FaRegHandPointRight className="text-sm text-blue-600" />
            <p>
              Claim the Business
            </p>
           </div>

         </div>
         <LeftImage />
         <Form />
        
        <Last />
        
        </div>

      </div>
      </div>


    </div>
    <FooterB />
    </main>
  );
};

export default page;
