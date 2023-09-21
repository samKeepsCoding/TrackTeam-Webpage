import React from 'react'
import vid from '../Assets/promoWide.mp4';
import { Link } from 'react-scroll';


const VideoBG = () => {




  return (
    <div className='w-full h-screen text-white'>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center items-center'></div>
        <video src={vid} controls={false} autoPlay loop muted className='w-full h-full object-cover'/>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center items-center '>
        <h2 className='text-3xl md:text-6xl lg:text-8xl font-extrabold text-secondary '>GOLD SILVER & COPPER</h2>
            <div className='flex flex-row justify-center space-x-5 md:space-x-0 md:justify-between font-thin text-xs md:text-sm text-start w-full px-4 max-w-lg'> 
                <p className=''>TrackTeam</p>
                <p>X</p>
                <p>Nedlog</p>
                <p>X</p>
                <p>Boregard</p>
            </div>
            <a href="https://soundcloud.com/trackte_am/gold-silver-copper/s-FQADOlEZCrf?si=523891c2a3964ff99eeb68c31e8b7a25&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                <button
                    className='mt-8  py-3 border-secondary border font-bold bg-secodaryBg 
                    text-white text-semibold px-3 shadow-sm hover:bg-secondary duration-150'
                >
                    LISTEN HERE
                </button>
            </a>

            <p className='font-extrabold mt-6'>OR</p>

            <Link to='latestVideo' smooth offset={85} className=' px-3 py-1 cursor-pointer flex space-x-4 items-center justify-center font-bold mt-6 hover:scale-125 duration-100 ease-linear hover:text-secondary'>
                WATCH VIDEO
            </Link>
        </div>
    </div>
  )
}

export default VideoBG