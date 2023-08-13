import React from 'react';
import Background from '../Assets/BlogPhoto.jpg'

const BlogPost = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center text-white p-6'>
        <div className='w-full max-w-3xl flex flex-col items-center md:items-start space-y-4 text-sm md:text-lg'>
          <img src={Background} alt="blog" className='rounded' width={500} height={500} />
          <h1 className='text-secondary font-bold text-4xl md:text-6xl'>Blog Post</h1>
          <div className='w-1/4 text-secondary border-t-8 border-secondary relative left-0'></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.

            Praesent sit amet volutpat nulla. Duis iaculis nisl non nulla rhoncus, eget accumsan velit euismod. Nunc turpis enim, porta vel ligula vel, scelerisque scelerisque augue. Ut tincidunt eleifend dui eget sodales. Fusce aliquet metus quis congue egestas. Morbi in gravida magna. Morbi pulvinar fringilla sapien, vel ullamcorper tortor iaculis vel. Donec et scelerisque nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.

            Praesent sit amet volutpat nulla. Duis iaculis nisl non nulla rhoncus, eget accumsan velit euismod. Nunc turpis enim, porta vel ligula vel, scelerisque scelerisque augue. Ut tincidunt eleifend dui eget sodales. Fusce aliquet metus quis congue egestas. Morbi in gravida magna. Morbi pulvinar fringilla sapien, vel ullamcorper tortor iaculis vel. Donec et scelerisque nunc.
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogPost