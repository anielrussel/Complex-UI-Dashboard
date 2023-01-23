import React from 'react'
import './signin.css'
import Navbarsign from '../navbarsign/Navbarsign'
import signin from '../../assets/signin.jpg'
import { Switch } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const SignIn = () => {
  return (
    <div className='signin'>
      <div className="signin-navbar">
        <Navbarsign />
      </div>
      <div className="signin-image">
        <img src={signin} alt='' />
      </div>
      <div className="signin-login">
        <div className="signin-login-text">
          <h1>Welcome!</h1>
          <p>Use these awesome forms to login or create new account in your project for free.</p>
        </div>
        <div className="signin-login-signin">
          <h1>Nice to see you!</h1>
          <p>Enter your email and password to sign in</p>
          <div className="login-signin-input">
            <label>Email</label>
            <input type={'email'} placeholder='Your email...' />
            <label>Password</label>
            <input type={'password'} placeholder='Your password...' />
          <div className="login-signin-switch">
            <Switch />
            <p>Remember me</p>
          </div>
          </div>
          <div className="login-signin-button">
            <button>SIGN IN</button>
            <p>Don't have an account?<Link to={'/signup'} style={{ textDecoration: 'none'}} ><span> Sign up</span></Link></p>
          </div>
        </div>
        <div className="dashboard-signature">
              <p>Develop with the help of <FontAwesomeIcon icon={faCoffee} /><span> by: RM. Aniel</span></p>
          </div>
      </div>
    </div>
  )
}

export default SignIn