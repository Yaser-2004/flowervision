import React from 'react'
import pro from '../assets/pro.png'
import StarRating from './StarRating'

const FirstCard = () => {
  return (
    <div className='relative rounded-[45px]'>
        <div className='relative mt-[173px] max-sm:mt-[100px] w-[411px] max-sm:w-[370px] max-sm:h-[212px] h-[237px] overflow-hidden rounded-[43px]'>
            <svg
                className="w-full  h-full backdrop-blur-[6px]"
                viewBox="0 0 409 237"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="strokeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="gray" />
                    </linearGradient>
                </defs>
                
                <rect width='409' height='237' fill='rgba(255,255,255,0.05)' stroke="url(#strokeGradient)" strokeWidth={1} rx={45} ry={45}></rect>
            </svg>
        </div>

        <div className="absolute inset-0 flex items-start flex-col gap-[24px] pointer-events-none pl-[25px] pt-[37px]">
            <div className='flex items-start gap-[28px] max-sm:gap-[20px]'>
                <img className='h-[64px] w-[64px] max-sm:h-[50px] max-sm:w-[50px] rounded-full object-cover' src={pro} alt="" />
                <div>
                    <h3 className='text-[22px] max-sm:text-[18px]'>Ronnie Hamill</h3>
                    <StarRating rating={4.5} />
                </div>
            </div>
            <p className='text-[17px] w-[341px] max-sm:text-[15px]'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
        </div>
    </div>

    // <div className='w-[700px] h-[700px] bg-green-800 flex items-center justify-center '>
    //     <div className='bg-blue-800 w-[500px] h-[500px]' >

    //     </div>
    // </div>

//     <div className="relative w-[411px] mt-[173px] h-[239px] flex items-center justify-center backdrop-blur-md rounded-[45px]">
//   <svg className="absolute inset-0 w-full h-full">
//     <defs>
//         <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0%" stopColor="#ffffff" />
//         <stop offset="100%" stopColor="#666666ff" />
//       </linearGradient>

//       <mask id="holeMask">
//         {/* White = visible, Black = transparent */}
//         <rect width="100%" height="100%" fill="white" />
//         {/* <rect x="100" y="100" width="500" height="500" fill="black" /> */}
//         <g transform="translate(0,237.5) scale(0.1,-0.1)">
//         <path 
//         d="M1130 2360 l-775 -5 -56 -23 c-143 -58 -248 -178 -278 -320 -8 -37
//                         -11 -296 -11 -842 0 -746 1 -792 19 -849 54 -175 199 -291 387 -311 51 -6 763
//                         -10 1695 -10 1573 0 1608 0 1671 20 131 40 248 156 288 286 19 64 20 89 20
//                         879 0 782 -1 815 -20 877 -40 131 -156 248 -286 288 -65 20 -85 20 -973 18
//                         -498 -2 -1255 -5 -1681 -8z"
//                         fill='black'
//         />
//         </g>
//       </mask>
//     </defs>

//     {/* The masked shape */}
//     <rect
//       width="411px"
//       height="239px"
//       fill="url(#greenGradient)"
//       mask="url(#holeMask)"
//       rx={45}
//       ry={45}
//     />
//   </svg>
// </div>



  )
}

export default FirstCard
