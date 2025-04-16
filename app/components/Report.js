import React from 'react'
import { RxCross2 } from "react-icons/rx";

import { FaRegHandPointRight } from "react-icons/fa6";

const Report = () => {
  return (
    <div className=" flex justify-between  text-xs pt-1">
    <div className="flex items-center relative right-2 gap-1 ml-4 text-red-600">
      <RxCross2 className="bg-red-600  text-white" />
      <p>Report</p>
    </div>

    <div className="flex items-center mr-1">
      <FaRegHandPointRight className="text-sm text-blue-600" />
      <p>Claim the Business</p>
    </div>
  </div>
  )
}

export default Report