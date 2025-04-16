import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoInformation } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { IoHammer } from "react-icons/io5";
import { IoIosCard } from "react-icons/io";
import { ImCogs } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


import { CgLogIn } from "react-icons/cg";
import Button from './Button';
import Image from 'next/image';

const Navbar = () => {

  return (
    <nav className='text-[#212529] bg-[#F8F9FA] flex items-center py-2 px-3 gap-2 justify-between w-full fixed z-50 '>
      {/* navigation for hamburger */}


      <div className=' flex-col fixed hidden    h-[100vh] max-w-[400px]   inset-0 bg-white z-[9999999999999] '>
        {/* image and cross section */}
        <div className='flex justify-between w-max  items-center px-4 pt-4 '>

          
        <Image
        src= "/logopng.png"
        alt='Address Guru logo'
        priority
        height={500}
        width={500}
        className=' w-50 h-14 '
        />
        <RxCross2 className='text-[26px] text-black/45 ' />

        </div>

        {/* link section */}

        <div>





        </div>

        {/* follow section */}
        <div className='flex flex-col text-2xl gap-2 mt-4 ml-6 '> 
          <h1>Follow Us On :</h1>

           {/* icons */}

           <div className='flex gap-2 text-blue-700 text-3xl'>
            <FaFacebookF />
            <FaInstagram />
           
            <FaXTwitter />
            <FaYoutube />
           </div>
          <div>
             

          </div>
        </div>


      </div>
      {/* left section */}

      <div>
      <div className=' px-2 md:py-1 py-2 font-light rounded-[6px] flex items-center justify-center border-[1px] border-gray-300 text-[18px]'>
       <RxHamburgerMenu />
       </div >
      </div>
      {/* center section for mobile only */}
      <div className='ml-1 flex items-center'> 

        <Image
        src= "/logopng.png"
        alt='Address Guru logo'
        priority
        height={160}
        width={160}
        />

        {/* mid section chose and search */}
        <div className=' hidden lg:flex  items-center'>

          {/* chose section */}
        <select
      className="  w-[321.469px] h-[38px] text-[16px] leading-[24px] font-normal tracking-normal 
      px-1 text-[#212529] bg-white border border-gray-300 rounded-l-md ml-2
       focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 border-r-0">
      <option >Choose City</option>
      <option value="newyork">New York</option>
      <option value="london">London</option>
      <option value="paris">Paris</option>
      <option value="tokyo">Tokyo</option>
    </select>
    {/* SEARCH SECTION */}
    <div className=" hidden  w-[183.562px] h-[38px] lg:flex items-center border  border-gray-300 bg-white focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
      <input
        type="text"
        placeholder="Search"
        className=" text-[16px] pl-3 tracking-normal text-[#212529]"
      />
    </div>
    <div className="px-1 hover:bg-green-800 mr-10 hover:text-white border-1 border-green-700 font-bold text-green-700 h-9 w-10 rounded-r-md hidden md:flex items-center justify-center ">
        <IoSearchSharp className=" text-xl  " />
      </div>

        </div>


      </div>


      {/* right section */}

      <div className=''>
      <select className='text-blue-700 border-none text-[14px] lg:hidden '>
    <option value="dehradun">Dehradun</option>
   </select>

   <div className='h-[49px] max-w-[560.406px] hidden lg:flex items-center pl-18 gap-5  '>
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
<div className="  hover:bg-yellow-400 hover:text-black bg-orange-500 rounded-md px-3 py-3 flex flex-nowrap leading-none tracking-tighter w-32  text-white ">
      <Button text="Post Free Add +" />
    </div>

<div className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md'>
  <Button text="Login" Icon={CgLogIn}  />
</div>
</div>
   </div>
      </div>

     


    </nav>
  )
}

export default Navbar