import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import "./Shop.css"
import Product from '../Product/Product';
import OrderSummery from '../OrderSummery/OrderSummery';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Shop = () => {

    const products = useLoaderData()

    const [cart, setCart] = useState([])
    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]

                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }

        }
        setCart(savedCart)
    }, [products])

    const clickedHandler = (selectedProduct) => {
        let newCart = [];

        const exists = cart.find(product => product.id === selectedProduct.id)


        if (!exists) {
            //  console.log("This is not exists in the cart ")

            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }

        else {
            //   console.log("This is exists in the cart ")
            const remain = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...remain, selectedProduct]
        }


        setCart(newCart)
        addToDb(selectedProduct.id)

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map((product, i) => <Product
                        key={i}
                        product={product}
                        clickedHandler={clickedHandler}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <OrderSummery clearCart={clearCart} cart={cart}  >
                <Link className='review-btn ' to='/order'>
                    <button> Order Summary  <FontAwesomeIcon
                     icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>
                </OrderSummery>
            </div>
        </div>
    );
};

export default Shop; 