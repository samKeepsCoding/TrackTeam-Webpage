import React from 'react'

const LatestVideo = () => {
  return (
    <div className='w-full flex justify-center items-center p-8' id='latestVideo'>
        <div className='w-full max-w-6xl bg-black text-white flex flex-col items-center space-y-4 py-8 '>
            <h1 className='text-start flex-wrap w-full text-3xl md:text-7xl font-extrabold text-secondary'>WATCH 'GOLD SILVER & COPPER FT. NEDLOG & BOREGARD'</h1>
            <div className='w-full flex justify-center'>

            <iframe  src="https://www.youtube.com/embed/ATPWy3Aaq4M?si=86A8jy74iEPUwazA" title="YouTube TrackTeam video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-full md:max-w-6xl h-52 md:h-96'></iframe>
            </div>
        </div>
    </div>
  )
}

export default LatestVideo