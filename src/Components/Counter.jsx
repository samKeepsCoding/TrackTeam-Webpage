import React from 'react';
import Countdown from 'react-countdown';

const Counter = () => {
    const date = new Date(2023, 7, 13, 12, 0, 0)
  return (
    <div className=' flex flex-col space-y-10 w-full h-screen justify-start items-center text-xl bg-[#ffffff] text-black pt-36'>
        <h1 className='font-bold text-3xl'>COMING SOON</h1>
        <Countdown 
        date={date}
        autoStart={true}
        />
    </div>
  )
}

export default Counter