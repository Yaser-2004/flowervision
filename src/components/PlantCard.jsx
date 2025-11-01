import React from 'react'
import Button from './Button'
import Bag from './Bag'

{/* <div
  class="w-[512px] h-[624px] mt-[89px] bg-[#ED303C] rounded-[50px] border-t-[10px] borter-t-white
  [--r:60px] [--s:350px] [--a:62deg] [--p:50%]
  [--_m:var(--r),#000_calc(100%_-_1px),#0000]
  [--_d:calc((var(--s)_+_var(--r))*cos(var(--a)))]
  [mask:radial-gradient(var(--r)_at_calc(var(--p)_+_var(--_d))_var(--_m)),radial-gradient(var(--r)_at_calc(var(--p)_-_var(--_d))_var(--_m)),radial-gradient(var(--s)_at_var(--p)_calc(-1*sin(var(--a))*var(--s)),#0000_100%,#000_calc(100%_+_1px))_0_calc(var(--r)*(1_-_sin(var(--a))))_no-repeat,linear-gradient(90deg,#000_calc(var(--p)_-_var(--_d)),#0000_0_calc(var(--p)_+_var(--_d)),#000_0))]"
></div> */}

const PlantCard = ({img, name, des, price, details='False'}) => {
  return (
        <div className='relative max-sm:hidden'>

        <div className={`relative w-[512px] h-[624px] mt-[89px] ${details == "True" ? 'max-[1600px]:w-[410px] max-[1600px]:h-[499px]' : null}`}>
        <svg
            className={`w-full h-full backdrop-blur-[6px] ${details == "True" ? 'max-[1600px]:w-[410px] max-[1600px]:h-[499px]' : null}`}
            viewBox="0 0 512 624"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
            <linearGradient id="strokeGradient1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="black" />
            </linearGradient>

            <linearGradient id='gradientDetail' x1="0%" y1="0%" x2="100%" y2="100%">
                {/* Top-left white */}
                <stop offset="0%" stopColor="rgba(46, 46, 46, 1)" />
                {/* Middle black */}
                <stop offset="50%" stopColor="white" />
                {/* Bottom-right white */}
                <stop offset="100%" stopColor="rgba(46, 46, 46, 1)" />
            </linearGradient>
            </defs>

            <g transform="translate(0,624) scale(0.1,-0.1)">
            <path
            d="M515 6216 c-253 -59 -443 -242 -490 -474 -11 -55 -14 -515 -16 -2672
                l-3 -2605 27 -68 c35 -90 86 -164 156 -230 73 -67 126 -98 227 -134 l79 -28
                2065 0 2065 0 80 27 c100 34 187 91 258 168 64 69 130 193 147 276 9 44 11
                670 7 2638 -4 2350 -6 2587 -21 2645 -43 167 -170 323 -326 400 -180 88 -295
                90 -608 12 -518 -129 -987 -207 -1393 -231 -449 -27 -1049 49 -1794 227 -255
                61 -360 72 -460 49z"
            fill="rgba(255,255,255,0.05)"    
            stroke={details == "True" ? 'url(#gradientDetail)' : 'url(#strokeGradient1)'}       
            strokeWidth="10"              
            />
            </g>
        </svg>
        </div>

        <div className={`absolute inset-0 ${details == "False" ? '-top-55' : '-top-30 max-[1600px]:-top-20'} flex items-center flex-col justify-center gap-0`}>
            <div>
                <img className={`h-[459px] w-[459px] ${details == "True" ? 'max-[1600px]:h-[367px] max-[1600px]:w-[367px] ' : null}`} src={img} alt="" />
            </div>
            <div className={`${details == "True" ? 'text-left w-full pl-[66px] max-[1600px]:pl-[40px] ' : null}`}>
                {details == "False" ? <p className='text-[23px]'>Indoor Plant</p> : null}
                <p className={`text-[38px] ${details == "False" ? 'mb-[19px]' : 'mb-[9px] max-[1600px]:text-[30px]'}`}>{name}</p>
                {details == "False" ? <Button /> : null}
            </div>

            {details == "False" ? <div className='flex gap-3 mt-[36px]'>
                <div className='rounded-full h-3 w-3 bg-white'></div>
                <div className='rounded-full h-3 w-3 bg-white'></div>
                <div className='rounded-full h-3 w-3 bg-white'></div>
            </div> : 

            <div className={`text-left max-w-[372px] max-[1600px]:max-w-[335px]`}>
                <p className={`text-[24px] max-[1600px]:text-[18px]`}>{des}</p>
                <div className={`flex items-center justify-between max-[1600px]:pt-6`}>
                    <p className={`text-[38px] `}>Rs. {price}/-</p>
                    <Bag />
                </div>
            </div>
            }


        </div>

        </div>

  )
}

export default PlantCard
