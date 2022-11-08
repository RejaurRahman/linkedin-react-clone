import React from 'react';
import './Login.css';
import LinkedinLogo from '../../assets/linkedin-logo.png';

const Login = () => {
  const loginToApp = () => {

  }

  const register = () => {

  }

  return (
    <div className='login'>
      <img
        src={LinkedinLogo}
        alt='Linkedin Icon'
      />

      <form>
        <input placeholder='Full name (required if registering)' type='text' />
        <input placeholder='Profile pic URL (optional)' type='text' />
        <input placeholder='Email address' type='email' />
        <input placeholder='Password' type='password' />
        <button type='submit' onClick={loginToApp}>sign in</button>
      </form>

      <p>Not a member? <span className='login__register' onClick={register}>register now</span></p>
    </div>
  )
}

export default Login;
