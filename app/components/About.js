import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col">
    

      <div className="flex flex-col">
        {/* about section */}
        <h1 className="text-2xl font-bold ml-4 mt-4 mb-2  text-[#212529]">
          About Us
        </h1>
        <hr className="ml-2 w-[65%] text-gray-300" />
        <p className="md:w-[721.328px] w-100 h-auto text-[#212529] ml-4 my-3">
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
        <h1 className="text-2xl font-bold ml-3 mt-4 mb-2  text-[#212529]">
          Courses
        </h1>
        <hr className="ml-2 w-[65%] text-gray-300" />
        <p className="md:w-[721.328px] w-100 h-auto text-sm text-[#212529] ml-4 mt-3">
          DSOM - Dehradun School of Online Marketing provides the following
          courses:
        </p>
        <div className="md:flex ml-4 gap-45 my-5">
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
          <h1 className="text-2xl font-bold ml-3  mb-2  text-[#212529]">
            Facilities
          </h1>
          <hr className="ml-2 w-[65%] text-gray-300" />
          <p className=" md:w-[721.328px] w-100 h-auto text-sm text-[#212529] ml-4 mt-3">
            DSOM - Dehradun School of Online Marketing provides the following
            facilities:
          </p>
          <div className=" md:flex ml-4 gap-63 my-5">
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
          <h1 className="text-2xl font-bold ml-3  mb-2  text-[#212529]">
            Payment Modes
          </h1>
          <hr className=" mx-4 w-[120vh] text-gray-300" />
          <p className="md:w-[721.328px] w-100 h-auto text-sm text-[#212529] ml-4 my-3">
            DSOM - Dehradun School of Online Marketing provides the following
            payment modes:
          </p>
          <div className=" md:flex ml-4 gap-78 mb-3">
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

        <div className="flex flex-col">
          <div className="md:flex gap-82">
            <h1 className="text-2xl font-bold ml-3 mt-4 mb-2  text-[#212529]">
              State
            </h1>
            <h1 className="text-2xl font-bold ml-3 mt-4 mb-2  text-[#212529]">
              City
            </h1>
          </div>
          <hr className="ml-2 w-[65%] text-gray-300 my-2" />
          <div className="md:flex gap-75 mb-4">
            <p className="ml-4">Uttrakhand</p>
            <p className="ml-4">Dehradun</p>
          </div>
        </div>

        {/* last section */}
        <div className="flex-col flex">
          <h1 className="ml-3 text-3xl font-bold mt-6 w-100  md:w-[721.328px]  ">
            Overview - DSOM - Dehradun School of Online Marketing
          </h1>
          <hr className="ml-2 w-[65%]  text-gray-300 my-2" />
          <p className="md:w-[721.328px] w-100  ml-3">
            DSOM - Dehradun School of Online Marketing at 29 Tagore Villa, Above
            Bank of Baroda, Connaught Place, Dehradun -Uttarakhand is a Coaching
            Institute in Dehradun. Their courses are :- SMO Training Digital
            marketing training 90 days Search Engine Optimization Graphic
            Designing Website Designing Full Stack Development . Their
            facilities are :- Wifi Transport 24 Hr Electricity , their
            acceptable payment mode is Cash Net Banking Cheque Other
          </p>
          <p className="ml-4 my-5 w-100">
            Scroll to the top for more details of DSOM - Dehradun School of
            Online Marketing
          </p>
          <p className="ml-4 w-100 mb-20">
            Don't forget to tell, you found DSOM - Dehradun School of Online
            Marketing on <b>Address Guru</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
