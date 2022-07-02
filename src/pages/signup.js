import React from 'react';
import Register from '../registration/register.js';
import background from '../assets/logo.jpg';

const SignUp = () => {
    return (

        <div style={{backgroundImage: `url(${background})`}}>
            <h1 style={{color: 'black'}}>Please Enter Info to Sign Up</h1>
            <Register/>
        </div>
    );
};

export default SignUp;