import React from 'react'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import PlantCard from './PlantCard'
import plant1 from '../assets/plant1.png'
import plant2 from '../assets/plant2.png'
import plant4 from '../assets/plant4.png'
import plant5 from '../assets/plant5.png'
import plant6 from '../assets/plant6.png'
import plant7 from '../assets/plant7.png'

const plants = [
    {
        img: plant1,
        name: "Aglaonema plant",
        des: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
        price: 300,
    },
    {
        img: plant2,
        name: "Plantain Lilies",
        des: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: 380,
    }, 
    {
        img: plant4,
        name: "Cactus",
        des: "It is known for their ability to thrive in arid environments",
        price: 259,
    }, 
    {
        img: plant5,
        name: "Swiss cheese Plant",
        des: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
        price: 400,
    }, 
    {
        img: plant6,
        name: "Sansevieria plant",
        des: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
        price: 450,
    }, 
    {
        img: plant7,
        name: "Agave plant",
        des: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
        price: 359,
    },    
]

const TopSelling = () => {
  return (
    <div className='text-center text-white'>
        <div className='relative mx-auto w-[592px] pb-[210px] max-[1600px]:pb-[168px] mt-[20px]'>
            <div className='absolute z-10 left-1 top-4 w-[61px]'><img src={b1} alt="" /></div>
            <div className='absolute z-10 right-0 top-1 w-[61px] '><img src={b2} alt="" /></div>

            <div className='absolute z-10 left-[6px] w-[585px]'>
                <h2 className='text-[55px] font-semibold'>Our Top Selling Plants</h2>
            </div>
        </div>

        <div className='flex flex-wrap gap-10 gap-y-20 justify-center'>
            {plants.map((plant, i) => {
                return <PlantCard key={i} img={plant.img} name={plant.name} des={plant.des} price={plant.price} details='True' />
            })}
        </div>
    </div>
  )
}

export default TopSelling
