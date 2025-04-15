import React from 'react'
import { RxCross2 } from "react-icons/rx";

import { FaRegHandPointRight } from "react-icons/fa6";

const Report = () => {
  return (
    <div className=" hidden md:flex justify-between text-xs pt-1">
    <div className="flex items-center relative right-2 gap-1 text-red-600">
      <RxCross2 className="bg-red-600  text-white" />
      <p>Report</p>
    </div>

    <div className="flex items-center mr-4">
      <FaRegHandPointRight className="text-sm text-blue-600" />
      <p>Claim the Business</p>
    </div>
  </div>
  )
}

export default Report