import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { NavLink, Navigate, useLocation } from 'react-router-dom';
import Proceed from '../Preceed/Proceed';
import Login from '../components/Login/Login';

import  "./privateRoute.css"

const PrivateRoute = ({children}) => {


    const location = useLocation()
    console.log(location)
    
    const {users , loader} = useContext(AuthContext)

    if(loader){
      return <>
      <div className='loader'>

      </div>
      </>
    }

    if(users && users.uid){
      return children
    }

   return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;