import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from "./firebase"
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    //FIRE BASE LOGIN COMES IN HERE

  }

  const register = e => {
    e.preventDefault();

    //FIRE BASE USER REGISTERATION COMES IN HERE
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
    // Successfully created user email and password
      console.log(auth);
    })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder='Enter your e-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='signIn-button'>Sign In</button>
        </form>

        <p>
          By Signing-in you agree to the Terms and Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className='register-button'>Create an Account</button>
      </div>
    </div>
  )
}

export default Login