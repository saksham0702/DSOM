import React from 'react'
import { RxCross1 } from "react-icons/rx";

const ShowNumberPopup = ({isClose , isOpen}) => {
  return (
    <>
    {isOpen && (
      <div className="fixed z-[999999999] bg-black/50 w-full h-[100vh] top-0 left-0 m-0">
        <div className=" flex items-center h-full w-full justify-center mt-10 ">
        
        <RxCross1
                  onClick={isClose}
                  className="cursor-pointer text-xl hover:text-red-500"
                />
           
         
        </div>
      </div>
    )}
  </>
  )
}

export default ShowNumberPopup