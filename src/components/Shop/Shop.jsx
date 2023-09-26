import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [orderProduct, serOrderProduct] = useState(0)
    const [cart , setCart]= useState ([]) 
   const [totalPrice , setTotalPrice] =  useState(0)
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const clickedHandler = (product) => {
      const  newCart = [...cart , product]
      setCart(newCart)
   
      setTotalPrice(totalPrice+product.price)
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
            <div className="order-summery">
               <h2>Order Summery</h2>
                <h4>
                    Total order :  
                    {
                        cart.length
                    }
                </h4>
                <h5>
                    Total Price : {
                        totalPrice
                    }
                </h5>
            </div>
        </div>
    );
};

export default Shop; <h3>This is product list</h3>