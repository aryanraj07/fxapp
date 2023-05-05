import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '../../styles/CardFirst.module.css';
import Image from 'next/image';

const Box= ({ id, title, imageSrc, count }) => {
  return (
    <Col>
      <div className={style.item} id={id}>
        <Row>
          <Col>
            <p className={style.item_head} style={{ padding: '25px 25px 0px 50px' }}>
              {title}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image className={style.shape} src={imageSrc} alt="user image" width={20} height={20} ></Image>
          </Col>
          <Col md={8}>
            <p className={style.num}>{count}</p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Box;