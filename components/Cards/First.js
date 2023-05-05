import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "../../styles/CardFirst.module.css";
import {Col,Row} from  'react-bootstrap'
import Box from './Box';
const First= () => {

  
    return (
      <div>
        <div>
  
          <div className={style.container}>
            <Col>
              <Box
                title="All Customers"
                imageSrc="/user.jpg"
                count="900"
                id={style.item1}
                style={{ padding: "20px 18px 0px 40px" }}
              />
            </Col>
  
            <Col>
              <Box
                title="Free Trial"
                imageSrc="/user.jpg"
                count="35"
                id={style.item2}
                style={{ padding: "25px 25px 0px 64px" }}
              />
            </Col>
  
            <Col>
              <Box
                title="Paid Clients"
                imageSrc="/user.jpg"
                count="288"
                id={style.item3}
                style={{ padding: "25px 25px 0px 64px" }}
              />
            </Col>
  
            <Col>
              <Box
                title="Active Paid"
                imageSrc="/user.jpg"
                count="96"
                id={style.item4}
                style={{ padding: "25px 25px 0px 64px" }}
              />
            </Col>
  
            <Col>
              <Box
                title="Dormant"
                imageSrc="/user.jpg"
                count="42"
                id={style.item5}
                style={{ padding: "25px 25px 0px 64px" }}
              />
            </Col>
  
          </div>
  
        </div>
  
      </div>
    )
  }
  


export default First
