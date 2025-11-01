import React from 'react'
import Button from './Button'
import PlantCard from './PlantCard'
import FirstCard from './FirstCard'
import plant1 from "../assets/plant1.png"
import { HiPlay } from "react-icons/hi2";

const plant = {
        img: plant1,
        name: "Aglaonema plant",
        des: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
        price: 300,
    };

const HeroBanner = () => {
  return (
    <>
        <div className='font-inter text-white w-full flex max-sm:flex-col justify-between'>
            <div className='w-[802px] max-sm:w-full'>
                <h1 className='text-[118px] font-semibold mt-[147px] max-sm:text-center max-sm:mt-[90px] max-sm:text-[60px]'>Earth's Exhale</h1>
                <p className='text-[23px] mb-[19px] max-sm:text-[15px] max-sm:text-center'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>

                <div className='flex gap-[21px] items-center'>
                    <Button />
                    <div className='hover:cursor-pointer hover:scale-105 transition-all delay-2 flex items-center justify-center w-[70px] h-[70px] border border-[3px] text-[34px] rounded-full'>
                        <HiPlay />
                    </div>
                    <p className='font-indie text-[25px]'>Live Demo...</p>
                </div>
                <FirstCard />
            </div>

            <PlantCard img={plant.img} name={plant.name} des={plant.des} price={plant.price} />
        </div>
    </>
  )
}

export default HeroBanner
