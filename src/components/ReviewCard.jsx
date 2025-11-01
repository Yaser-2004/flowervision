import React from 'react'
import StarRating from './StarRating'

const ReviewCard = ({name, rating, des, img}) => {
  return (
    <div className='relative rounded-[45px]'>
        <div className={`relative w-[549px] h-[507px] max-[1600px]:w-[439px] max-[1600px]:h-[405px] overflow-hidden rounded-[43px]`}>
            <svg
                className="w-full h-full backdrop-blur-[6px]"
                viewBox="0 0 549 507"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id='gradient5' x1="0%" y1="0%" x2="100%" y2="100%">
                    {/* Top-left white */}
                    <stop offset="0%" stopColor="rgba(55, 55, 55, 1)" />
                    {/* Middle black */}
                    <stop offset="50%" stopColor="white" />
                    {/* Bottom-right white */}
                    <stop offset="100%" stopColor="rgba(55, 55, 55, 1)" />
                    </linearGradient>
                </defs>
                
                <g transform="translate(0,507) scale(0.1,-0.1)">
                <path d="M4460 4973 c-421 -42 -788 -71 -1206 -98 -486 -30 -1141 -7 -1937 70
                -143 14 -300 25 -350 25 -205 -1 -376 -68 -529 -209 -114 -105 -195 -244 -234
                -401 -18 -72 -19 -149 -19 -1750 l0 -1675 23 -80 c81 -279 263 -467 537 -552
                l90 -28 1900 3 c1832 4 1903 4 1984 23 269 62 489 282 561 563 20 78 20 106
                20 1756 0 1642 0 1678 -20 1756 -70 280 -299 507 -575 573 -83 20 -184 30
                -245 24z"
                fill="rgba(255,255,255,0.05)"    
                stroke="url(#gradient5)"
                strokeWidth="10"
                />
                </g>
            </svg>
        </div>

        <div className="absolute inset-0 flex items-start flex-col gap-[24px] pt-[91px] max-[1600px]:pt-[72px] pl-[73px] max-[1600px]:pl-[58px]">
            <div className='flex items-start gap-[28px] max-[1600px]:gap-[16px]'>
                <img className='h-[88px] w-[88px] max-[1600px]:w-[70px] max-[1600px]:h-[70px] rounded-full object-cover' src={img} alt="" />
                <div>
                    <h3 className='text-[38px] font-semibold max-[1600px]:text-[30px]'>{name}</h3>
                    <StarRating rating={rating} />
                </div>
            </div>
            <p className='text-[24px] w-[403px] max-[1600px]:text-[18px] max-[1600px]:w-[322px]'>{des}</p>
        </div>
    </div>
  )
}

export default ReviewCard
