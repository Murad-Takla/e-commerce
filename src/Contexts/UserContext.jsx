import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app);

const UserContext = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)
 


    const createNewUser =(email , password) => {
        setLoader(true)
    return  createUserWithEmailAndPassword (auth , email , password)
    }

    const signInHandler = ( email , password) =>{
        setLoader(true)
        return signInWithEmailAndPassword (auth , email , password)
    }
    
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }


    useEffect( ()=> {
        const unSubscribe =  onAuthStateChanged (auth , (currentUser) => {
            setUser(currentUser)
            setLoader(false)
            // console.log(currentUser)
        })
        return ()=>{ unSubscribe() }
    }, [])


    
    const authInfo = {   users : user , loader ,  createNewUser , signInHandler , logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;