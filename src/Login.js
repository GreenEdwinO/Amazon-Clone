import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase"
import "./Login.css"


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    //FIRE BASE LOGIN COMES IN HERE

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  // const register = e => {
  //   e.preventDefault();

  //   //FIRE BASE USER REGISTERATION COMES IN HERE
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       // Successfully created user email and password
  //       if (auth) {
  //         history.push('/')
  //       }
  //     })
  //     .catch(error => alert(error.message))
  // }

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
          By signing-in you agree to the <a href="/">Terms and Conditions of Use & Sale</a>. Please see our <a href="/">Privacy Notice</a>, our <a href="/">Cookies Notice</a> and our <a href="/">Interest-Based Ads Notice</a>.
        </p>
        <h5>Don't have an account? Create one.</h5>
        <Link to="/register">
          <button
            // onClick={register}
            className='register-button'>Create an Account</button>
        </Link>
      </div>
    </div>
  )
}

export default Login