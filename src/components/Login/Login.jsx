import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import GoogleIcon from '../../icons/GoogleIcon';
import { AuthContext } from '../../Contexts/UserContext';


const Login = () => {

    const { signInHandler } = useContext(AuthContext)

    console.log(signInHandler)
    const [error , setError] = useState(null)

    const formHandler = (e) => {
        e.preventDefault()
        const form = e.target

        const email = form.email.value
        const password = form.password.value

        console.log(email , password)

        signInHandler(email , password).then((result) => {
            const user = result.user
            setError("Successfully Logged In ")
            form.reset()
        }).catch(error => {
            console.error(error)
            
        })

    }





    return (
        <>


            <div className='form-container'>
                <h2 className='form-title'>Login</h2>


                <div className='form-body'>

                    <form onSubmit={formHandler}>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" required />
                        </div>

                        <div className="form-control mrg-top ">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" required />
                        </div>

                        {
                            error ? <span> {error}</span> : <></>
                        }
                        <input className='login-btn' type="submit" value="Login" />
                    </form>

                    <p className='toggle'>New to Ema-john? <Link className='transfer' to="/signup">Create New Account</Link></p>

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

        </>
    );
};

export default Login;