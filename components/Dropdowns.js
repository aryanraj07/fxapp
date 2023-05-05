import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Row ,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import style from '../styles/Dropdown.module.css'
import Image from "next/image";
import writing  from '../public/writing.jpg';
import stats from '../public/stats.jpg'
import file2 from '../public/file 2.jpg'
import group from '../public/group.jpg';
import setting from '../public/setting.jpg';
import warning from  '../public/warning.jpg';


const Dropdowns = () => {
  return (
    <div className={style.container}>
<Container>
<Row>
  <Col style={{padding:'0 0 58px 44px'}}>
      <button   className={style.btn_head}>  <img  className={style.img_dashboard}src='/dashboard.jpg'/> DASHBOARD</button>
  </Col>
</Row>
    <div style={{padding:'0 0 58px 40px'}}>

      
  <Row >
      <Col>
<Dropdown>
     
      <Dropdown.Toggle    className={style.dropdown_togglle}>
     <Image src={group}alt='group'></Image> Users
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">All Customers</Dropdown.Item>
        <Dropdown.Item >Manually Add Customers</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Free Trial Customers</Dropdown.Item>
        <Dropdown.Item href="#/action-3">All Paid Customers</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Active Paid Customers</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Dormant Clients</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Dormant Clients</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Create User</Dropdown.Item>
        <Dropdown.Item href="#/action-3">All Users</Dropdown.Item>
        <Dropdown.Item href="#/action-3">All Unverified Clients</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</Col>
    
  </Row>

<Row md={3}>
<Col>


      <Dropdown className={style.dropdown} >
      <Dropdown.Toggle className={style.dropdown_togglle } >
       <Image src={stats}alt='stats'></Image> ANALYTICS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Notification</Dropdown.Item>
        <Dropdown.Item >Notification History</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Chatbots Logbook</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Chatbot Traffic AnalysisAll Paid Customers</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Newsletter Subscription</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Open Gold Admin</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Track Referrals</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Update Breaking Story</Dropdown.Item>
        <Dropdown.Item href="#/action-3">User Activity Map</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Add Payment Request</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Payment Request</Dropdown.Item>
        <Dropdown.Item href="#/action-3">All Received Payments</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Accounting Sheets</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</Col>
    
</Row>


  <Row >
    <Col>
    


      <Dropdown   className={style.dropdown} >
      <Dropdown.Toggle className={style.dropdown_togglle }>
     <Image src={file2}alt='file2'></Image>   CREATE REPORTS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Role Management</Dropdown.Item>
        <Dropdown.Item >Coupon Management</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Crashes & Reports</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown >
    
    </Col>
  </Row>
  <Row >
<Col>

    
      <Dropdown  className={style.dropdown} >   
        
      <Dropdown.Toggle className={style.dropdown_togglle } >
      <Image src={writing} alt='writng'></Image> DOCUMENTATION
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Update Subscription Plans</Dropdown.Item>
        <Dropdown.Item >Add News Update</Dropdown.Item>
        <Dropdown.Item href="#/action-3">All News</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Currency / Open / Close</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Future Forecast</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Create Invoice</Dropdown.Item>
        <Dropdown.Item href="#/action-3">View All Invoice</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown  >   
        
      <Dropdown.Toggle  className={style.dropdown_togglle } >
      <Image src={setting} alt='setting'></Image> SETTINGS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">  Callback Requests</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown >   
    <Dropdown   >   

      <Dropdown.Toggle className={style.dropdown_togglle } >
      <Image src={warning} alt='warning'></Image> Alerts
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"> <p> Expected Range Email <br/>Shooter</p>
 </Dropdown.Item>
<Dropdown.Item href="#/action-1">Business Proposal Shooter</Dropdown.Item>
<Dropdown.Item href="#/action-1">Set Rate Alert</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown >   
</Col>
  </Row>
<Row>
  <Col>
  
    <div style={{padding: "37px 20px 0px 10px"}}> <buttom className={style.btn}>LOGOUT</buttom></div>
  </Col>

</Row>

    
    </div>
</Container>
    </div>

  )
}

export default Dropdowns
