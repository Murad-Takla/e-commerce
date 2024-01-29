import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"
const Product = (props) => {
    const { name, img, price, seller, ratings, id } = props.product

    
    return (
        <>

            <div className='product-card'>

                <div className='product'>

                    {
                        img ? <p> </p> : <p>Image not found</p>
                    }
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <h3>Price : ${price}</h3>
                    <div className='product-info'>
                        <p>Manufacturer : {seller}</p>
                        <p>Ratting : {ratings} star</p>

                    </div>
                </div>


                <div>
                    <footer onClick={ () => props.clickedHandler(props.product)}>
                        <h3>Add to Cart</h3>
                        <FontAwesomeIcon icon= {faShoppingCart}></FontAwesomeIcon>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Product;