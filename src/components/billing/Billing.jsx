import React from 'react'
import './billing.css'
import mastercard from '../../assets/mastercard.png'
import visa from '../../assets/visa.png'
import docu from '../../assets/docu.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faChartLine, faMoneyBillWave, faFile, faPen, 
         faTrashCan, faCalendar, faCircleDown, faCircleUp, faCircleExclamation, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Sidebar } from '../../components'

const Billing = () => {
  return (
    <><Navbar />
    <Sidebar />
    <div className='billing'>
      <div className="billing-firstrow">
        <div className="firstrow-col1">
          <div className="firstrow-col1-row">

            <div className="firstrow-col1-vision" style={{ backgroundImage: `url(${docu})` }}>
              <div className="col1-vision-logo">
                <h1>RM Vision</h1>
                <img src={mastercard} alt='' />
              </div>
              <div className="col1-vision-text">
                <h1>7812&nbsp;&nbsp;&nbsp;2139&nbsp;&nbsp;&nbsp;0823&nbsp;&nbsp;&nbsp;7916</h1>
                <div className="vision-text-details">
                  <div className="vision-text-valid">
                    <span>VALID THRU</span>
                    <p>05/24</p>
                  </div>
                  <div className="vision-text-cvv">
                    <span>CVV</span>
                    <p>09X</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="firstrow-col1-credit">
              <div className="col1-credit-balance">
                <div className="credit-balance-text">
                  <p>Credit Balance</p>
                  <h1>$25,215</h1>
                </div>
                <div className="credit-balance-logo">
                  <FontAwesomeIcon icon={faEllipsis} color='white' />
                  <FontAwesomeIcon icon={faChartLine} color='white' />
                </div>
              </div>
              <div className="credit-balance-new">
                <span>NEWEST</span>
                <div className="balance-new-bill">
                  <FontAwesomeIcon icon={faMoneyBillWave} color='green' style={{
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 50
                  }} />
                  <div className="new-bill-text">
                    <p>Bill & Taxes</p>
                    <span>Today, 16:36</span>
                  </div>
                  <p>-$154.50</p>
                </div>
              </div>
            </div>
          </div>

          <div className="firstrow-col1-payment">
            <div className="col1-payment-text">
              <h1>Payment Method</h1>
              <button>ADD NEW CARD</button>
            </div>
            <div className="col1-payment-details">
              <div className="payment-details-mastercard">
                <img src={mastercard} alt='' style={{
                  width: 30
                }} />
                <p>7812 2139 0823 XXXX</p>
                <FontAwesomeIcon icon={faPen} color='gray' />
              </div>
              <div className="payment-details-visa">
                <img src={visa} alt='' />
                <p>7812 2139 0823 XXXX</p>
                <FontAwesomeIcon icon={faPen} color='gray' />
              </div>
            </div>
          </div>
        </div>


        <div className="firstrow-col1-invoices">
          <div className="col1-invoices-col1">
            <p>Invoices</p>
            <div className="invoices-col1-march1">
              <p>March, 01, 2020</p>
              <span>#MS-415646</span>
            </div>
            <div className="invoices-col1-feb">
              <p>February, 10, 2021</p>
              <span>#RV-126749</span>
            </div>
            <div className="invoices-col1-apr">
              <p>April, 05, 2020</p>
              <span>#QW-103578</span>
            </div>
            <div className="invoices-col1-jun">
              <p>June, 25, 2019</p>
              <span>#MS-415646</span>
            </div>
            <div className="invoices-col1-march2">
              <p>March, 01, 2019</p>
              <span>#AR-803481</span>
            </div>
          </div>

          <div className="col1-invoices-col2">
            <button>VIEW ALL</button>
            <div className="invoices-col2-1">
              <span>$180</span>
            </div>
            <div className="invoices-col2-2">
              <span>$250</span>
            </div>
            <div className="invoices-col2-3">
              <span>$120</span>
            </div>
            <div className="invoices-col2-4">
              <span>$180</span>
            </div>
            <div className="invoices-col2-5">
              <span>$300</span>
            </div>
          </div>

          <div className="col1-invoices-col3">
            <div className="invoices-col3-1">
              <FontAwesomeIcon icon={faFile} /> PDF
            </div>
            <div className="invoices-col3-2">
              <FontAwesomeIcon icon={faFile} /> PDF
            </div>
            <div className="invoices-col3-3">
              <FontAwesomeIcon icon={faFile} /> PDF
            </div>
            <div className="invoices-col3-4">
              <FontAwesomeIcon icon={faFile} /> PDF
            </div>
            <div className="invoices-col3-5">
              <FontAwesomeIcon icon={faFile} /> PDF
            </div>
          </div>
        </div>
      </div>

      <div className="billing-secondrow">
        <div className="secondrow-col1">
          <h1>Billing Information</h1>
          <div className="col1-oliver">
            <div className="oliver-text">
              <h1>Oliver Liam</h1>
              <p>Company Name: Viking Burrito</p>
              <p>Email Address: oliver@burrito.com</p>
              <p>Email Address:   oliver@burrito.com</p>
            </div>
            <div className="oliver-button">
              <FontAwesomeIcon icon={faTrashCan} color='red' /><span>DELETE</span>
              <FontAwesomeIcon icon={faPen} color='gray' /><p>EDIT</p>
            </div>
          </div>

          <div className="col1-lucas">
            <div className="lucas-text">
              <h1>Lucas Harper</h1>
              <p>Company Name: Stone Tech Zone</p>
              <p>Email Address: lucas@stone-tech.com</p>
              <p>VAT Number: FRB1235476</p>
            </div>
            <div className="lucas-button">
              <FontAwesomeIcon icon={faTrashCan} color='red' /><span>DELETE</span>
              <FontAwesomeIcon icon={faPen} color='gray' /><p>EDIT</p>
            </div>
          </div>

          <div className="col1-ethan">
            <div className="ethan-text">
              <h1>Ethan James</h1>
              <p>Company Name: Fiber Notion</p>
              <p>Email Address: ethan@fiber.com</p>
              <p>VAT Number: FRB1235476</p>
            </div>
            <div className="ethan-button">
              <FontAwesomeIcon icon={faTrashCan} color='red' /><span>DELETE</span>
              <FontAwesomeIcon icon={faPen} color='gray' /><p>EDIT</p>
            </div>
          </div>
        </div>

        <div className="secondrow-col2">
          <div className="secondrow-col2-text">
            <h1>Your Transaction's</h1>
            <FontAwesomeIcon icon={faCalendar} color='white' /><p>23 - 30 March 2020</p>
          </div>
          <div className="secondrow-col2-newest">
            <p>NEWEST</p>
            <div className="col2-newest-netflix">
              <FontAwesomeIcon icon={faCircleDown} size='2x' color='red' />
              <div className="newest-netflix-text">
                <p>Netflix</p>
                <span>27 March 2020, at 12:30 PM</span>
              </div>
              <p>- $ 2,500</p>
            </div>
            <div className="col2-newest-apple">
              <FontAwesomeIcon icon={faCircleUp} size='2x' color='green' />
              <div className="newest-apple-text">
                <p>Apple</p>
                <span>27 March 2020, at 04:30 AM</span>
              </div>
              <p>+ $ 2,000</p>
            </div>
          </div>

          <div className="secondrow-col2-yesterday">
            <p>YESTERDAY</p>
            <div className="col2-yesterday-stripe">
              <FontAwesomeIcon icon={faCircleUp} size='2x' color='green' />
              <div className="yesterday-stripe-text">
                <p>Stripe</p>
                <span>26 March 2020, at 13:45 PM</span>
              </div>
              <p>+ $ 750</p>
            </div>
            <div className="col2-yesterday-hubspot1">
              <FontAwesomeIcon icon={faCircleUp} size='2x' color='green' />
              <div className="yesterday-hubspot1-text">
                <p>HubSpot</p>
                <span>26 March 2020, at 12:30 PM</span>
              </div>
              <p>+ $ 1,000</p>
            </div>
            <div className="col2-yesterday-hubspot2">
              <FontAwesomeIcon icon={faCircleUp} size='2x' color='green' />
              <div className="yesterday-hubspot2-text">
                <p>HubSpot</p>
                <span>26 March 2020, at 08:30 AM</span>
              </div>
              <p>+ $ 2,500</p>
            </div>
            <div className="col2-yesterday-webflow">
              <FontAwesomeIcon icon={faCircleExclamation} size='2x' color='gray' />
              <div className="yesterday-webflow-text">
                <p>Webflow</p>
                <span>26 March 2020, at 05:00 AM</span>
              </div>
              <p>Pending</p>
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

export default Billing