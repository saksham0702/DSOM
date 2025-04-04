import React from 'react'
import Image from 'next/image'

const LeftImage = () => {
  return (
    <div className='w-[349px] h-[349px] rounded-md border-2 border-[#ebeced]  relative right-3 mt-4 flex items-center justify-center'>
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