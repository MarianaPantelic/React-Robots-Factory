import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router";
import robot1 from "./img/man-320270_640.png";
import robot2 from "./img/man-320274_640.png";
import robot3 from "./img/man-320276_640.png";
import robot4 from "./img/robot-3434997_640.png";
import robot5 from "./img/man-320272_640.png";
import TheRobot from "./robotClass";

const Robot = (props) => {
  let images = [robot1, robot2, robot3, robot4, robot5];
  const { id } = useParams();
  console.log(id);

  const foundRobot = props.robotList[id];
  console.log(foundRobot);
  if (!foundRobot) {
    console.log("error");
  }

  const left = () => {
    foundRobot.turnLeft(foundRobot.direction);
  };

  const right = () => {
    foundRobot.turnRight(foundRobot.direction);
  };
  const go = () => {
    foundRobot.moveForward(foundRobot.direction);
  };

  return (
    <>
      {foundRobot ? (
        <Container>
          <Row className="mt-5">
            <Col size={6}>
              <img src={images[id]} width="500" alt={`Robot ${id}`} />
            </Col>
            <Col size={6} style={{ marginTop: "50px" }}>
              <ul>
                <li>ID: {foundRobot.id}</li>
                <li>Name: {foundRobot.name}</li>
                <li>PosX: {foundRobot.posX}</li>
                <li>PosY: {foundRobot.posY}</li>
                <li>Heading: {foundRobot.direction}</li>
              </ul>
              <Button className="m-3" onClick={left}>
                Left
              </Button>
              <Button className="m-3" onClick={right}>
                Right
              </Button>
              <Button className="m-3" onClick={go}>
                Go
              </Button>
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    robotList: state.robots,
  };
};

export default connect(mapStateToProps)(Robot);
