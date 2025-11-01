import React from 'react'
import plogo from '../assets/plogo.png';
import search from '../assets/search.png';
import bag from '../assets/bag.png';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
     <nav className='pt-10 flex items-center justify-between text-white'>
        <div className='flex items-center gap-[7px]'>
            <img className='h-[48px] max-sm:h-[42px]' src={plogo} alt="logo" />
            <p className='font-black text-[28px] max-sm:text-[22px]'>FloraVision.</p>
        </div>

        <div className='font-indie flex text-[24px] items-center gap-[71px] justify-between max-sm:hidden'>
            <p>Home</p>
            <p className='flex items-center gap-[20px]'>Plants Type <IoMdArrowDropdown /></p>
            <p>More</p>
            <p>Contact</p>
        </div>

        <div className='flex items-center gap-[59px]'>
            <img className='h-[26px] max-sm:hidden' src={search} alt="search icon" />
            <img className='h-[26px] max-sm:hidden' src={bag} alt="bag icon" />
            <div className='h-[26px] w-[31px] flex flex-col gap-[11px] items-end'>
                <div className='w-full h-[4px] bg-white rounded'></div>
                <div className='w-[23px] h-[4px] bg-white rounded'></div>
            </div>
        </div>
     </nav>
  )
}

export default Navbar
