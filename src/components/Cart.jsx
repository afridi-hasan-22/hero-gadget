import React, { useContext, useEffect, useState } from "react";
import { deleteShoppingCart, getStoredCart, removeItem } from "../utils/fakedb";
import  { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { CartContext } from "../App";
import toast from 'react-hot-toast'

const Cart = () => {
  const [cart,setCart] = useContext(CartContext)
  let total = 0;
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity;
    }
  }

  // remove item from shopping cart
  const handleRemoveItem = id => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining)
    removeItem(id)
    toast.error('Item Removed')
  }
  const handleDeleteAllCart = () => {
    deleteShoppingCart()
  }

  // Place Order 
  const orderHandler = () => {
    if(cart.length > 0){
      setCart([]);
      deleteShoppingCart();
      return toast.success('Order Done! 👍')
    }
      return toast.error('Cart is Empty! 🔥')
  }

  // Clear Cart 
  const clearCartHandler = () => {
    if(cart.length > 0) {
      setCart([]);
      deleteShoppingCart();
      return toast.success('All Items Removed')
    }
    return toast.error('Cart is Empty')
  }
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900 ">
      <div className="flex flex-col max-w-3xl p-6 sm:p-10 space-y-4 ">
        <h2 className="text-2xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart is EMPTY !"}
        </h2>
        <ul className="flex flex-col divide-y divide-y-700">
          {cart.map((carts) => (
            <CartItem key={carts.id} carts={carts} handleRemoveItem={handleRemoveItem}></CartItem>
          ))}
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
           {cart.length > 0 ? 
           (<>
           <button onClick={()=> clearCartHandler()} className="btn-outlined">Clear Cart</button>
           </>) :
           
           (<>
           <Link to='/shop'><button className="btn-outlined">Back to shop</button></Link>
           </>)}
           <button onClick={()=> orderHandler()} className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
