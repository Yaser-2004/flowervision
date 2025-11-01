import React from 'react'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import Card from './Card'
import plant2 from '../assets/plant2.png'
import plant3 from '../assets/plant3.png'

const TrendyPlants = () => {
  return (
    <div className='text-center text-white pb-80'>
        {/* <h2 className='mt-[83px] text-[55px] font-semibold'>Our Trendy Plants</h2> */}
        <div className='relative mt-[83px] mx-auto w-[488px] max-sm:w-full'>
            <div className='absolute z-10 left-1 top-4 max-sm:top-2 max-sm:left-4 w-[61px] max-sm:w-[50px]'><img src={b1} alt="" /></div>
            <div className='absolute z-10 right-0 top-1 w-[61px] max-sm:w-[50px]'><img src={b2} alt="" /></div>

            <div className='absolute z-10 left-[6px] w-[480px] max-sm:w-full'>
                <h2 className='text-[55px] max-sm:text-[40px] font-semibold'>Our Trendy Plants</h2>
            </div>
        </div>

        <div className='flex flex-col gap-[127px] pt-[162px] w-full'>
            <Card title={'For Your Desks Decorations'} plant={plant2} trendy={"True"} height={732} width={732} price={599} description={"I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"} />
            <Card reverse='True' title={'For Your Desks Decorations'} trendy={"True"} plant={plant3} height={732} width={732} price={399} description={"The greenery adds a touch of nature and serenity to my desk, making it feel <br /> more inviting and calming"} />
        </div>
    </div>
  )
}

export default TrendyPlants
