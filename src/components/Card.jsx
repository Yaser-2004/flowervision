import React from 'react'
import Button from './Button'
import Bag from './Bag'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({bestO2 = 'False', reverse = 'False', trendy  ='False', title, plant, height, width, price, description, description2}) => {
  return (
    <div className='relative rounded-[45px] text-white'>
        <div className='relative overflow-hidden rounded-[43px]'>
            <svg
                className="w-[100%] backdrop-blur-[6px] "
                viewBox={`0 0 ${bestO2 == "True" ? 1600 : 1619} ${bestO2 == "True" ? 755 : 526}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {bestO2 == "True" ?
                    <linearGradient id='gradient1' x1="0%" y1="0%" x2="100%" y2="100%">
                    {/* Top-left white */}
                    <stop offset="0%" stopColor="white" />
                    {/* Middle black */}
                    <stop offset="50%" stopColor="rgba(46, 46, 46, 1)" />
                    {/* Bottom-right white */}
                    <stop offset="100%" stopColor="white" />
                    </linearGradient>
                    :
                    <linearGradient id="gradientbest" x1="0%" y1="0%" x2="100%" y2="100%">
                        {/* Top-left — pure white */}
                        <stop offset="0%" stopColor="white" />
                        
                        {/* Top-right (25%) — light gray */}
                        <stop offset="25%" stopColor="#232323ff" />

                        {/* Center — darker gray */}
                        {/* <stop offset="50%" stopColor="#979797ff" /> */}

                        {/* Bottom-left (75%) — light gray */}
                        <stop offset="75%" stopColor="#d8d8d8ff" />

                        {/* Bottom-right — pure white */}
                        <stop offset="100%" stopColor="white" />
                    </linearGradient>
                    }
                </defs>

                <rect className={` ${bestO2 == "True" ? 'max-[1600px]:h-[650px]' : null}`} width={bestO2 == "True" ? 1599 : 1618} height={bestO2 == "True" ? 755 : 526} fill='rgba(255,255,255,0.05)' stroke={bestO2 == "True" ? "url(#gradientbest)" : "url(#gradient1)"} strokeWidth={1} rx={trendy == "True" ? 150 : 100} ry={trendy == "True" ? 150 : 100}></rect>
            </svg>
        </div>

        <div className={`absolute inset-0 flex max-sm:flex-col ${reverse == 'True' ? 'flex-row-reverse' : null} ${bestO2 == "True" ? 'max-[1600px]:h-[550px]' : null} items-center gap-[169px]`}>
            <div className={`${bestO2 == "True" ? 'w-[870px] mr-[350px]' : 'w-[601px]'}`}>
                <img className={`absolute ${bestO2 == "True" ? '-top-30 -left-20 max-[1600px]:w-[700px] max-[1600px]:-left-10' : 'max-[1600px]:w-[650px] -top-43'} ${reverse == 'True' ? 'right-0' : null}`} src={plant} height={height} width={width} alt="plant" />
            </div>

            <div className={`text-left ${reverse == "True" ? 'ml-[80px]' : null} ${bestO2 == "True" ? 'text-white/75' : null} ${trendy == "True" && reverse == "False" ? 'pl-[120px]' : null}`}>
                <h1 className={`text-[38px] font-semibold ${bestO2 == "True" ? 'w-[739px] max-[1600px]:text-[30px]' : null}`}>{title}</h1>
                <p className={`${bestO2 == "True" ? 'text-[28px] max-[1600px]:text-[20px]' : 'text-[20px] max-w-[732px]'} ${reverse == 'True' ? 'w-[792px]' : null} mt-[34px] font-semibold w-11/12`} dangerouslySetInnerHTML={{ __html: description }} />
                <p className={`${bestO2 == "True" ? 'text-[28px] max-[1600px]:text-[20px]' : 'text-[20px]'} mt-[34px] font-semibold w-11/12 mb-[8px]`}>{description2}</p>
                {bestO2 != "True" ? <h2 className='text-[38px] my-[24px] font-semibold'>Rs. {price}/-</h2> : null}
                <div className='flex items-center gap-8'>
                    <Button name='Explore' />
                    {bestO2 != "True" ? <Bag /> : null}
                </div>
            </div>
        </div>

        {bestO2 == "True" ? 
            <div className='w-[190px] flex items-center justify-between absolute right-[91px] max-[1600px]:bottom-[225px] bottom-[130px] text-[20px] text-white/80'>
                <IoIosArrowBack className='text-[30px]' opacity={0.35} />
                <p>01/<span className='text-[16px]'>04</span></p>
                <IoIosArrowForward className='text-[30px]' />
            </div>
            : null
        }
    </div>
  )
}

export default Card


