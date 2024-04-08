import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utils/fakedb";
import { CartContext, ProductContext } from "../App";
import toast from 'react-hot-toast'
const Shop = () => {
  const [cart, setCart] = useContext(CartContext);
  const products = useContext(ProductContext);
  // console.log(products);
  const handleAddtoCart = (product) => {
    



     let newCart = []
    const exist = cart.find(existingProduct => existingProduct.id === product.id);
    if(!exist){
        product.quantity = 1;
        newCart = [...cart, product]
    }else{
       const rest = cart.filter(existingProduct => existingProduct.id !== product.id);
       exist.quantity = exist.quantity + 1; 
       newCart = [...rest, exist]
    }
    toast.success('Product Added!!')
     setCart(newCart)
    addToDB(product.id);
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto px-4 py-16 md:px-6 lg:px-8">
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddtoCart={handleAddtoCart}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
