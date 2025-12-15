import React from 'react'
import ekiti_logo from '/ekiti_logo.png'

function Footer() {
  return (
    <div className='w-full bg-[#0B7300] text-white py-4 flex justify-center items-center'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12'>
        <img src={ekiti_logo} alt="ekiti_logo" className='w-22' />

        <div className='flex items-center gap-4 text-sm md:text-base flex-wrap justify-center'>
          <p className='text-center text-sm'> Powered by</p>
          <div className="self-center border-l-2 border-white border-solid h-4 "></div>
          <p className='text-center text-sm'><u>Wakocode</u></p>
          <div className="self-center border-l-2 border-white border-solid h-4 mx-2"></div>
          <p className='text-center text-sm'><u>Terms & Conditions</u></p>
          <div className="self-center border-l-2 border-white border-solid h-4 "></div>
          <p className='text-center text-sm'><u>&copy; 2025 All rights reserved</u></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
