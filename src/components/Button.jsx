import React from 'react'

const Button = ({name = "Buy Now"}) => {
  return (
    <button className='w-[217px] max-sm:w-[150px] max-sm:h-[50px] max-sm:text-[20px] h-[64px] rounded-[12px] bg-transparent border border-[2px] text-[28px] hover:bg-white hover:text-[#1B2316] hover:border-none transition-all delay-2 hover:cursor-pointer'>
        {name}
    </button>
  )
}

export default Button
