import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderSummery from '../OrderSummery/OrderSummery';
import Product from '../Product/Product';
import ReviewItems from '../ReviewItems/ReviewItems';
import { removeFromDb } from '../../utilities/fakedb';
import './Order.css'
const Order = () => {

    const {products , newCart }  =  useLoaderData()

   const [cart , setCart] = useState(newCart)

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
              
            </div>
            <div className='cartItems-container'>
            <OrderSummery cart={cart}></OrderSummery>
            </div>
            
        </div>
    );
};

export default Order;