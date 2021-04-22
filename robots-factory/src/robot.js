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
  let myRobot = new TheRobot();

  const initialState = {
    posX: myRobot.posX,
    posY: myRobot.posY,
    direction: myRobot.direction,
  };

  const [state, setState] = useState(initialState);

  console.log(state);

  let images = [robot1, robot2, robot3, robot4, robot5];
  const { id } = useParams();
  console.log(id);

  let robotId = Number(id) + 1000;

  const foundRobot = props.robotList[id];
  if (!foundRobot) {
    console.log("error");
  }

  const left = () => {
    myRobot.turnLeft(state.direction);
    setState({ ...state, direction: myRobot.direction });
  };

  const right = () => {
    myRobot.turnRight(state.direction);
    setState({ ...state, direction: myRobot.direction });
  };
  const go = () => {
    myRobot.moveForward(state.direction, state.posX, state.posY);
    setState({ ...state, posX: myRobot.posX, posY: myRobot.posY });
    console.log(myRobot);
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
                <li>ID: {robotId}</li>
                <li>Name: {props.robotList[id]}</li>
                <li>PosX: {state.posX}</li>
                <li>PosY: {state.posY}</li>
                <li>Heading: {state.direction}</li>
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
