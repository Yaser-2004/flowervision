import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import TrendyPlants from '../components/TrendyPlants'
import TopSelling from '../components/TopSelling'
import Reviews from '../components/Reviews'
import BestO2 from '../components/BestO2'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <div className='bg-[url(/plantbg.jpg)] bg-cover max-sm:bg-contain max-sm:bg-[center_0px] bg-no-repeat bg-[center_-125px] px-[39px] max-sm:px-[10px]'>
            <Navbar />
            <HeroBanner />
            <TrendyPlants />
        </div>
        <div className='px-[39px] pb-40'>
            <TopSelling />
            <Reviews />
            <BestO2 />
            <Footer />
        </div>
    </>
  )
}

export default Home
