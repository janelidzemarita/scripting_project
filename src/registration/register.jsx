import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React from 'react'
import { useState } from 'react';


const Sign = () => {
    let history = useNavigate();
    const [data, setData] = useState({
      first_name: "",
      last_name : "",
      birth_year: "",
      username  : "",
      email     : "",
      password  : ""
    });
  
    const handleChange=(e) => {
      setData({ ...data, [e.target.name]: e.target.value });
      console.log(data);
    }
  
    const submitForm = (e) => {
      e.preventDefault();
      const sendData = {
          first_name : data.first_name,
          last_name  : data.last_name,
          birth_year : data.birth_year,
          username   : data.username,
          email      : data.email,
          password   : data.password
      }
  
      console.log(sendData);
      
      axios.post('http://localhost/php-for-react/insert.php', sendData);
  
   
    }
  
return(
        <div>
            <form action="" onSubmit={submitForm}>
                <input type="text"    placeholder="FirstName"  onChange={handleChange} value={data.first_name}/>
                <input type="text"    placeholder="LastName"   onChange={handleChange} value={data.last_name} />
                <input type="text"    placeholder="Birth Year" onChange={handleChange} value={data.birth_year}/>
                <input type="text"    placeholder="username"   onChange={handleChange} value={data.username}  />
                <input type="email"   placeholder="Email"      onChange={handleChange} value={data.email}     />
                <input type="password"placeholder="password"   onChange={handleChange} value={data.password}  />
                <ul>
                    <li herf = "#">Forgot password ?</li>
                </ul>
                <div>
                    <input type="submit" name="submit" value="Sign Up" class="btn"></input>
                </div>
            </form>
        </div>
    );
};

export default Sign;
