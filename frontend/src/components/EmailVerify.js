import React from 'react'
import ButtonSubmit from '../components/DefaultButton'
import imgLogin from '../assets/images/login-image.png';
import { Link } from 'react-router-dom'

function EmailVerify() {

    return (
        <div className='loginForm'>
            <form className='sign-in-form'>
            <div className='sign-head'>VERIFY YOUR<span className='blue'> EMAIL</span></div>
            <div>Please enter the 4 digit code sent to your email and your new password</div>
            <div className='form-group'>
                <input type="number" name="number" id='number' placeholder='Enter 4 digit code' />
            </div>
            <div className='form-group'>
                <input type="password" name="new-password" id='new-password' placeholder='New Password' />
            </div>
            <div className='form-group'>
                <input type="password" name="confirm-new-password" id='confirm-new-password' placeholder='Confirm New Password' />
            </div>
            <div className='buttons'>
                <Link to={{ pathname: "/forgot-password" }} ><ButtonSubmit className = 'btn-fp-cancel' value = 'CANCEL' type = 'submit' /></Link>
                <ButtonSubmit className = 'btn-fp' value = 'SUBMIT' type = 'submit' />
            </div>
            <div className = 'resend'>I didn't receive the code. <a className='resendLink' href = "#">RESEND</a></div>
            </form>
            <div>
                <img alt="login introduction" src= {imgLogin}></img>
            </div>
        </div>
    )
  }
  
  export default EmailVerify