import React from 'react';
import "./Header.css"
import logo from '../../images/Logo.svg'
 const Header = () => {
    return (
        <>
         <nav className='header'> 
            <img src= {logo} alt="" />

            <div>
                <a href="">Shop</a>
                <a href="">Order Review</a>
                <a href="">Order Inventory</a>
                <a href="">Login</a>
                    
            </div>
            </nav>  
        </>
    );
};

export default Header;