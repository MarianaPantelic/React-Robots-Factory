import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row className="header d-flex">
      <Col size={3}>
        <div className="headerImg"></div>
      </Col>
      <Col size={6}>
        <h1 className="text-white">ROBOTS FACTORY</h1>
      </Col>
      <Col size={3}>
        <div className="headerImg"></div>
      </Col>
    </Row>
  );
};

export default Header;
