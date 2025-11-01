import React from 'react'
import ReviewCard from './ReviewCard'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.jpg'
import pro3 from '../assets/pro3.png'

const reviews = [
    {
        img: pro1,
        name: "Shelly Russel",
        rating: 4.5,
        des: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
        img: pro2,
        name: "Lula Rolfson",
        rating: 4.5,
        des: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
        img: pro3,
        name: "Carol Huels",
        rating: 4.5,
        des: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    }
]

const Reviews = () => {
  return (
    <>
    <div className='relative text-white mx-auto mt-[300px] w-[485px] pb-[150px] max-[1600px]:pb-[10px] text-center mb-[174px]'>
        <div className='absolute z-10 left-1 top-4 w-[61px]'><img src={b1} alt="" /></div>
        <div className='absolute z-10 right-0 top-1 w-[61px] '><img src={b2} alt="" /></div>

        <div className='absolute z-10 left-[6px] w-[475px]'>
            <h2 className='text-[55px] font-semibold'>Customer Review</h2>
        </div>
    </div>

    <div className='w-full text-white flex items-center flex-wrap mb-[233px] justify-center'>
      {reviews.map((review, i) => {
        return <ReviewCard key={i} name={review.name} rating={review.rating} des={review.des} img={review.img} />
      })}
    </div>
    </>
  )
}

export default Reviews
