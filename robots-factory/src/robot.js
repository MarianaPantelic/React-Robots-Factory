import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import robot1 from "./img/man-320270_640.png";
import robot2 from "./img/man-320274_640.png";
import robot3 from "./img/man-320276_640.png";
import robot4 from "./img/man-320273_1920.png";
import robot5 from "./img/man-320272_640.png";
import { Link } from "react-router-dom";

const axios = require("axios").default;

const Robot = () => {
  let images = [robot1, robot2, robot3, robot4, robot5];
  const { id } = useParams();
  console.log(id);

  const [robots, setRobots] = useState([]);

  let myRobot = robots[id];
  console.log(myRobot);

  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      axios
        .get("http://localhost:3001/robots")
        .then((resp) => setRobots(resp.data));
    } catch (error) {
      //catching rejected requests
      console.log(error);
    }
  };

  const left = async () => {
    try {
      axios
        .post("http://localhost:3001/left", { id: myRobot.id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  const right = async () => {
    try {
      axios
        .post("http://localhost:3001/right", { id: myRobot.id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };
  const go = async () => {
    try {
      axios
        .post("http://localhost:3001/move", { id: myRobot.id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {myRobot ? (
        <Container className="text-white mt-5">
          <Row className="mt-5">
            <Col size={6}>
              <img src={images[id]} width="500" alt={`Robot ${id}`} />
            </Col>
            <Col size={6} style={{ marginTop: "50px" }}>
              <ul>
                <li>ID: {myRobot.id}</li>
                <li>Name: {myRobot.name}</li>
                <li>PosX: {myRobot.posX}</li>
                <li>PosY: {myRobot.posY}</li>
                <li>Heading: {myRobot.heading}</li>
              </ul>
              <Button className="m-3 bg-dark text-white" onClick={left}>
                Left
              </Button>
              <Button className="m-3 bg-dark text-white" onClick={right}>
                Right
              </Button>
              <Button className="m-3 bg-dark text-white" onClick={go}>
                Go
              </Button>
            </Col>
          </Row>
          <Row>
            <Button className="mt-5 bg-dark text-white mx-auto home">
              <Link to="/">Home</Link>
            </Button>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

export default Robot;
