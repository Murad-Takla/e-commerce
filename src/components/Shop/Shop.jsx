import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
import OrderSummery from '../OrderSummery/OrderSummery';
const Shop = () => {
    const [products, setProducts] = useState([])
    
    const [cart , setCart]= useState ([]) 
 
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const clickedHandler = (product) => {
      const  newCart = [...cart , product]
      setCart(newCart)
   
      
    }
 

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map((product, i) => <Product
                        key={i}
                        product={product}
                        clickedHandler = {clickedHandler}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
               <OrderSummery cart = {cart}  ></OrderSummery>
                
            </div>
        </div>
    );
};

export default Shop; 