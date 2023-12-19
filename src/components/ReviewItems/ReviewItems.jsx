import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ReviewItems = (props) => {
    const removeItemsHandler = props.removeItemsHandler
   
    const { name, img, price, quantity, id , shipping  } = props.product
   
    return (
       <div className='review'>
         <div className='review-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <h5>{name}</h5>
                    <p><span>Price: $ {price}</span></p>
                    <span>Quantity : {quantity}</span>
                    <p>Shipping : $ {shipping}</p>
                </div>
                <div className='delete-btn'>
                    <FontAwesomeIcon 
                    onClick={() => removeItemsHandler(id)}
                    icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ReviewItems;