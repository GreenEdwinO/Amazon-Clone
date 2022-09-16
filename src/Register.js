import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase"
import "./Login.css"
import { useStateValue } from './StateProvider';



function Register() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = e => {
    e.preventDefault();

    //FIRE BASE USER REGISTERATION COMES IN HERE
    auth
      .createUserWithEmailAndPassword(email, password, firstname, lastname)
      .then((auth) => {
        // Successfully created user email and password
        if (auth) {
          history.push('/')
        }
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
        <h1>Register an Account</h1>

        <form action="">
          <h5>First-Name</h5>
          <input
            type="text"
            placeholder='Your First Name'
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
          <h5>Last-Name</h5>
          <input
            type="text"
            placeholder='Your Last Name'
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
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
        </form>

        <p>
          By Registering you agree to the <a href="/">Terms and Conditions of Use & Sale</a>. Please see our <a href="/">Privacy Notice</a>, our <a href="/">Cookies Notice</a> and our <a href="/">Interest-Based Ads Notice</a>.
        </p>

        <button
          type='submit'
          onClick={register}
          className='register-button'>Create Account</button>

        <Link to='/'>
          <button
            className='register-button'>Cancle</button>
        </Link>
      </div>
    </div>
  )
}

export default Register;