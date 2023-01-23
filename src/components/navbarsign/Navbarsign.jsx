import React from 'react'
import './navbarsign.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsSpin, faUser, faCircleUser, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbarsign = () => {
  return (
    <div className='navbarsign'>
        <div className="navbarsign-logo">
            <h1>RM VISION CO.</h1>
        </div>
        <div className="navbarsign-links">
            <Link to='/' style={{ textDecoration: 'none', color: 'white'}}><FontAwesomeIcon icon={faArrowsSpin} /> Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/profile' style={{ textDecoration: 'none', color: 'white'}}><FontAwesomeIcon icon={faUser} /> Profile</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/signup' style={{ textDecoration: 'none', color: 'white'}}><FontAwesomeIcon icon={faCircleUser} /> Sign Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/signin' style={{ textDecoration: 'none', color: 'white'}}><FontAwesomeIcon icon={faUnlockKeyhole} /> Sign In</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="navbarsign-button">
            <button>BUY NOW</button>
        </div>
    </div>
  )
}

export default Navbarsign