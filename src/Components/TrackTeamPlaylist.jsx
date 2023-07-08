import React from 'react';

const TrackTeamPlaylist = () => {
  return (
    <div className='flex flex-col justify-center items-start space-y-3 w-full p-8 relative'>
        <h1 className='text-start flex-wrap w-full text-3xl md:text-7xl font-extrabold text-secondary'>MORE FROM TRACKTEAM </h1>
        <div className='w-1/4 text-secondary border-t-8 border-secondary relative left-0'></div>
        <iframe 
            style={{borderRadius:"12px"}} 
            src="https://open.spotify.com/embed/artist/1FpamDqCYbqdElI4JEiLzy?utm_source=generator&theme=0" width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className='w-full md:max-w-6xl md:h-96'
        >
        </iframe>
    </div>
  )
}

export default TrackTeamPlaylist