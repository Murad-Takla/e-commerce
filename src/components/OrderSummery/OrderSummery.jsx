import React from 'react';
import "./OrderSummery.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart , faTrash  , faArrowRight} from '@fortawesome/free-solid-svg-icons';           

                  
const OrderSummery = ({cart}) => {
    console.log(cart)
     
    let total  = 0  ,  totalShipping =  0;
    
    cart.forEach(el => {

        total+= el.price;
        totalShipping += el.shipping
        
    });
    const  tax =  (total * 0.1).toFixed(2)
     
    const grandTotal = (total + totalShipping +  parseFloat(tax) ); 

    return (
        <div className='cart'> 
            <h1 className='title'>Order Summery</h1>

            <div className='cart-info'>
                <p>
                    Total order :
                    {
                        cart.length
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
                
                <button>Clear cart  <FontAwesomeIcon  id='clear-btn' className='icon clear-btn' icon= {faTrash}></FontAwesomeIcon></button>
                
               
                <button>Review order  <FontAwesomeIcon className='review-btn icon' icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default OrderSummery;