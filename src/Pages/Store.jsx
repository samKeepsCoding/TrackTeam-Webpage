import React from 'react';
import Hero from '../Assets/HeroDemo.jpg'
import ProductCard from '../Components/ProductCard';


const products = [
    {
        name: 'Loop Kit',
        price: '25.00',
    },
    {
        name: 'Hi-hat Kit',
        price: '25.00',
    },
    {
        name: '808 Kit',
        price: '10.00',
    },
    {
        name: '808 Kit',
        price: '10.00',
    },
    {
        name: 'Midi Kit',
        price: '99.00',
    },

]

const Store = () => {
  return (
    <>
        <div className='w-full flex flex-col justify-center items-center text-center text-white'>
            <div 
                className='w-full h-[60vh] flex justify-center items-center bg-center bg-cover'
                style={{backgroundImage: `url(${Hero})`}}
            >
                
            </div>
            <h1 className='my-8 font-extrabold text-4xl text-secondary'>
                FEATURED COLLECTION
            </h1>
            <div className='flex flex-row justify-center flex-wrap max-w-8xl w-full p-4'>
                {products ? products.map((product, index) => (
                    <ProductCard product={product} key={index}/>
                )) : null }
            </div>
        </div>
    </>
  )
}

export default Store