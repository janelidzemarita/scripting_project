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
      password  : "",
      address   : "",
      phoneNum  :""
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
          password   : data.password,
          address    : data.address,
          phoneNum   : data.phoneNum
      }
  
      console.log(sendData);
      
      axios.post('http://localhost/php-for-react/insert.php', sendData);
  
   
    }
  
return(
        <div>
            <form action="" onSubmit={submitForm}>
                <label onChange={handleChange} value={data.first_name}> First Name:
                <input id= "firstname" type="text"   required placeholder="FirstName"  />
                </label>
                <label onChange={handleChange} value={data.last_name}> Last Name:
                <input type="text"   required placeholder="LastName"    />
                </label>
                <br/>
                <label onChange={handleChange} value={data.birth_year}> Birth Date:
                <input type="text" name="BirthDate" required  placeholder="Birth Date" />
                </label>
                <label onChange={handleChange} value={data.address}> Address:
                <input type="text"  optional  placeholder="Address" />
                </label>
                <label onChange={handleChange} value={data.address}> Phone Number:
                <input type="tel"  required  placeholder="Phone Number" />
                </label>
                <br/>
                <label onChange={handleChange} value={data.username} > Username:
                <input type="text"  required  placeholder="username"    />
                </label>
                <label onChange={handleChange} value={data.email} > Email:
                <input type="email" required  placeholder="Email"  />
                </label><br/>
                <label onChange={handleChange} value={data.password}> Password:
                <input type="password" required placeholder="password" />
                </label><label> Repeat Password:
                {/*Needs change. Confirm Password*/}
                <input type="password" required placeholder="password" />
                </label>
                <div>
                    <label value="Sign Up">
                    <input type="submit" name="submit"  class="btn"/>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Sign;
