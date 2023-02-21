import React from 'react'
import ButtonSubmit from '../components/DefaultButton'
import imgLogin from '../assets/images/login-image.png';
import { Link } from 'react-router-dom'

function Email() {
    return (
    <div className='forgot-pass'>
        <form className='forgot-password-form'>
          <div className='sign-head'>FORGOT<span className='blue'> PASSWORD?</span></div>
          <div>Enter the email address associated with your account</div>
          <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type="email" name="email" id='email' placeholder='Email' />
          </div>
            <div className='buttons'>
                <Link to={{ pathname: "/sign-in" }} ><ButtonSubmit className = 'btn-fp-cancel' value = 'CANCEL'/></Link>
                <Link to='email-verify' ><ButtonSubmit className = 'btn-fp' value = 'NEXT' type = 'submit' /></Link>
            </div>
        </form>
        <div className='login-img'>
            <img alt="login introduction" src= {imgLogin}></img>
        </div>
    </div>
    )
}

export default Email