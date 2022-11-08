import React, { useState } from 'react';
import './Login.css';
import { auth } from '../../services/firebase';
import LinkedinLogo from '../../assets/linkedin-logo.png';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  }

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        }))
      })
    }).catch(error => alert(error))
  }

  return (
    <div className='login'>
      <img
        src={LinkedinLogo}
        alt='Linkedin Icon'
      />

      <form>
        <input
          value={name}
          placeholder='Full name (required if registering)'
          type='text'
          onChange={e => setName(e.target.value)}
        />

        <input
          value={profilePic}
          placeholder='Profile pic URL (optional)'
          type='text'
          onChange={e => setProfilePic(e.target.value)}
        />

        <input
          value={email}
          placeholder='Email address'
          type='email'
          onChange={e => setEmail(e.target.value)}
        />

        <input
          value={password}
          placeholder='Password'
          type='password'
          onChange={e => setPassword(e.target.value)}
        />

        <button
          type='submit'
          onClick={loginToApp}
        >
          sign in
        </button>
      </form>

      <p>Not a member? <span className='login__register' onClick={register}>register now</span></p>
    </div>
  )
}

export default Login;
