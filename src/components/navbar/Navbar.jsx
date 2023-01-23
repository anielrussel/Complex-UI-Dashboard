import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faGear, faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [ navbar, setNavbar ] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className="top">
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar-text">
                <h1>Russel Aniel</h1>
            </div>
            <div className="navbar-search">
                <input type={'text'} placeholder='Type here...'/>
                <FontAwesomeIcon icon={faMagnifyingGlass} color='gray' style={{
                    position: 'absolute',
                    top: 28,
                    right: 195
                }} />
                <FontAwesomeIcon icon={faUser} style={{
                    backgroundColor: 'white',
                    padding: 5,
                    borderRadius: 20,
                    cursor: 'pointer'
                }}/>
                <Link to={'/signin'} style={{ textDecoration: 'none'}} ><p>Sign In</p></Link>
                <FontAwesomeIcon icon={faGear}  style={{
                    color: 'white',
                    marginLeft: 20,
                    cursor: 'pointer'
                }} />
                <FontAwesomeIcon icon={faBell}  style={{
                    color: 'white',
                    marginLeft: 20,
                    cursor: 'pointer'
                }} />
            </div>
        </div>
    </div>
    
  )
}

export default Navbar