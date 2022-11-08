import React from 'react';
import './Login.css';
import LinkedinLogo from '../../assets/linkedin-logo.png';

const Login = () => {
  return (
    <div className='login'>
      <img
        src={LinkedinLogo}
        alt='Linkedin Icon'
      />

      <form>
        <input placeholder='Full name (required if registering)' type='text' />
      </form>
    </div>
  )
}

export default Login;
