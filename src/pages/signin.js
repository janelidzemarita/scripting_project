import React from 'react';
import Form from './Login.js'
import background from '../assets/sea.jpg';
const SignIn = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <h1 style={{color: 'black'}}>Sign In</h1>
            <Form/>
        </div>
    );
};

export default SignIn;