import React, { useContext, useEffect } from 'react';
import "./Header.css"
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
const Header = () => {

    const { users , logOut } = useContext(AuthContext)
    //console.log(users)
    return (
        <>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    {
                        users?.email ? <span style={{color : 'white'}}>Welcome !!  {users.email}</span>  : <></>
                    }
                </div>
                <div className='header-list'>
                    <Link to="/">Shop</Link>
                    <Link to="order">Order </Link>
                    <Link to="inventory"> Inventory</Link>
                    <Link to="about">About</Link>
                    {
                        users?.uid ? <> 
                        <button onClick={logOut} className='btn-logOut'>Log Out</button>
                        </> : <>
                            <Link to="login">LogIn</Link>
                            <Link to="signup">SignUp</Link>
                        </>
                    }

                  

          
                </div>
                
            </nav>
        </>
    );
};

export default Header; 