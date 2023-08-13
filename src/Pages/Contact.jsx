import React from 'react';

const Contact = () => {
  return (
    <>
        <div className=' flex flex-col justify-center items-center p-4 text-white text-center'>
            <h1 className='text-secondary font-extrabold text-4xl md:text-6xl'>CONTACT</h1>
            <div className='w-full max-w-3xl flex flex-col md:flex-row justify-center items-center'>
                {/* left/top side */}
                <div className='flex flex-col text-start w-full mt-8 p-3'>
                    <h3>CONTACT US HERE</h3>
                    <form className='flex flex-col  space-y-4 text-black'>
                        <input  placeholder='FUll NAME' type='text' className='py-3 px-1 italic'/> 
                        <input placeholder='Your Email' type='text'className='py-3 px-1 italic'/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='italic px-1'></textarea>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact