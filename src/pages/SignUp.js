import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {

    document.title ="Amazon.com - Sign up"

    return(
        <div className='size mx-auto'>
            <Link to="/">
                <img className="mb-3" src="../images/amazon_logo_signin.jpg" />
            </Link>
            <form className='card text-start px-4 py-3 mb-4'>
                <h1 className='fs-2 mb-3'>Create account</h1>
                <label className='fontSize fw-bold mb-1' htmlFor="email">Your name</label>
                <input className='mb-2 fontSize' id="email" type="email" placeholder="First name and last name"/>
                <label className='fontSize fw-bold mb-1' htmlFor="email">Email or mobile phone number</label>
                <input className='mb-2 fontSize' id="email" type="email" />
                <label className='fontSize fw-bold mb-1' htmlFor="email">Password</label>
                <input className='mb-1 fontSize' id="password" type="password" placeholder="At least 6 characters" />
                <p className='text-muted mb-2 fontSize2'>Passwords must be at least 6 characters.</p>
                <label className='fontSize fw-bold mb-1' htmlFor="email">Re-enter password</label>
                <input className='mb-3 fontSize' id="password" type="password" />
                <button className='buttonn mb-4' type="submit">Continue</button>
                <p className='fontSize2'>By creating an account, you agree to Amazon's<br/><a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
                <hr/>
                <div>
                    <p className='fontSize m-0'>Already have an account? <Link to="/login">Sign-In</Link> </p>
                    <p className='fontSize m-0'>Buying for work? <Link to="#">Create a free business account</Link> </p>
                </div>
            </form>
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