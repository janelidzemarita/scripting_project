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
    <form className="insertForm" onSubmit={submitForm}>
    <h2> Registration Form </h2>

    <label htmlFor="_first_name">First Name</label>
    <input
      type="text"
      id="_first_name"
      name="first_name"
      onChange={handleChange}
      autoComplete="off"
      required
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
    <input type="submit" value="Register" />
  </form>
  )
}

export default Register;


// const Register = () => {
//   let history = useNavigate();

//   const [data, setData] = useState({
//     first_name : "",
//     last_name  : "",
//     email      : "",
//     username   : "",
//     password   : ""
//   })

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });

//     console.log(data);
//   }

//   const submitForm = (e) => {
//     e.preventDefault();
//     const sendData = {
//       first_name : data.first_name,
//       last_name  : data.last_name,
//       email      : data.email,
//       username   : data.username,
//       password   : data.password
//     }

//     console.log(sendData);

//     axios.post('http://localhost/php-for-react/insert.php', sendData)
//     .then((result) => {
//       if (result.data.Status == 'Invalid') {
//         alert("Invalid User");
//       }
//       else {
//         history('/dashboard');
//       }
//     })
//   }

// function Register() {
//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");

//   const register = () => {
//     Axios.post("http://localhost:4600/api/insert", {
//       username : usernameReg,
//       password : passwordReg,
//     }).then(() => {
//       alert("Successful insert.");
//     });
//   };

//   return(
//     // <p>Hello</p>
//     <div className="App">
//       <div className="registration">
//         <h1>Registration</h1>
//         <label>Username</label>
//         <input 
//           type="text" 
//           onChange={(e) => {
//             setUsernameReg(e.target.value);
//           }} 
//         />
//         <label>Password</label>
//         <input 
//           type="text" 
//           onChange={(e) => {setPasswordReg(e.target.value);
//           }} 
//         />    
//         <button onClick={register}> Register </button>
//       </div>
//     </div>
//   );
// }

// export default Register;
