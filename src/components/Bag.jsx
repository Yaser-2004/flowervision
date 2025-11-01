import React from 'react'
import bag from '../assets/bag.png'

const Bag = () => {
  return (
    <button className={`w-[64px] h-[64px] rounded-[12px] bg-transparent border border-[2px] flex items-center justify-center hover:scale-105 transition-all delay-2 hover:cursor-pointer`}>
        <img src={bag} alt="bag logo" width={34} height={34} />
    </button>
  )
}

export default Bag
