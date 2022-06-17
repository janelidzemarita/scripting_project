
import React from "react";
const Login = () => {
    return (
        <div> 
            <h1>Log in</h1>
            <div>
                <input type="text" placeholder="username" />
                <input yype = "text" placeholder="password"/>
                <ul>
                    <li herf = "#">Forgot password ?</li>
                </ul>
            </div>
            <div>
                <input type = "button" value={"login"}/>
            </div>
        </div>
       
    );
};
export default Login