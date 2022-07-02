import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import { useState } from 'react';


const Register = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    first_name : "",
    last_name  : "",
    phoneNumber: "",
    email      : "",
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

      axios.post('http://localhost/apicrud/addusers.php', {
        first_name : data.first_name,
        last_name  : data.last_name,
        phoneNumber: data.phoneNumber,
        email      : data.email,
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


    // const sendData = {
    //   first_name : data.first_name,
    //   last_name  : data.last_name,
    //   phoneNumber: data.phoneNumber,
    //   email      : data.email,
    //   username   : data.username,
    //   password   : data.password

    // axios.post('http://localhost/php-for-react/insert.php', sendData)



  return(

    <form className="insertForm"  onSubmit={submitForm} style={{width: '40%',
      padding: '15px', margin: '5px 0 22px 0',
      display: 'inline-block',
      border: 'none',
      color:'#181818'}}>
    <h2> Registration Form </h2>

    <label htmlFor="_first_name" >First Name</label>
    <input
      type="text"
      id="_first_name"
      name="first_name"
      onChange={handleChange}
      autoComplete="off"
      required
      style={{width: '100%',
        padding: '15px', margin: '5px 0 22px 0',
        display: 'inline-block', borderColor: "black",
          background:'#f1f1f1'
        }}
    />
    <br /> <br />

    <label htmlFor="_last_name">Last Name</label>
    <input
      type="text"
      id="_last_name"
      name="last_name"
      onChange={handleChange}
      autoComplete="off"
      required
      style={{width: '100%',
        padding: '15px', margin: '5px 0 22px 0',
        display: 'inline-block', borderColor: "black",
        background:'#f1f1f1'}}
    />
    <br /> <br />

    <label htmlFor="_email">Email</label>
    <input
      type="email"
      id="_email"
      name="email"
      onChange={handleChange}
      autoComplete="off"
      required
      style={{width: '100%',
          padding: '15px', margin: '5px 0 22px 0',
          display: 'inline-block', borderColor: "black",
          background:'#f1f1f1'}}
    />
    <br /> <br />

    <label htmlFor="_phoneNumber">Phone Number</label>
    <input
      type="text"
      id="_phoneNumber"
      name="phoneNumber"
      onChange={handleChange}
      autoComplete="off"
      required
      style={{width: '100%',
          padding: '15px', margin: '5px 0 22px 0',
          display: 'inline-block', borderColor: "black",
          background:'#f1f1f1'}}
    />
    <br /> <br />

    
    
    <label htmlFor="_username">Username</label>
    <input
      type="text"
      id="_username"
      name="username"
      onChange={handleChange}
      autoComplete="off"
      required
      style={{width: '100%',
          padding: '15px', margin: '5px 0 22px 0',
          display: 'inline-block', borderColor: "black",
          background:'#f1f1f1'}}
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
      style={{width: '100%',
          padding: '15px', margin: '5px 0 22px 0',
          display: 'inline-block', borderColor: "black",
          background:'#f1f1f1'}}
    />
    <br /> <br />
    <input type="submit" value="Register" style={{width: '100%',
      padding: '15px', margin: '5px 0 22px 0',
      display: 'inline-block',
      border: 'none',
      background:'#5fa47e'}}/>
  </form>

  )
}

export default Register;
