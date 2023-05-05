import Second from "@/components/Cards/Second.js";
import Third from "@/components/Cards/Third.js";

import Layout from "../components/Layout/Layout";
import React from "react";
import Fourth from "@/components/Cards/Fourth.js";
import Dropdown from "../components/Dropdowns.js";
import Logo from "@/components/Layout/Logo.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "@/components/Layout/Header.js";
import First from "@/components/Cards/First.js";
import style from "../styles/HomePage.module.css";

// import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <Logo />
          <Dropdown />
        </Col>

        <Col md={9}>
          <div className={style.container}>
            <Header className={style.search} />
            <First />

            <Second />
            <Third />
            <Fourth />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
