import React from 'react'
import { Form,Dropdown } from 'react-bootstrap';
import style from '../../styles/LayoutSearchBar.module.css'
import {Row,Col,Container} from 'react-bootstrap';
import Image from 'next/image';
import profile from '../../public/Ellips19.jpg'
import bell from '../../public/bell .jpg'
import adown from '../../public/adown.jpg'
import sky from '../../public/sky 1.jpg'
import file from '../../public/file 2.jpg'
import down from '../../public/down.jpg';



const Header = () => {
  return (
    <div>
      <Container style={{padding:'54px 47px 0 47px'}}>

      <Row>
        <Col md={7} >
<span>

       
        <Form.Control  type="search" placeholder=" Search"      />
</span>
        </Col>
        <Col md={2}>
          <p>

     <Image src={bell} alt='bell'></Image>
          </p>
          
            

        </Col>
        <Col md={2}>

     
  
      
     <p><Image src={profile}alt="profile"></Image></p>
      
     
     

        </Col>
        <Col md={1}>

     
  
      
     <p> <Image src={adown} alt='adown'></Image></p>
      
     
     

        </Col>
      </Row>
      
        
      

      
        
      
      <div>
        <Row>
          <Col md={8}><span className={style.dashboard}> Dashboard</span></Col>
          <Col md={2}><span> <Image src={file} alt='file1'></Image>Reports</span></Col>
          <Col md={2}><span><Image src={down} alt='download' ></Image> Export</span></Col>
        </Row>
        <Row>
          <Col>
        <p>Good Afternoon, Onkaresh  <Image src={sky} alt="sky"></Image></p>
          </Col>

        </Row>
        
        

      </div>
      </Container>

    </div>
  )
}

export default Header
