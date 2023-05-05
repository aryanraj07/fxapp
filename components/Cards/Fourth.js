import React from 'react'

import { Container,Row,Col } from 'react-bootstrap';
import style from '../../styles/CardFourth.module.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'next/image';
import utenl1 from '../../public/uten1.jpg'
import rupee from '../../public/rupee-indian 1.jpg'
const Fourth = () => {
  return (
    <div className={style.container}>

    <div  className={style.item} id={style.item1}>
       <Container >
        <Row>
          <Col style={{padding:'36px 0 0 54px'}}>
       <p> <Image src={rupee} alt='rupee'></Image>16,58,000</p>
          </Col>

        </Row>
        <Row>
          <Col style={{padding:'0 33px 0 109px'}} className='ml-5'>
       <p className={style.itemsubHead}>Last Month Sales</p>
          </Col>

        </Row>
        <Row>
          <Col md={5}><Image src={utenl1}alt='utensil1'></Image></Col>
          <Col md={7}>
          <li style={{display:'flex'}}> 
            <Col md={8}>
            <p className={style.item1content}>Gold </p>

            </Col>
            <Col md={4}>
            <button className={style.item1_btn} id={style.btn1}>4</button>
            </Col>
            </li>
          <li style={{display:'flex'}}> 
            <Col md={8}>
            <p className={style.item1content}>Platinum </p>

            </Col>
            <Col md={4}>
            <button className={style.item1_btn} id={style.btn2}>15</button>
            </Col>
            </li>
          <li style={{display:'flex'}}> 
            <Col md={8}>
            <p className={style.item1content}>Titanium </p>

            </Col>
            <Col md={4}>
            <button className={style.item1_btn} id={style.btn3}>12</button>
            </Col>
            </li>
          
          </Col>
        
         
          

        </Row>
        
       
      </Container>
    </div>
    <div className={style.item} id={style.item2}>
    <Container >
        <Row>
          <Col style={{padding:'36px 0 0 54px'}}>
       <p> <Image src={rupee} alt='rupee'></Image>20,00,000</p>
          </Col>

        </Row>
        <Row>
          <Col style={{padding:'0 33px 0 79px'}} className='ml-5'>
       <p className={style.itemsubHead}>Upcoming Renewals</p>
          </Col>

        </Row>
        <Row>
          <Col md={5}><img src='/next-week1.jpg' alt='goods2 pic'/></Col>
          <Col md={7}>
          <li style={{display:'flex'}}> 
            <Col md={8}>
            <p className={style.item1content}>Gold </p>

            </Col>
            <Col md={4}>
            <button className={style.item1_btn} id={style.btn1}>4</button>
            </Col>
            </li>
          <li style={{display:'flex'}}> 
            <Col md={8}>
            <p className={style.item1content}>Platinum </p>

            </Col>
            <Col md={4}>
            <button className={style.item1_btn} id={style.btn2}>15</button>
            </Col>
            </li>
          <li style={{display:'flex'}}> 
            <Col md={8}>
            <p className={style.item1content}>Titanium </p>

            </Col>
            <Col md={4}>
            <button className={style.item1_btn} id={style.btn3}>12</button>
            </Col>
            </li>
          
          </Col>
        
         
          

        </Row>
        
       
      </Container>
      
    </div>
    <div className={style.item}id={style.item3}>
       <Container >
<Row>
  <Col style={{padding:'31px 39px 0 39px'}}>
      <p className={style.card3_head}>
      Upcoming Renewal client  </p>
  
  </Col>
</Row>
      
      
      <div className={style.item_3content}>

        <Row >
        <Col >Nitin Singhal</Col>
        </Row>
        <Row >
          <Col  >  <button  className={style.item3_btn}id={style.item3_btn1}>Gold</button></Col>
        <Col sm={6}>&#x20b9;80,762</Col>

        </Row>
      
      </div>
      <div className={style.item_3content} >

        <Row >
        <Col>Balraj</Col>

        
        </Row>
        <Row>
          <Col>   <button className={style.item3_btn} id={style.item3_btn2}>Platinum</button></Col>
        <Col sm={6}>&#x20b9;12,962</Col>

        </Row>
      </div>
      
      <div  className={style.item_3content}>
        <Row>
        
        <Col>Raghav</Col>
        
        </Row>
        <Row>
          <Col>  <button className={style.item3_btn}id={style.item3_btn3}>Titanium</button></Col>
        <Col sm={6}>&#x20b9;18,45,900</Col>

        </Row>
        
        </div>
      </Container>

      
    </div>
    </div>
  )
}

export default Fourth
