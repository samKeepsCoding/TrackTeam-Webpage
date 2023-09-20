import React from 'react';
import HeroImg from '../Assets/HeroDemo.jpg';
import VideoBG from './VideoBG';



const Hero = () => {
  return (
    <>
        <div 
            className='min-h-screen flex justify-center items-start bg-center bg-cover'
            style={{backgroundImage: `url(${HeroImg})`}}
        >
            <div className=' mt-36 flex flex-col justify-center items-center text-center '>
                {/* <img src={TitleImg} alt="TrackTeam Name" /> */}
                <h2 className='text-3xl md:text-6xl font-bold text-secondary '>GOLD SILVER & COPPER</h2>
                <div className='flex flex-row justify-between font-thin text-xs md:text-sm text-start w-full px-4'> 
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
            </div>
        </div>
        
    </>
  )
}

export default Hero