import React, { useState } from 'react';
import imgLogin from '../assets/images/login-image.png';
import "../assets/styles/LoginForm.css";
import ButtonSubmit from '../components/DefaultButton'

import { Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate username and password
    if (username === "admin@admin.com" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  if (isLoggedIn) {
    return (
      <Navigate replace to="/dashboard" />
    );
  }

  return (
    <div className='loginForm'>
        <form onSubmit={handleSubmit} className='sign-in-form'>
          <div>
              <span>Need an account? </span>
              <a href = '/sign-up'>Sign Up</a>
          </div>
          <p className='sign-head'>SIGN IN</p>
          <p>Start learning by signing in to your registered email and password.</p>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="email" value={username} onChange={handleUsernameChange} name="email" id='email' placeholder='Email' />
          </div>

          <div className='form-group'>
            <label htmlFor='Password'>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} name="password" id='password' placeholder='Password' />
            <a className = 'a-forgot' href = "/forgot-password">Forgot Password?</a>
          </div>
          
          <ButtonSubmit className = 'btn-sign-up' value = 'SIGN IN' type = 'submit' />
        </form>
        <div>
          <img alt="login introduction" src= {imgLogin}></img>
        </div>

    </div>
  )
}

export default Login;