import React from 'react';
import imgLogin from '../assets/images/login-image.png';
import "../assets/styles/LoginForm.css";
import ButtonSubmit from '../components/DefaultButton'

function Login() {
  return (
    <div className='loginForm'>
        <form className='sign-in-form'>
          <div>
              <span>Need an account? </span>
              <a href = '/sign-up'>Sign Up</a>
          </div>
          <p className='sign-head'>SIGN IN</p>
          <p>Start learning by signing in to your registered email and password.</p>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" id='email' placeholder='Email' />
          </div>

          <div className='form-group'>
            <label htmlFor='Password'>Password</label>
            <input type="password" name="password" id='password' placeholder='Password' />
            <a className = 'a-forgot' href = "/forgot-password">Forgot Password?</a>
          </div>
          
          <ButtonSubmit className = 'btn-sign-up' value = 'SIGN IN' type = 'submit' />
        </form>
        <div className='login-img'>
          <img alt="login introduction" src= {imgLogin}></img>
        </div>

    </div>
  )
}

export default Login;