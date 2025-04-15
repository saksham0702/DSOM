import React from 'react'
import Image from 'next/image'

const LeftImage = () => {
  return (
    <div className='max-w-[349px] max-h-[349px] rounded-md border-2 border-[#ebeced]  relative right-3 mt-4 hidden md:flex items-center justify-center'>
        <Image className='h-[95%] w-[95%] rounded-lg '
         src= '/ad_dsom.jpg'
         alt='dsom img'
         height={100}
         width={100}
        />



    </div>
  )
}

export default LeftImage