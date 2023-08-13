import React from 'react';
import HeroImg from '../Assets/HeroDemo.jpg';



const Hero = () => {
  return (
    <>
        <div 
            className='min-h-screen flex justify-center items-start bg-center bg-cover'
            style={{backgroundImage: `url(${HeroImg})`}}
        >
            <div className=' mt-36 flex flex-col justify-center items-center text-center '>
                {/* <img src={TitleImg} alt="TrackTeam Name" /> */}
                <h2 className='text-5xl md:text-8xl font-bold text-secondary '>SKYWALKERS</h2>
                <div className='flex flex-row justify-between font-thin text-xs md:text-sm text-start w-full'> 
                    <p className=''>TrackTeam</p>
                    <p>X</p>
                    <p>THE LETTER M</p>
                    <p>X</p>
                    <p>RENO BASQUIAT</p>
                </div>
                <a href="https://soundcloud.com/trackte_am">
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