import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {

    document.title ="Amazon.com - Login"

    return(
        <div className='size mx-auto'>
            <Link to="/">
                <img className="mb-3" src="../images/amazon_logo_signin.jpg" />
            </Link>
            <form className='card text-start px-4 py-3 mb-2'>
                <h1 className='fs-2 mb-3'>Sign-In</h1>
                <label className='fontSize fw-bold mb-1' htmlFor="email">Email or mobile phone number</label>
                <input className='mb-2 fontSize' id="email" type="email" />
                <label className='fontSize fw-bold mb-1' htmlFor="email">Password</label>
                <input className='mb-3 fontSize' id="password" type="password" />
                <Link to="/">
                    <button className='buttonn mb-4' type="submit">Continue</button>
                </Link>
                <p className='fontSize2'>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
                <p><a className='fontSize' href="#">Need help?</a></p>
            </form>
            <div>
                <span className='text-muted fontSize2'>New to Amazon?</span><br/>
                <Link to="/signup">
                    <button className='mt-1 mb-4 px-5 signUp'>Create your Amazon account</button>
                </Link>
            </div>
            <hr/>
            <footer>
                <p className='mb-2 fontSize2'>
                    <span className='ms-4 me-4'><a href="#">Conditions of Use </a></span>
                    <span className='me-4' ><a href="#">Privacy Notice</a></span>
                    <span className='me-4'><a href="#">Help</a></span>
                </p>
                <p className='fontSize2'>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </footer>
        </div>
    )
}