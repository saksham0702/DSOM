import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import Button from './Button';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className=' h-16 w-screen  bg-[#f8f9fa] text-[#212529] font-[16px] flex items-center gap-20   '>
    {/* left-section */}
    <div className='h-[42.5312px] w-[900px] flex items-center  '>
        {/* icon */}
       <div className=' ml-3 w-[60px] h-[30px] rounded-[6px] flex items-center justify-center border-[1px] border-gray-300 text-[18px]'>
       <RxHamburgerMenu />
       </div >
       {/* image */}
       <div className=' px-2 '>

       <Image 
        src="/logopng.png"  
        alt="logo-image"
        height={250}
        width={250}
      />

       </div>
     {/* dropdown */}
       <div>
       <select
      className="w-[321.469px] h-[38px] text-[16px] leading-[24px] font-normal tracking-normal 
      px-1 text-[#212529] bg-white border border-gray-300 rounded-l-md ml-2
       focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 border-r-0"
    >
      <option >Choose City</option>
      <option value="newyork">New York</option>
      <option value="london">London</option>
      <option value="paris">Paris</option>
      <option value="tokyo">Tokyo</option>
    </select>
       </div>
       {/* search */}
       <div className="w-[183.562px] h-[38px] flex items-center border border-gray-300 bg-white focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
      <input
        type="text"
        placeholder="Search"
        className=" text-[16px] pl-3 tracking-normal text-[#212529]"
      />
    </div>
    <div className="px-1 hover:bg-green-800 hover:text-white border-1 border-green-700 font-bold text-green-700 h-10 w-15 rounded-r-md flex items-center justify-center ">
        <IoSearchSharp className=" text-xl " />
      </div>
    </div>
   {/* right-section */}
   <div className='h-[49px] w-[560.406px] flex items-center gap-5 ml-7'>
    {/* icon and text section */}
   <div className='flex items-center gap-7 h-full capitalize  text-blue-600 '>
     <div className='flex flex-col '>
     <MdHome className=' w-10 h-7' />
     <p className="text-xs text-center relative bottom-1"> to let</p>
     </div>
     <div className='flex flex-col'>
     <RiShoppingBagFill className='text-2xl' />
     <p className="text-xs text-center"> jobs</p>
     </div>
     <div className='flex flex-col justify-center'>
     <FaCartShopping className='text-2xl text-center relative left-5' />
     <p className=" text-xs text-center"> marketplace</p>
     </div>

  
   </div >
   
   <div className="h-full w-[1px] bg-gray-300 "></div>

{/* button section */}
<div className='flex gap-4 items-center'>
<div className="  hover:bg-yellow-400 hover:text-black bg-orange-500 rounded-md px-3 py-2  text-white ">
      <Button text="Post Free Add + " />
    </div>

<div className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md'>
  <Button text="Login" Icon={CgLogIn}  />
</div>
</div>

   

   </div>


    </nav>
  )
}

export default Navbar