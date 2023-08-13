import React from 'react'
import BlogCover1 from '../Assets/BlogPhoto.jpg';
import BlogCover2 from '../Assets/BlogPhoto2.jpg';
import BlogCard from '../Components/BlogCard';


const Blog = () => {
    const blogs = [
        {
            title: 'Blog Post 1',
            imageUrl: BlogCover1,
            date: '7/8/2023',
            summary: "Get Out There!"

        },
        {
            title: 'Blog Post 2',
            imageUrl: BlogCover2,
            date: '7/8/2023',
            summary: "Why Deserts Matter Too"
        },
        {
            title: 'Blog Post 3',
            imageUrl: BlogCover2,
            date: '7/01/2023',
            summary: "Why Deserts Matter Too"
        },

    ]
    return (
    <div className='w-full flex flex-col justify-center'>
        {blogs && blogs.map((post, index) => (
            <BlogCard title={post.title} imageUrl={post.imageUrl} date={post.date} summary={post.summary} index={index}/>
        ))}
    </div>
    )
}

export default Blog