import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app);

const UserContext = ({ children }) => {

 
    const createNewUser =(email , password) => {
    return  createUserWithEmailAndPassword (auth , email , password)
    }

    const signInHandler = ( email , password) =>{
        return signInWithEmailAndPassword (auth , email , password)
    }
    
    const logOut = () => {
        return signOut(auth)
    }


    const [user, setUser] = useState(null)

    
    const authInfo = {   users : user ,  createNewUser , signInHandler , signOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;