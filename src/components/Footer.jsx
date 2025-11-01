import React from 'react'
import plogo from '../assets/plogo.png';

const Footer = () => {
  return (
    <div className='mt-[260px] text-white flex items-start justify-between flex-wrap'>
      <div className='pl-[46px]'>
        <div className='flex items-center gap-[13px]'>
            <img className='h-[94px] max-[1600px]:h-[75px]' src={plogo} alt="logo" />
            <p className='font-black text-[45px] max-[1600px]:text-[36px]'>FloraVision.</p>
        </div>
        <p className='text-[28px] max-[1600px]:text-[22px] max-[1600px]:max-w-[464px] max-w-[580px] mt-[43px] font-medium pl-[14px]'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
        <div className='flex items-center font-black text-[28px] max-[1600px]:text-[22px] gap-[61px] max-[1600px]:gap-[49px] mt-[119px] pl-[14px]'>
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
        </div>
      </div>

      <div className='flex flex-col items-start gap-[46px]'>
        <p className='font-black text-[28px] max-[1600px]:text-[22px]'>Quick Link's</p>
        <div className='flex flex-col items-start text-[24px] max-[1600px]:text-[19px] gap-[26px] max-[1600px]:gap-[20px] font-medium underline underline-offset-6'>
            <p>Home</p>
            <p>Type’s Of plant’s</p>
            <p>Contact</p>
            <p>Privacy</p>
        </div>
      </div>

      <div className='w-[562px] max-[1600px]:w-[449px] flex flex-col items-start'>
        <p className='font-black text-[28px] max-[1600px]:text-[22px]'>For Every Update.</p>
        <div className='relative w-full h-[74px] max-[1600px]:h-[59px] mt-[50px] max-[1600px]:mt-[40px]'>
            <input type="text" placeholder='Enter Email' className='font-medium text-[24px] max-[1600px]:text-[19px] pl-[29px] max-[1600px]:pl-[22px] rounded-[10px] max-[1600px]:rounded-[8px] h-full w-full border border-[3px] border-white' name="" id="" />
            <button className='absolute text-[22px] max-[1600px]:text-[17px] text-black bg-white rounded-[8px] max-[1600px]:rounded-[6px] right-1 font-bold w-[165px] max-[1600px]:w-[132px] h-[65px] max-[1600px]:h-[51px] top-1'>SUBSCRIBE</button>
        </div>
        <p className='font-medium mt-[205px] text-[24px] max-[1600px]:text-[19px]'>FloraVision © all right reserve</p>
      </div>
    </div>
  )
}

export default Footer
