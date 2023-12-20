import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OrderSummery from '../OrderSummery/OrderSummery';
import Product from '../Product/Product';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Order.css'
const Order = () => {

    const {products , newCart }  =  useLoaderData()

   const [cart , setCart] = useState(newCart)
   const clearCart =()=> {
    setCart([])
    deleteShoppingCart();
   }
   const removeItemsHandler = (id) => {
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining)
    removeFromDb(id)
   }
  
    return (
        <div className='order-container'>
            <div className='items-container'>

                {
                    cart.map(product => <ReviewItems 
                        key={product.id}
                        product={product}
                        removeItemsHandler = {removeItemsHandler}
                        ></ReviewItems>)
                }
                 {
                    cart.length === 0 && <div> <h2>There is no item to confirm your order!!! </h2>
                    <strong>Click here to shopping <Link to='/'> Shop!!</Link></strong>
                    </div>
                }
            </div>
            <div className='cartItems-container'>
            <OrderSummery clearCart={clearCart} cart={cart}></OrderSummery>
            </div>
            
        </div>
    );
};

export default Order;