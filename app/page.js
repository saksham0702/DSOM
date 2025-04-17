import React from "react";
import Hero from "./components/Hero";
import FooterB from "./components/FooterB";



const page = () => {
  return (
    <main className="flex flex-col">
      <div className="  bg-[#eeeeee] h-auto w-full  relative flex items-center justify-center">
      <div className="absolute  md:left-26 w-[90vw]   left-5 sm:left-10 top-15 mt-2 mb-3 lg:left-27 lg:w-xl  text-[13px] text-gray-600 overflow-x-auto  whitespace-nowrap">
  <div className="flex items-center w-max">
    <div className="flex text-blue-600">
      <p className="min-w-max underline pr-1">Home</p>/
      <p className="min-w-max underline pr-1">Coaching Institute</p>/
    </div>
    <p className=" max-w-30  ">
      DSOM - Dehradun School of Online Marketing
    </p>
  </div>
</div>


         <div className=" md:w-[80%] lg:w-[85%]  w-[95%] my-5 top-15 relative pb-20 mb-32 min-h-[1500px]  border-1 border-gray-500/30 mt-8  bg-white rounded-md">


          <Hero />

         </div>
        
      </div>
      <FooterB />
    </main>
  );
};

export default page;
