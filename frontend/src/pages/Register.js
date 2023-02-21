import React from 'react';
import ButtonSubmit from '../components/DefaultButton';
import imgLogin from '../assets/images/login-image.png';

function Register() {
  return (
    <div className='registerForm'>
        <form className='sign-up-form'>
          <div>
              <span>Already have an account? </span>
              <a href = '/sign-in'>Sign In</a>
          </div>
          <p className='sign-head'>SIGN UP</p>
          <p>Start learning by filling up the needed information.</p>
          <div className='form-group' id = 'name-group'>
            <div>
                <label htmlFor='first-name'>First Name</label>
                <input type="text" name="first-name" id='first-name' placeholder='First Name' />
            </div>
            <div>
                <label htmlFor='last-name'>Last Name</label>
                <input type="text" name="last-name" id='last-name' placeholder='Last Name' />
            </div>
            
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" id='email' placeholder='Email' />
          </div>

          <div className='form-group' id='password-group'>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id='password-sign-up' placeholder='Password' />
            </div>
            <div>
                <label htmlFor='confirm-password'> Confirm Password</label>
                <input type="password" name="confirm-password" id='confirm-password' placeholder='Confirm Password' />
            </div>
          </div>
          
          <ButtonSubmit className = 'btn-sign-up' value = 'SIGN UP' type = 'submit' />
        </form>
        <div className="login-img">
          <img alt="login introduction" src= {imgLogin}></img>
        </div>

    </div>
  )
}

export default Register