import React from 'react';
import productImg from '../Assets/loop.jpg'


const ProductCard = ({ product, key }) => {
  return (
    <>
        <div className='flex flex-col border border-secondary justify-center items-center space-y-3 m-4'>
            <div className='relative'>
                <img 
                    src={productImg} 
                    alt="product" 
                    width={270}
                    height={400}
                    className='cursor-pointer rounded-lg h-[250px]'
                />
                <h1>{product.name}</h1>
            </div>
        </div>
    </>
  )
}

export default ProductCard