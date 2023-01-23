import React, { useState } from 'react'
import './dashboard.css'
import welcome from '../../assets/welcome.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faGlobe, faFile, faCartPlus, 
        faArrowRight, faEllipsis, faRocket, faWrench, faCircleCheck, faBell, faCreditCard, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import smile from '../../assets/smile.png'
import Linechart from '../charts/Linechart'
import Barchart from '../charts/Barchart'
import { UserData } from '../../data/Sales'
import { ActiveData } from '../../data/Active'
import xd from '../../assets/xd.png'
import atlassian from '../../assets/atlassian.png'
import slack from '../../assets/slack.png'
import spotify from '../../assets/spotify.png'
import jira from '../../assets/jira.png'
import figma from '../../assets/figma.png'
import romina from '../../assets/romina.png'
import ryan from '../../assets/ryan.webp'
import alexander from '../../assets/alexander.png'
import jessica from '../../assets/jessica.webp'
import { Navbar, Sidebar } from '../../components'

const Dashboard = () => {

  const [ userData, setUserData ] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [{
        label: 'Website',
        data: UserData.map((data) => data.web) 
    }, {
        label: 'Mobile Apps',
        data: UserData.map((data) => data.mobile) 
    }]
  })

  const [ activeData, setActiveData ] = useState({
    labels: ActiveData.map((data) => data.month),
    datasets: [{
        label: 'Active Users',
        data: ActiveData.map((data) => data.active)
    }],
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
  })
  
  return (
    <><Navbar />
    <Sidebar />
    <div className='dashboard'>
          <div className="first-row">
              <div className="todays-money">
                  <div className="todays-money-text">
                      <p>Today's Money</p>
                      <h1>$53,000<span>+55%</span></h1>
                  </div>
                  <FontAwesomeIcon icon={faWallet} style={{
                      color: 'white',
                      backgroundColor: '#0066ff',
                      padding: 10,
                      borderRadius: 10
                  }} />
              </div>

              <div className="todays-users">
                  <div className="todays-users-text">
                      <p>Today's Users</p>
                      <h1>2,300<span>+3%</span></h1>
                  </div>
                  <FontAwesomeIcon icon={faGlobe} style={{
                      color: 'white',
                      backgroundColor: '#0066ff',
                      padding: 10,
                      borderRadius: 10
                  }} />
              </div>

              <div className="new-client">
                  <div className="new-client-text">
                      <p>New Clients</p>
                      <h1>+3,462<span>-2%</span></h1>
                  </div>
                  <FontAwesomeIcon icon={faFile} style={{
                      color: 'white',
                      backgroundColor: '#0066ff',
                      padding: 10,
                      borderRadius: 10
                  }} />
              </div>

              <div className="total-sales">
                  <div className="total-sales-text">
                      <p>Total Sales</p>
                      <h1>$103,430<span>+5%</span></h1>
                  </div>
                  <FontAwesomeIcon icon={faCartPlus} style={{
                      color: 'white',
                      backgroundColor: '#0066ff',
                      padding: 10,
                      borderRadius: 10
                  }} />
              </div>
          </div>
          <div className="second-row">
              <div className="welcome" style={{ backgroundImage: `url(${welcome})`, backgroundRepeat: 'no-repeat', width: 490 }}>
                  <p>Welcome back,</p>
                  <h1>Russel Aniel</h1>
                  <span>Glad to have you again!</span>
                  <span>Ask me anything.</span>
                  <h2>Tap to record <FontAwesomeIcon icon={faArrowRight} cursor='pointer' /></h2>
              </div>
              <div className="satisfaction">
                  <h1>Satisfaction Rate</h1>
                  <p>From all projects</p>
                  <div className="circle">
                      <CircularProgressbarWithChildren value={90} styles={buildStyles({
                          trailColor: '#062352',
                          pathColor: '#2057b0'
                      })}>
                          <img src={smile} alt='' />
                      </CircularProgressbarWithChildren>
                  </div>
                  <div className="percent">
                      <p>0%</p>
                      <div className="percent-text">
                          <h1>95%</h1>
                          <p>Based on likes</p>
                      </div>
                      <p>100%</p>
                  </div>
              </div>
              <div className="referral">
                  <div className="referral-text">
                      <h1>Referral Tracking</h1>
                      <FontAwesomeIcon icon={faEllipsis} color='white' />
                  </div>
                  <div className="referral-second">
                      <div className="referral-second-text">
                          <div className="referral-invited">
                              <p>Invited</p>
                              <span>145</span>
                              <span>people</span>
                          </div>
                          <div className="referral-bonus">
                              <p>Bonus</p>
                              <span>1,465</span>
                          </div>
                      </div>
                      <div className="referral-progress">
                          <CircularProgressbarWithChildren value={60}
                              styles={buildStyles({
                                  trailColor: '#062352',
                                  pathColor: '#0f6958'
                              })}
                          >
                              <div className="progress-text">
                                  <p>Safety</p>
                                  <span>9.3</span>
                                  <p>Total Score</p>
                              </div>
                          </CircularProgressbarWithChildren>
                      </div>
                  </div>
              </div>
          </div>
          <div className="third-row">
              <div className="third-row-line">
                  <div className="third-row-line-text">
                      <h1>Sales Overview</h1>
                      <p>+5% more <span>in 2021</span></p>
                  </div>
                  <Linechart chartData={userData} />
              </div>
              <div className="third-row-bar">
                  <div className="third-row-bar-chart">
                      <Barchart chartData={activeData} />
                  </div>
                  <div className="third-row-bar-text">
                      <h1>Active Users</h1>
                      <p>(+23) <span>than last week</span></p>
                  </div>
                  <div className="third-row-bar-data">
                      <div className="bar-users">
                          <div className="bar-users-image">
                              <FontAwesomeIcon icon={faWallet} color='white' style={{
                                  backgroundColor: '#0066ff',
                                  padding: 5,
                                  borderRadius: 5
                              }} /> Users
                          </div>
                          <h1>32,984</h1>
                      </div>

                      <div className="bar-clicks">
                          <div className="bar-clicks-image">
                              <FontAwesomeIcon icon={faRocket} color='white' style={{
                                  backgroundColor: '#0066ff',
                                  padding: 5,
                                  borderRadius: 5
                              }} /> Clicks
                          </div>
                          <h1>2.42M</h1>
                      </div>

                      <div className="bar-sales">
                          <div className="bar-sales-image">
                              <FontAwesomeIcon icon={faCartPlus} color='white' style={{
                                  backgroundColor: '#0066ff',
                                  padding: 5,
                                  borderRadius: 5
                              }} /> Sales
                          </div>
                          <h1>2.400$</h1>
                      </div>

                      <div className="bar-items">
                          <div className="bar-items-image">
                              <FontAwesomeIcon icon={faWrench} color='white' style={{
                                  backgroundColor: '#0066ff',
                                  padding: 5,
                                  borderRadius: 5
                              }} /> Items
                          </div>
                          <h1>320</h1>
                      </div>
                  </div>
              </div>
          </div>
          <div className="fourth-row">
              <div className="fourth-projects">
                  <h1>Projects</h1>
                  <div className="fourth-check">
                      <FontAwesomeIcon icon={faCircleCheck} color='green' />
                      <p>30 done <span>this month</span></p>
                  </div>
                  <div className="fourth-table">
                      <div className="table-row1">
                          <span>COMPANIES</span>
                          <p>MEMBERS</p>
                          <p>BUDGET</p>
                          <p>COMPLETION</p>
                      </div>
                      <div className="table-row2">
                          <div className="row2-xd">
                              <img src={xd} alt='' />Chakra Vision UI Version
                          </div>
                          <div className="row2-members">
                              <img src={romina} className='romina' title='Romina Hadid' alt='' />
                              <img src={ryan} className='ryan' title='Ryan Tompson' alt='' />
                              <img src={alexander} className='alexander' title='Alexander Smith' alt='' />
                              <img src={jessica} className='jessica' title='Jessica Doe' alt='' />
                          </div>
                          <div className="row2-budget">
                              <p>$14,000</p>
                          </div>
                          <div className="row2-completion">
                              <p>60%</p>
                              <div className="row2-completion-progress">
                                  <div className="row2-completion-progress-data">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="table-row3">
                          <div className="row3-atlassian">
                              <img src={atlassian} alt='' />Add Progress Track
                          </div>
                          <div className="row3-members">
                              <img src={romina} className='romina' title='Romina Hadid' alt='' />
                              <img src={jessica} className='jessica' title='Jessica Doe' alt='' />
                          </div>
                          <div className="row3-budget">
                              <p>$3,000</p>
                          </div>
                          <div className="row3-completion">
                              <p>10%</p>
                              <div className="row3-completion-progress">
                                  <div className="row3-completion-progress-data">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="table-row4">
                          <div className="row4-slack">
                              <img src={slack} alt='' />Fix Platform Errors
                          </div>
                          <div className="row4-members">
                              <img src={romina} className='romina' title='Romina Hadid' alt='' />
                              <img src={jessica} className='jessica' title='Jessica Doe' alt='' />
                          </div>
                          <div className="row4-budget">
                              <p>Not Set</p>
                          </div>
                          <div className="row4-completion">
                              <p>100%</p>
                              <div className="row4-completion-progress">
                                  <div className="row4-completion-progress-data">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="table-row5">
                          <div className="row5-spotify">
                              <img src={spotify} alt='' />Launch our Mobile App
                          </div>
                          <div className="row5-members">
                              <img src={romina} className='romina' title='Romina Hadid' alt='' />
                              <img src={ryan} className='ryan' title='Ryan Tompson' alt='' />
                              <img src={alexander} className='alexander' title='Alexander Smith' alt='' />
                              <img src={jessica} className='jessica' title='Jessica Doe' alt='' />
                          </div>
                          <div className="row5-budget">
                              <p>$20,500</p>
                          </div>
                          <div className="row5-completion">
                              <p>100%</p>
                              <div className="row5-completion-progress">
                                  <div className="row5-completion-progress-data">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="table-row6">
                          <div className="row6-jira">
                              <img src={jira} alt='' />Add the New Pricing Page
                          </div>
                          <div className="row6-members">
                              <img src={jessica} className='jessica' title='Jessica Doe' alt='' />
                          </div>
                          <div className="row6-budget">
                              <p>$500</p>
                          </div>
                          <div className="row6-completion">
                              <p>25%</p>
                              <div className="row6-completion-progress">
                                  <div className="row6-completion-progress-data">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="table-row7">
                          <div className="row7-figma">
                              <img src={figma} alt='' />Redesign New Online Shop
                          </div>
                          <div className="row7-members">
                              <img src={alexander} className='alexander' title='Alexander Smith' alt='' />
                              <img src={jessica} className='jessica' title='Jessica Doe' alt='' />
                          </div>
                          <div className="row7-budget">
                              <p>$2,000</p>
                          </div>
                          <div className="row7-completion">
                              <p>40%</p>
                              <div className="row7-completion-progress">
                                  <div className="row7-completion-progress-data">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="fourth-overview">
                  <div className="overview-text">
                      <h1>Orders Overview</h1>
                      <div className="overview-text-check">
                          <FontAwesomeIcon icon={faCircleCheck} color='green' />
                          <p>30% <span>this month</span></p>
                      </div>
                  </div>
                  <div className="overview-data">
                      <div className="overview-data-design">
                          <FontAwesomeIcon icon={faBell} color='blue' />
                          <div className="overview-data-design-text">
                              <p>$2400, Design changes</p>
                              <span>22 DEC 7:20 PM</span>
                          </div>
                      </div>
                      <div className="overview-data-neworder1">
                          <img src={xd} alt='' style={{ width: 20 }} />
                          <div className="overview-data-neworder1-text">
                              <p>New order #1832412</p>
                              <span>21 DEC 11 PM</span>
                          </div>
                      </div>
                      <div className="overview-data-server">
                          <FontAwesomeIcon icon={faCartPlus} color='blue' />
                          <div className="overview-data-server-text">
                              <p>Server payments for April</p>
                              <span>21 DEC 9:34 PM</span>
                          </div>
                      </div>
                      <div className="overview-data-newcard1">
                          <FontAwesomeIcon icon={faCreditCard} color='yellow' />
                          <div className="overview-data-newcard1-text">
                              <p>New card added for order #4395133</p>
                              <span>20 DEC 2:20 AM</span>
                          </div>
                      </div>
                      <div className="overview-data-newcard2">
                          <FontAwesomeIcon icon={faCreditCard} color='yellow' />
                          <div className="overview-data-newcard2-text">
                              <p>New card added for order #4395133</p>
                              <span>18 DEC 4:54 AM</span>
                          </div>
                      </div>
                      <div className="overview-data-neworder2">
                          <img src={xd} alt='' style={{ width: 20 }} />
                          <div className="overview-data-neworder2-text">
                              <p>New order #9583120</p>
                              <span>17 DEC</span>
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

export default Dashboard