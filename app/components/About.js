import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col">
    

      <div className="flex flex-col text-[#212529]">
        {/* about section */}
        <h1 className=" md:text-2xl font-[630]  mt-4 mb-2 text-xl   ">
          About Us
        </h1>
        <hr className="w-full h-[1px] text-gray-200 px-5" />
        <p className="lg:w-[721.328px] sm:w-sm  h-auto text-[#212529]  my-3">
          DSOM (Dehradun School of Online Marketing) is one of the top institute
          providing best digital marketing courses in Dehradun. Established in
          year and since then DSOM had trained more then + students and
          professionals, more than + students got selected in campus placement
          by DSOM. + former DSOM's students of Digital marketing courses in
          Dehradun are running their own business. DSOM is setting daily new
          standards and training their students according to the industry
          requirement. DSOM working with the motto of “provide best quality
          education at affordable prices” has already established itself as one
          of the best institute in and around providing digital marketing
          courses in Dehradun.
        </p>
      </div>

      {/* course section */}
      <div className="flex flex-col">
        <h1 className="md:text-2xl font-bold sm:text-xl mt-4 mb-2 text-xl  text-[#212529]">
          Courses
        </h1>
        <hr className="w-full h-[1px] text-gray-200 px-5" />
        <p className="lg:min-w-[721.328px] sm:w-md h-auto text-sm text-[#212529] sm:text-sm mt-3">
          DSOM - Dehradun School of Online Marketing provides the following
          courses:
        </p>
        <div className="md:flex  gap-41 my-5">
          <div>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                  className=""
                ></path>
              </svg>{" "}
              SMO Training
            </p>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                  className=""
                ></path>
              </svg>
              Search Engine Optimization
            </p>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                  className=""
                ></path>
              </svg>{" "}
              Website Designing
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                  className=""
                ></path>
              </svg>
              Digital marketing training 90 days
            </p>

            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                  className=""
                ></path>
              </svg>
              Graphic Designing
            </p>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                  className=""
                ></path>
              </svg>
              Full Stack Development
            </p>
          </div>
        </div>

        {/* facility section */}
        <div className="flex flex-col">
          <h1 className="md:text-2xl font-bold text-xl   mb-2  text-[#212529]">
            Facilities
          </h1>
          <hr className="w-full h-[1px] text-gray-200 px-5" />
          <p className=" md:w-[721.328px] sm:w-[26rem] h-auto text-sm text-[#212529]  mt-3">
            DSOM - Dehradun School of Online Marketing provides the following
            facilities:
          </p>
          <div className=" md:flex  gap-63 my-5">
            <div>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>
                Wifi
              </p>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>
                24 Hr Electricity
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>
                Transport
              </p>
            </div>
          </div>
        </div>
        {/* payment section */}
        <div className="flex flex-col">
          <h1 className="md:text-2xl font-bold  text-xl  mb-2  text-[#212529]">
            Payment Modes
          </h1>
          <hr className="w-full h-[1px] text-gray-200 px-5" />
          <p className="md:w-[721.328px]  sm:w-[26rem] h-auto text-sm text-[#212529]  my-3">
            DSOM - Dehradun School of Online Marketing provides the following
            payment modes:
          </p>
          <div className=" md:flex  gap-78 mb-3">
            <div>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>
                Cash
              </p>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>
                Cheque
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>
                Net Banking
              </p>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                    className=""
                  ></path>
                </svg>
                Other
              </p>
            </div>
          </div>
        </div>

        {/* state-city */}

       <div className="flex max-md:flex-col text-[#212529]  max-md:gap-5 gap-7 ">
            <div>
              <h1 className="text-2xl font-bold">State</h1>
              <hr className="w-90 max-md:w-full h-[1px] my-2 text-gray-200 px-5" />
               <p className="">Uttrakhand</p>
            </div>
            <div>
            <h1 className="text-2xl font-bold">City</h1>
            <hr className=" w-60 h-[1px] max-md:w-full my-2 text-gray-200 px-5" />
              <p>Dehradun</p>
            </div>
       </div>

        {/* last section */}
        <div className="flex-col flex">
          <h1 className=" md:text-3xl text-[20px] font-[700] mt-6 sm:w-[26rem]  lg:w-[721.328px]  ">
            Overview - DSOM - Dehradun School of Online Marketing
          </h1>
          <hr className="w-full h-[1px] text-gray-200 px-5 my-2" />
          <p className="lg:w-[721.328px] sm:w-[26rem]  ">
            DSOM - Dehradun School of Online Marketing at 29 Tagore Villa, Above
            Bank of Baroda, Connaught Place, Dehradun -Uttarakhand is a Coaching
            Institute in Dehradun. Their courses are :- SMO Training Digital
            marketing training 90 days Search Engine Optimization Graphic
            Designing Website Designing Full Stack Development . Their
            facilities are :- Wifi Transport 24 Hr Electricity , their
            acceptable payment mode is Cash Net Banking Cheque Other
          </p>
          <p className=" my-5 sm:w-[26rem] lg:w-[721.328px]  ">
            Scroll to the top for more details of DSOM - Dehradun School of
            Online Marketing
          </p>
          <p className="  sm:w-[26rem] lg:w-[721.328px]  ">
            Don't forget to tell, you found DSOM - Dehradun School of Online
            Marketing on <b>Address Guru</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
