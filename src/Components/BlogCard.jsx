import React from 'react'

const BlogCard = ({title, imageUrl, date, summary, article, index}) => {
  return (
    <>
        <div className={`w-full flex flex-col py-8 md:space-x-8 md:justify-center md:items-center justify-start items-start p-4 ${index % 2 === 0 ? 'md:flex-row-reverse bg-transparent' : 'md:flex-row  bg-secodaryBg'}`}>
            {/* Left/Top side */}
            <img 
                src={imageUrl} 
                alt="Blog Post" 
                width={500}
                height={500}
                className='rounded-sm mx-4'
            />
        {/* Right/Bottom Side */}
            <div className='max-w-[45rem] flex flex-col justify-center items-start mt-3 mx-4'>
                <a href={`/blog/${index}`}>
                    <h2 className='text-start text-secondary font-bold text-3xl '>{title}</h2>
                </a>
                <div className='flex flex-row space-x-2 text-md items-center text-white mt-3'>
                    <p className='text-white font-light text-sm italic'>{date}</p>
                </div>
                <p className='text-md text-white mt-2'>{summary}...</p>
                <a 
                    className='rounded border  border-secondary px-3 py-2 bg-secondary text-secondaryBg font-bold cursor-pointer hover:text-secondary hover:bg-secodaryBg mt-3'
                    href={`/blog/${index}`}
                >Read Post</a>
            </div>
        </div>
    </>
  )
}

export default BlogCard