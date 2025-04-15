import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Left from "./components/Left";
import LeftImage from "./components/LeftImage";
import Form from "./components/Form";
import Last from "./components/Last";
import Report from "./components/Report";
import FooterB from "./components/FooterB";


const page = () => {
  return (
    <main className="flex flex-col">
      <div className="  bg-[#eeeeee] h-auto w-full  relative flex items-center justify-center">
      <div className="absolute w-[280px] sm:w-[70%]   md:left-35 left-5 sm:left-10 top-15 my-2  text-sm overflow-x-auto  whitespace-nowrap">
  <div className="flex items-center text-[#212529] w-max">
    <div className="flex text-blue-700">
      <p className="min-w-max underline pr-1">Home</p>/
      <p className="min-w-max underline pr-1">Coaching Institute</p>/
    </div>
    <p className="min-w-max">
      DSOM - Dehradun School of Online Marketing
    </p>
  </div>
</div>


         <div className=" md:w-[80%] w-[95%] my-5 top-15 relative h-[2000px] mt-8  bg-white rounded-md">


          <Hero />

         </div>
        
      </div>
      {/* <FooterB /> */}
    </main>
  );
};

export default page;
