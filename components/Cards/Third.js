import React from 'react'
import style from '../../styles/CardThird.module.css'
import {Button, Container,Row,Col}  from 'react-bootstrap';



import Table from 'react-bootstrap/Table';
const Third = () => {
  return (
    <div className={style.card} >
       <div className={style.item} id={style.item1}  >
        
            <Container>
<Row>
    <Col>
        <p className={style.theadings} >Latest Customer Onboards</p>
    </Col>
</Row>
<Row>
</Row>
    <Col>

      <Table>
        <thead  className={style.tableh}>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Joined On</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sonali Shukla</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>2 mins ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody >
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>10 mins ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
               
                <td > <Row><Col md={6}>1 hr ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>6 hrs ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>1 day ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>1 day ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       

      </Table>
    </Col>
    <Row>
        <Col>
        
            <Button className={style.btn_down}> View all customers &#8594;</Button>
        </Col>
    </Row>
           
        
            </Container>
      
        
        </div>
        <div className={style.item} id={style.item2}>

        
       <p className={style.theadings}>Upcoming Follow Ups</p>
      

        <Table>
        <thead  className={style.tableh}>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Joined On</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sonali Shukla</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>2 mins ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>10 mins ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>1 hr ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>6 hrs ago</Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>1 day ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       
        <tbody>
            <tr>
                <td>Ritika Raj</td>
                <td>8437897586</td>
                <td > <Row><Col md={6}>1 day ago </Col> <Col md={6}><button className={style.btn}>View More</button> </Col> </Row></td>
            </tr>
        </tbody>
       

      </Table>
      <Row>
        <Col>
      <Button className={style.btn_down}> View all Follow Ups &#8594; </Button>
        
        
        </Col>
      </Row>
      
        
        </div>
      </div>

  )
}

export default Third
