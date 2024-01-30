import React from 'react';
import "./OrderSummery.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const OrderSummery = ({ cart, clearCart  , children}) => {


    let total = 0, totalShipping = 0, quantity = 0;


    for (const product of cart) {
        quantity += product.quantity
        total += (product.price * product.quantity);
        totalShipping += product.shipping
    }

    const tax = (total * 0.1).toFixed(2)

    const grandTotal = (total + totalShipping + parseFloat(tax));

    return (
        <div className='cart'>
            <h1 className='title'>Order Summary</h1>

            <div className='cart-info'>
                <p>
                    Total order :
                    {
                        quantity
                    }
                </p>
                <p>
                    Total Price : $ {
                        total
                    }
                </p>
                <p>
                    Total Shipping Charge: $ {
                        totalShipping
                    }
                </p>
                <p>
                    Tax: $ {tax}
                </p>
                <h2 >Grand Total: $ {grandTotal} </h2>
            </div>
            <div className='cart-btn'>

                <button
                    onClick={clearCart}
                >Clear cart  <FontAwesomeIcon id='clear-btn' className='icon clear-btn' icon={faTrash}></FontAwesomeIcon>
                </button>

                {/* <Link className='review-btn ' to='/order'>
                    <button> Order Summary  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link> */}
                    {children}
            </div>
        </div>
    );
};

export default OrderSummery;