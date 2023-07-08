import React from 'react'

const SubscribeForm = () => {
  return (
    <div className='w-full bg-secodaryBg flex flex-col md:flex-row justify-center items-center md:space-x-5 p-4 py-8'>
        <h2 className='text-center md:text-start text-white text-md  md:text-2xl font-bold uppercase'>Get the latest news directly into your email : </h2>
        <form className='flex flex-col md:flex-row md:space-x-3 space-x-0 md:space-y-0 space-y-3 items-center w-full max-w-xl'>
            <input 
                type="text" 
                placeholder='Your Email Here'
                className='border-2 hover:border-secodary rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0 text-black w-full md:text-start text-center'
            />
            <button 
                type='submit'
                className=' rounded-md px-4 py-3 bg-transparent hover:bg-secondary text-white font-bold border border-secondary ease-linear duration-100 uppercase w-full'
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default SubscribeForm