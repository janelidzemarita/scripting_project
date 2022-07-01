import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import { useState } from 'react';


const Login = () => {
        let navigate = useNavigate();
      
        const [data, setData] = useState({
          username   : "",
          password   : ""
        });
      
        const handleChange = (e) => {
          setData({ ...data, [e.target.name]: e.target.value });
        }
      
        // Inserting a new user into the Database.
        const submitForm = async(event) => {
          try {
            event.preventDefault();
            event.persist();
      
            axios.post('http://localhost/apicrud/login.php', {
              username   : data.username,
              password   : data.password
            }).
            then(res => {
              console.log(res.data); 
              navigate('/'); 
              return;
            })
          } catch (error) {throw error;}
        };


        return(
          <form className="insertForm" onSubmit={submitForm}>
            
            <label htmlFor="_username">Username</label>
            <input
                type="text"
                id="_username"
                name="username"
                onChange={handleChange}
                autoComplete="off"
                required
            />
            <br /> <br />
            <label htmlFor="_password">Password</label>
            <input
                type="password"
                id="_password"
                name="password"
                onChange={handleChange}
                autoComplete="off"
                required
            />
            <br /> <br />
            <input type="submit" value="Login" />
            <br /> <br />
            {/* <input type="text" name="fname" value="<?php echo $_POST['$message'] ?>" /> */}
        </form>
        )
      }
      
export default Login;
