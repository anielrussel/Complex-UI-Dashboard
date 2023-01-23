import React from 'react'
import './signup.css'
import Navbarsign from '../navbarsign/Navbarsign'
import signup from '../../assets/signup.jpg'
import fb from '../../assets/fb.png'
import apple from '../../assets/apple.png'
import google from '../../assets/google.png'
import { Switch } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className="signup-navbar">
        <Navbarsign />
      </div>
      <div className="signup-image">
        <img src={signup} alt='' />
      </div>
      <div className="signup-login">
        <div className="signup-login-text">
          <h1>Welcome!</h1>
          <p>Use these awesome forms to login or create new account in your project for free.</p>
        </div>
        <div className="signup-login-signup">
          <h1>Register with</h1>
          <div className="login-signup-social">
            <img src={fb} alt='' />
            <img src={apple} alt='' />
            <img src={google} alt='' />
          </div>
          <p>or</p>
          <div className="login-signup-input">
            <label>Name</label>
            <input type={'text'} placeholder='Your full name...' />
            <label>Email</label>
            <input type={'email'} placeholder='Your email...' />
            <label>Password</label>
            <input type={'password'} placeholder='Your password...' />
          <div className="login-signup-switch">
            <Switch />
            <p>Remember me</p>
          </div>
          </div>
          <div className="login-signup-button">
            <button>SIGN UP</button>
            <p>Already have an account?<Link to={'/signin'} style={{ textDecoration: 'none'}}><span> Sign in</span></Link></p>
          </div>
        </div>
        <div className="dashboard-signature">
              <p>Develop with the help of <FontAwesomeIcon icon={faCoffee} /><span> by: RM. Aniel</span></p>
          </div>
      </div>
    </div>
    
  )
}

export default SignUp