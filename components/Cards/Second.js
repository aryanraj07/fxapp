import React from "react";
import{Container,Row ,Col} from 'react-bootstrap';
import style from '../../styles/CardSecond.module.css'
import graph from '../../public/graph.jpg'
import Image from "next/image";
import arrowdown from '../../public/arrow-down.jpg'
import gold from '../../public/gold.jpg'
import exchange from '../../public/exchange.jpg'
import android from '../../public/android.jpg'
import apple from '../../public/apple.jpg'


const Second = () => {
  return (
    <div >
      
        <Container className={style.second} >
<Row>
  <Col md={6}>
    
      <p className={style.heading}> Viewership Installs & Signups Graph</p>
  </Col>
<Col>

</Col>
<Col md={1} >
<p><Image src={apple} alt="apple"></Image></p>
</Col>
<Col md={1}>
              <p><Image src={android} alt="android"></Image></p>

</Col>
<Col sm={1}>

              <p className={style.num}>102</p>
</Col>

</Row>
  
<Row>
      <div className={style.container_item}>
      <Col>
         
          <p>Sun</p>
          <p>Sun</p>
          <p>Sun</p>
          <p>Sun</p>
          <p>Sun</p>
          <p>Sun</p>
          <p>Sun</p>
          
      </Col>
          <Col>

          <Image src={graph} alt="Logo"></Image>
          
          
              
          </Col>
          <Col>
          <Row>
            <Col>
              <p>Installs This Month</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className={style.btn}>See all Customers  <Image src={arrowdown}></Image></button>
            </Col>
          </Row>
          <Row>
            <Col>
            
              <p className={style.currency}>Currencies Vs <br/>Commodities</p>
              
            </Col>
          </Row>
<Row>
  <Col md={6}>
              <span><Image src={exchange} alt='exchange'></Image></span>
  
  </Col>
  <Col md={6}>
              <span><Image src={gold} alt="gold"></Image></span>
  
  
  </Col>
</Row>
<Row>
  <Col  md={6}>
<p>7K <br/> Clicks</p>
  
  </Col>
  <Col md={6}>
  <p>10K <br/> Clicks</p>
  
  </Col>
</Row>


          </Col>

      

              
            </div>
      
</Row>
<Row>
      <Col md={1}>
      </Col>
  <Col md={1}>
        <p>Sun</p>

  </Col >
      <Col md={1}>
        <p>Mon</p>
      
      </Col>
      <Col md={1}>
        <p>Tue</p>
      
      </Col>
      <Col md={1}>
        <p>Wed</p>
      
      </Col>
      <Col md={1}>
        <p>Thr</p>
      
      </Col>
      <Col md={1}>
      
        <p>Fri</p>
      
      </Col>
      <Col md={1}>
        <p>Sat</p>
      
      </Col>

</Row>
     <Row>
<Col md={1}></Col>
<Col  className={style.year}md={1}>2021</Col>
<Col md={5}></Col>
<Col   className={style.year}md={1}>2022</Col>

     </Row>
          
      
      </Container>

      </div>

    
  );
};

export default Second;
