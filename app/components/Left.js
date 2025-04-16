import React from 'react'
import { LuClock4 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const Left = () => {
  return (
    <div className=' hidden bg-[#ebeced]/70 w-[348.656px] h-[202.578px] pt-4 pl-6 md:flex flex-col rounded-md relative right-3 mt-3 px-4 gap-2'>
        <h1 className='mt-2 font-bold text-[22px] '>
        Quick Information
        </h1>
        <hr className='text-gray-200 ' />
        <div className=' items-center flex text-sm text-zinc-900'>
        <LuClock4 className='mr-1 text-lg' />
        <p className='mr-3'>Business Hours: 08:00 AM to 08:00 PM</p>
        <IoIosArrowDown className='text-lg' />
        </div>
        <hr className='text-gray-200  ' />
        <p className='text-zinc-900'>
        Category: Coaching Institute
        </p>
        <hr className='text-gray-200' />
        <button className=' border-[0.1px]  border-zinc-600 rounded-full text-sm w-24 py-1 px-2 text-zinc-700'>
            visit website
        </button>
    </div>
    
  )
}

export default Left