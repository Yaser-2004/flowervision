import React from 'react'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import Card from './Card'
import plant1 from '../assets/plant1.png'

const BestO2 = () => {
  return (
    <>
        <div className='relative text-white mx-auto w-[370px] pb-[150px] max-[1600px]:pb-[10px] text-center mb-[242px]'>
            <div className='absolute z-10 left-1 top-6 w-[61px]'><img src={b4} alt="" /></div>
            <div className='absolute z-10 right-0 -top-2 w-[61px] '><img src={b3} alt="" /></div>
    
            <div className='absolute z-10 left-[18px] w-[335px]'>
                <h2 className='text-[55px] font-semibold'>Our Best o2</h2>
            </div>
        </div>

        <Card 
        bestO2="True"
        title={'We Have Small And Best O2 Plants Collection’s'}
        plant={plant1} 
        height={877} 
        width={877} 
        description={'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.'} 
        description2={'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.'}
        />

        <div className='w-[85px] h-[11px] flex justify-between mx-auto mt-[133px] max-[1600px]:mt-0'>
            <div className='w-[31px] h-full bg-white rounded-full bg-white/80'></div>
            <div className='w-[11px] h-full bg-white rounded-full bg-white/80'></div>
            <div className='w-[11px] h-full bg-white rounded-full bg-white/80'></div>
        </div>
    </>
  )
}

export default BestO2
