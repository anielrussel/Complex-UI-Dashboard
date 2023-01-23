import React from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHouse, faChartSimple, faCreditCard, faUser, faFile, faRocket, faStar } from '@fortawesome/free-solid-svg-icons'
import docu from '../../assets/docu.jpg'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-logo">
            <FontAwesomeIcon icon={faEye} size={'2x'}/>
            <h1>RM VISION CO.</h1>
        </div>
        <hr></hr>
        <div className="sidebar-links">
        <Link to="/"><a href='#'><FontAwesomeIcon icon={faHouse} style={{
                marginRight: 10, 
                backgroundColor: '#191967',
                padding: 10,
                borderRadius: 10 }} />Dashboard</a>
        </Link>

        <Link to="/tables"><a href='#'><FontAwesomeIcon icon={faChartSimple} style={{
                marginRight: 10, 
                backgroundColor: '#191967',
                padding: 10,
                borderRadius: 10 }} />Tables</a>
        </Link>

        <Link to="/billing"><a href='#'><FontAwesomeIcon icon={faCreditCard} style={{
                marginRight: 10, 
                backgroundColor: '#191967',
                padding: 10,
                borderRadius: 10 }} />Billing</a>
        </Link>

            <h1>ACCOUNT PAGES</h1>
        <Link to="/profile"><a href='#'><FontAwesomeIcon icon={faUser} style={{
                marginRight: 10, 
                backgroundColor: '#191967',
                padding: 10,
                borderRadius: 10 }}/>Profile</a>
        </Link>

        <Link to="/signin"><a href='#'><FontAwesomeIcon icon={faFile} style={{
                marginRight: 10, 
                backgroundColor: '#191967',
                padding: 10,
                borderRadius: 10 }} />Sign In</a>
        </Link>

        <Link to="/signup"><a href='#'><FontAwesomeIcon icon={faRocket} style={{
                marginRight: 10, 
                backgroundColor: '#191967',
                padding: 10,
                borderRadius: 10 }} />Sign Up</a>
         </Link>
        </div>
        <div className="sidebar-pro">
            <div className="sidebar-docu" style={{ backgroundImage: `url(${docu})` }} >
                <FontAwesomeIcon icon={faStar} />
                <p>Need Help?</p>
                <span>Please check our docs</span>
                <button>DOCUMENTATION</button>
            </div>
            <button>Upgrade to PRO</button>
        </div>
    </div>
  )
}

export default Sidebar