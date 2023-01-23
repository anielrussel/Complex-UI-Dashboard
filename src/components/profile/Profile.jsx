import React from 'react'
import './profile.css'
import profile from '../../assets/profile.jpg'
import luffy from '../../assets/luffy.jpg'
import fb from '../../assets/fb.png'
import tw from '../../assets/tw.png'
import ig from '../../assets/ig.png'
import modern from '../../assets/modern.jpg'
import scandi from '../../assets/scandi.jpg'
import minimalist from '../../assets/minimalist.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faFile, faWrench, faArrowRight, faCar, faTruckFast, faBolt, faCalendarDays, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { Switch } from 'antd'
import { Navbar, Sidebar } from '../../components'


const Profile = () => {
  return (
    <><Navbar />
    <Sidebar />
    <div className='profile'>
      <div className="profile-firstrow">
        <div className="firstrow-logo">
          <img src={profile} alt='' />
          <div className="firstrow-logo-name">
            <h1>Russel Aniel</h1>
            <p>anielrussel13@gmail.com</p>
          </div>
        </div>
        <div className="firstrow-buttons">
          <button className='active'><FontAwesomeIcon icon={faBoxOpen} color='white' />OVERVIEW</button>
          <button><FontAwesomeIcon icon={faFile} color='white' />TEAMS</button>
          <button><FontAwesomeIcon icon={faWrench} color='white' />PROJECTS</button>
        </div>
      </div>

      <div className="profile-secondrow">
        <div className="profile-secondrow-col1" style={{
          backgroundImage: `url(${luffy})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: 350
        }}>
          <div className="secondrow-col1-text">
            <h1>Welcome back!</h1>
            <p>Nice to see you, Russel Aniel!</p>
          </div>
          <div className="secondrow-col1-tap">
            <p>Tap to record <FontAwesomeIcon icon={faArrowRight} cursor='pointer' color='white' /></p>
          </div>
        </div>
        <div className="profile-secondrow-col2">
          <div className="profile-secondrow-col2-text">
            <h1>Car Informations</h1>
            <p>Hello, Russel Aniel! Your Car is ready.</p>
          </div>
          <div className="secondrow-col2-progress">
            <CircularProgressbarWithChildren value={68}
              styles={buildStyles({
                trailColor: '#062352',
                pathColor: '#0f6958'
              })}
            >
              <div className="col2-progress-text">
                <FontAwesomeIcon icon={faBolt} color='green' />
                <span>68%</span>
                <p>Current Load</p>
              </div>
            </CircularProgressbarWithChildren>
            <h1>0h 58 min</h1>
            <p>Time to full charge</p>
          </div>
          <div className="secondrow-col2-details">
            <div className="col2-details-health">
              <div className="details-health-text">
                <p>Battery Health</p>
                <h1>76%</h1>
              </div>
              <div className="details-health-image">
                <FontAwesomeIcon icon={faCar} color='white' style={{ backgroundColor: 'blue', padding: 20, borderRadius: 15 }} />
              </div>
            </div>
            <div className="col2-details-efficiency">
              <div className="details-efficiency-text">
                <p>Efficiency</p>
                <h1>+20%</h1>
              </div>
              <div className="details-efficiency-image">
                <FontAwesomeIcon icon={faTruckFast} color='white' style={{ backgroundColor: 'blue', padding: 20, borderRadius: 15 }} />
              </div>
            </div>
            <div className="col2-details-consumption">
              <div className="details-consumption-text">
                <p>Consumption</p>
                <h1>163W/km</h1>
              </div>
              <div className="details-consumption-image">
                <FontAwesomeIcon icon={faBolt} color='white' style={{ backgroundColor: 'blue', padding: 20, borderRadius: 15 }} />
              </div>
            </div>
            <div className="col2-details-week">
              <div className="details-week-text">
                <p>This week</p>
                <h1>1.342km</h1>
              </div>
              <div className="details-week-image">
                <FontAwesomeIcon icon={faCalendarDays} color='white' style={{ backgroundColor: 'blue', padding: 20, borderRadius: 15 }} />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-secondrow-col3">
          <h1>Profile Information</h1>
          <div className="secondrow-col3-info">
            <p>Hi, I’m Russel Aniel, an aspiring Software Engineer. I can live, I can love
              I can reach the heavens above
              I can right what is wrong
              I can sing just any song
              I can dance, I can fly
              And touch the rainbow in the sky
              I can be your good friend
              I can love you until the end. </p>
          </div>
          <div className="secondrow-col3-info-details">
            <p><span>Full Name:</span> Russel Aniel</p>
            <p><span>Contact number:</span> (44) 123 1234 122</p>
            <p><span>Email:</span> anielrussel13@gmail.com</p>
            <p><span>Location:</span> Philippines</p>
            <div className="info-details-social">
              <span>Social:</span>
              <img src={fb} alt='' />
              <img src={tw} alt='' />
              <img src={ig} alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className="profile-thirdrow">
        <div className="profile-thirdrow-col1">
          <h1>Platform Settings</h1>
          <div className="thirdrow-col1-account">
            <p>ACCOUNT</p>
            <div className="col1-account-text1">
              <Switch />
              <p>Email me when someone follows me</p>
            </div>
            <div className="col1-account-text2">
              <Switch />
              <p>Email me when someone answers on my post</p>
            </div>
            <div className="col1-account-text3">
              <Switch />
              <p>Email me when someone mentions me</p>
            </div>
          </div>
          <div className="thirdrow-col1-application">
            <p>APPLICATION</p>
            <div className="col1-application-text1">
              <Switch />
              <p>New launches and projects</p>
            </div>
            <div className="col1-application-text2">
              <Switch />
              <p>Monthly product updates</p>
            </div>
            <div className="col1-application-text3">
              <Switch />
              <p>Subscribe to newsletter</p>
            </div>
            <div className="col1-application-text4">
              <Switch />
              <p>Receive mails weekly</p>
            </div>
          </div>
        </div>
        <div className="profile-thirdrow-col2">
          <div className="profile-thirdrow-col2-text">
            <h1>Projects</h1>
            <p>Architects design cars</p>
          </div>
          <div className="thirdrow-col2-designs">
            <div className="col2-designs-modern">
              <img src={modern} alt='' />
              <div className="designs-modern-text">
                <span>Project #1</span>
                <h1>Modern</h1>
                <p>As Uber works through a huge amount of internal management turmoil.</p>
                <button>VIEW ALL</button>
              </div>
            </div>
            <div className="col2-designs-scandi">
              <img src={scandi} alt='' />
              <div className="designs-scandi-text">
                <span>Project #2</span>
                <h1>Scandinavian</h1>
                <p>Music is something that every person has his or her own specific opinion about.</p>
                <button>VIEW ALL</button>
              </div>
            </div>
            <div className="col2-designs-minimalist">
              <img src={minimalist} alt='' />
              <div className="designs-minimalist-text">
                <span>Project #3</span>
                <h1>Minimalist</h1>
                <p>Different people have different taste, and various types of music.</p>
                <button>VIEW ALL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-signature">
        <p>Develop with the help of <FontAwesomeIcon icon={faCoffee} /><span> by: RM. Aniel</span></p>
      </div>
    </div></>
  )
}

export default Profile