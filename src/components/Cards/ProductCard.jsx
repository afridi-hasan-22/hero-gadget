import React from 'react';

const ProductCard = ({product, handleAddtoCart}) => {
    const {name, picture, price ,category,id} = product;
    return (
        <div className='bg-gray-100 p-6 shadow-lg rounded '>
            <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={picture} alt="" />
            <p className='mb-2 text-xl sm:text-2xl font-bold leading-none '>{name}</p>
            <p className='text-gray-700'>{category}</p>
            <p className='text-gray-700'>{price}</p>
            <button 
            onClick={()=> handleAddtoCart(product)}
            className='btn-primary w-full block'>Add To Cart</button>
        </div>
    );
};

export default ProductCard;