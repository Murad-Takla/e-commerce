import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import GoogleIcon from '../../icons/GoogleIcon';
import { AuthContext } from '../../Contexts/UserContext';


const SignUp = () => {


    const [error , setError] = useState(null)

    const {createNewUser} = useContext(AuthContext)


    

    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target

        const email = form.email.value
        const password  = form.password.value
        const confirmPassword = form.confirm.value

        
        if(password !== confirmPassword){
            return setError("You should put correct password . . ")
        }
    if(password.length < 6  ) {
        return setError("Your given password should be at least 6 characters . . ")
    }
        
        createNewUser(email , password).then(result => {
            const user =result.user
            form.reset()


            console.log(user)
        }).catch((error => {
            setError(error.message)
            
        }))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>


            <div className='form-body'>

                <form onSubmit={handleForm}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>

                    <div className="form-control mrg-top ">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>

                    <div className="form-control mrg-top ">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    {
                        error ? <span style={{color : "red" , pad : "10px"}}>{error}</span> : <></>
                    }
                <input className='login-btn' type="submit" value="Sign Up" />
                </form>

                <p className='toggle'>Already have an account?  <Link className='transfer' to="/login">Login</Link></p>

                <div className='line-container' >
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <div className='google-container'>
                    <div className='google-body'>
                        <GoogleIcon ></GoogleIcon>
                        <p>Continue with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;