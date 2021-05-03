import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row className="header d-flex">
      <Col size={2}>
        <div className="headerImg"></div>
      </Col>
      <Col size={6}>
        <h1>ROBOTS FACTORY</h1>
      </Col>
      <Col lg={3} md={0}>
        <div className="headerImg"></div>
      </Col>
    </Row>
  );
};

export default Header;
