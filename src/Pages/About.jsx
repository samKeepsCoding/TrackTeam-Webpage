import React from 'react';
import Hero2 from '../Assets/HeroDemo2.JPG';
import TrackTeamLogo from '../Assets/TrackTeamFullBlack.PNG'
import PressPhoto2 from '../Assets/PressPhotoDemo2.jpg';
import PressPhoto from '../Assets/PressPhotoDemo.jpg';
import PressPhoto3 from '../Assets/PressPhotoDemo3.jpg';
import PressCard from '../Components/PressCard';


const About = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white'>
        <div 
            className='w-full h-[30vh] flex justify-center items-center bg-center bg-cover'
            style={{backgroundImage: `url(${Hero2})`}}
        >
            <img 
                src={TrackTeamLogo} 
                alt="TrackTeam" 
                className='w-full max-w-2xl'
            />
        </div>
        <div className='w-full max-w-4xl flex flex-col py-8 px-4'>
            <h1 className='text-6xl font-extrabold text-secondary text-center'>ABOUT</h1>
            <div className='flex flex-col space-y-10 mt-24'>
                
                {/* Bio */}
                <div className='text-start flex-col '>
                    <h2 className='text-4xl font-extrabold text-secondary italic'>BIO</h2>
                    <div className='w-1/5 text-secondary border-t-8 border-secondary relative left-0'></div>
                    <p className='text-white text-sm flex-wrap mt-4 font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minima accusantium! Rem ut laboriosam labore maxime distinctio repudiandae, error consequuntur animi reiciendis, nam nihil repellat iusto voluptatem similique quia non!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minima accusantium! Rem ut laboriosam labore maxime distinctio 
                        repudiandae, error consequuntur animi reiciendis, nam nihil repellat iusto voluptatem similique quia non!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minima accusantium! Rem ut laboriosam labore maxime distinctio repudiandae, error consequuntur animi reiciendis, nam nihil repellat iusto voluptatem similique quia non!
                        repudiandae, error consequuntur animi reiciendis, nam nihil repellat iusto voluptatem similique quia non!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minima accusantium! Rem ut laboriosam labore maxime distinctio repudiandae, error consequuntur animi reiciendis, nam nihil repellat iusto voluptatem similique quia non!
                    </p>
                </div>

                {/* Press Photos */}
                <div className='flex flex-col'>
                    <h2 className='text-4xl font-extrabold text-secondary italic'>PRESS PHOTOS</h2>
                    <div className='w-1/5 text-secondary border-t-8 border-secondary relative left-0'></div>
                    <div className='flex flex-col lg:flex-row space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 mt-4 w-full'>
                        <img src={PressPhoto} alt="Press" className='w-full lg:w-1/3'/>
                        <img src={PressPhoto2} alt='Press' className='w-full lg:w-1/3'/>
                        <img src={PressPhoto3} alt="Press"  className='w-full lg:w-1/3'/>
                    </div>
                </div>

            {/* Accompplishments/Press */}
                <div className='flex flex-col '>
                    <h2 className='text-4xl font-extrabold text-secondary italic'>PRESS</h2>
                    <div className='w-1/6 text-secondary border-t-8 border-secondary relative left-0'></div>
                    <PressCard description={"Hip Hop Awards 2022: The up-and-coming female emcee earned her first nomination for 'Best International Flow'."} company={"BET"}/>
                    <PressCard description={"Hip Hop Awards 2022: The up-and-coming female emcee earned her first nomination for 'Best International Flow'."} company={"TIG"}/>
                    <PressCard description={"Hip Hop Awards 2022: The up-and-coming female emcee earned her first nomination for 'Best International Flow'."} company={"Third & Hayden"}/>
                    <PressCard description={"Hip Hop Awards 2022: The up-and-coming female emcee earned her first nomination for 'Best International Flow'."} company={"BET"}/>
                    <PressCard description={"Hip Hop Awards 2022: The up-and-coming female emcee earned her first nomination for 'Best International Flow'."} company={"TIG"}/>
                    <PressCard description={"Hip Hop Awards 2022: The up-and-coming female emcee earned her first nomination for 'Best International Flow'."} company={"Third & Hayden"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About