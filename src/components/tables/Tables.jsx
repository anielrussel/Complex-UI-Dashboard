import React from 'react'
import './tables.css'
import esthera from '../../assets/esthera.png'
import alexa from '../../assets/alexa.png'
import laurent from '../../assets/laurent.png'
import freduardo from '../../assets/freduardo.png'
import daniel from '../../assets/daniel.png'
import mark from '../../assets/mark.png'
import xd from '../../assets/xd.png'
import atlassian from '../../assets/atlassian.png'
import slack from '../../assets/slack.png'
import spotify from '../../assets/spotify.png'
import jira from '../../assets/jira.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Sidebar } from '../../components'

const Tables = () => {
  return (
    <><Navbar />
    <Sidebar />
    <div className='tables'>
      <div className="tables-author">
        <h1>Authors Table</h1>
        <div className="tables-author-table">
          <div className="tables-author-table-row1">
            <span>AUTHOR</span>
            <p>FUNCTION</p>
            <p>STATUS</p>
            <p>EMPLOYED</p>
            <p>ACTION</p>
          </div>
          <div className="tables-author-table-row2">
            <div className="author-row2-image">
              <img src={esthera} alt='' />
              <div className="author-row2-image-text">
                <h1>Esthera Jackson</h1>
                <span>esthera@simmmple.com</span>
              </div>
            </div>
            <div className="author-row2-function">
              <p>Manager</p>
              <span>Organization</span>
            </div>
            <div className="author-row2-status">
              <p>Online</p>
            </div>
            <div className="author-row2-employed">
              <p>23/04/18</p>
            </div>
            <div className="author-row2-action">
              <span>Edit</span>
            </div>
          </div>

          <div className="tables-author-table-row3">
            <div className="author-row3-image">
              <img src={alexa} alt='' />
              <div className="author-row3-image-text">
                <h1>Alexa Liras</h1>
                <span>alexa@simmmple.com</span>
              </div>
            </div>
            <div className="author-row3-function">
              <p>Programmer</p>
              <span>Developer</span>
            </div>
            <div className="author-row3-status">
              <p>Offline</p>
            </div>
            <div className="author-row3-employed">
              <p>11/01/19</p>
            </div>
            <div className="author-row3-action">
              <span>Edit</span>
            </div>
          </div>

          <div className="tables-author-table-row4">
            <div className="author-row4-image">
              <img src={laurent} alt='' />
              <div className="author-row4-image-text">
                <h1>Laurent Michael</h1>
                <span>laurent@simmmple.com</span>
              </div>
            </div>
            <div className="author-row4-function">
              <p>Executive</p>
              <span>Projects</span>
            </div>
            <div className="author-row4-status">
              <p>Online</p>
            </div>
            <div className="author-row4-employed">
              <p>19/09/17</p>
            </div>
            <div className="author-row4-action">
              <span>Edit</span>
            </div>
          </div>

          <div className="tables-author-table-row5">
            <div className="author-row5-image">
              <img src={freduardo} alt='' />
              <div className="author-row5-image-text">
                <h1>Freduardo Hill</h1>
                <span>freduardo@simmmple.com</span>
              </div>
            </div>
            <div className="author-row5-function">
              <p>Programmer</p>
              <span>Developer</span>
            </div>
            <div className="author-row5-status">
              <p>Online</p>
            </div>
            <div className="author-row5-employed">
              <p>24/12/08</p>
            </div>
            <div className="author-row5-action">
              <span>Edit</span>
            </div>
          </div>

          <div className="tables-author-table-row6">
            <div className="author-row6-image">
              <img src={daniel} alt='' />
              <div className="author-row6-image-text">
                <h1>Daniel Thomas</h1>
                <span>daniel@simmmple.com</span>
              </div>
            </div>
            <div className="author-row6-function">
              <p>Manager</p>
              <span>Executive</span>
            </div>
            <div className="author-row6-status">
              <p>Offline</p>
            </div>
            <div className="author-row6-employed">
              <p>04/10/21</p>
            </div>
            <div className="author-row6-action">
              <span>Edit</span>
            </div>
          </div>

          <div className="tables-author-table-row7">
            <div className="author-row7-image">
              <img src={mark} alt='' />
              <div className="author-row7-image-text">
                <h1>Mark Wilson</h1>
                <span>mark@simmmple.com</span>
              </div>
            </div>
            <div className="author-row7-function">
              <p>Programmer</p>
              <span>Developer</span>
            </div>
            <div className="author-row7-status">
              <p>Offline</p>
            </div>
            <div className="author-row7-employed">
              <p>14/09/20</p>
            </div>
            <div className="author-row7-action">
              <span>Edit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tables-project">
        <h1>Projects table</h1>
        <div className="tables-project-table">
          <div className="tables-project-table-row1">
            <span>PROJECT</span>
            <p>BUDGET</p>
            <p>STATUS</p>
            <p>COMPLETION</p>
            <p>ACTION</p>
          </div>

          <div className="tables-project-table-row2">
            <div className="project-row2-chakra">
              <div className="chakra-project">
                <img src={xd} alt='' />
                <h1>Chakra Vision UI Version</h1>
              </div>
              <div className="chakra-budget">
                <h1>	$14,000</h1>
              </div>
              <div className="chakra-status">
                <h1>Working</h1>
              </div>
              <div className="chakra-completion">
                <h1>60%</h1>
              </div>
              <div className="chakra-action">
                <FontAwesomeIcon icon={faEllipsisVertical} color='white' />
              </div>
            </div>
          </div>

          <div className="tables-project-table-row3">
            <div className="project-row3-addprogress">
              <div className="addprogress-project">
                <img src={atlassian} alt='' />
                <h1>Add Progress Track</h1>
              </div>
              <div className="addprogress-budget">
                <h1>$3,000</h1>
              </div>
              <div className="addprogress-status">
                <h1>Done</h1>
              </div>
              <div className="addprogress-completion">
                <h1>100%</h1>
              </div>
              <div className="addprogress-action">
                <FontAwesomeIcon icon={faEllipsisVertical} color='white' />
              </div>
            </div>
          </div>

          <div className="tables-project-table-row4">
            <div className="project-row4-fix">
              <div className="fix-project">
                <img src={slack} alt='' />
                <h1>Fix Platform Errors</h1>
              </div>
              <div className="fix-budget">
                <h1>Not set</h1>
              </div>
              <div className="fix-status">
                <h1>Canceled</h1>
              </div>
              <div className="fix-completion">
                <h1>30%</h1>
              </div>
              <div className="fix-action">
                <FontAwesomeIcon icon={faEllipsisVertical} color='white' />
              </div>
            </div>
          </div>

          <div className="tables-project-table-row5">
            <div className="project-row5-launch">
              <div className="launch-project">
                <img src={spotify} alt='' />
                <h1>Launch our Mobile App</h1>
              </div>
              <div className="launch-budget">
                <h1>$32,000</h1>
              </div>
              <div className="launch-status">
                <h1>Canceled</h1>
              </div>
              <div className="launch-completion">
                <h1>0%</h1>
              </div>
              <div className="launch-action">
                <FontAwesomeIcon icon={faEllipsisVertical} color='white' />
              </div>
            </div>
          </div>

          <div className="tables-project-table-row6">
            <div className="project-row6-addnew">
              <div className="addnew-project">
                <img src={jira} alt='' />
                <h1>Add the New Pricing Page</h1>
              </div>
              <div className="addnew-budget">
                <h1>$2,300</h1>
              </div>
              <div className="addnew-status">
                <h1>Done</h1>
              </div>
              <div className="addnew-completion">
                <h1>100%</h1>
              </div>
              <div className="addnew-action">
                <FontAwesomeIcon icon={faEllipsisVertical} color='white' />
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

export default Tables