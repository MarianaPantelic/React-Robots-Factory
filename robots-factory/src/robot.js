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
        .post("http://localhost:3001/robots/left", { id: robots[id].id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  const right = async () => {
    try {
      axios
        .post("http://localhost:3001/robots/right", { id: robots[id].id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };
  const go = async () => {
    try {
      axios
        .post("http://localhost:3001/robots/move", { id: robots[id].id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {robots[id] ? (
        <Container className="text-white robot">
          <Row className="mt-5">
            <Col size={6}>
              <img src={images[id]} width="500" alt={`Robot ${id}`} />
            </Col>
            <Col size={6} className="infos">
              <ul>
                <li>ID: {robots[id].id}</li>
                <li>Name: {robots[id].name}</li>
                <li>PosX: {robots[id].posX}</li>
                <li>PosY: {robots[id].posY}</li>
                <li>Heading: {robots[id].heading}</li>
              </ul>
              <Button className="m-3 bg-dark text-white btn" onClick={left}>
                Left
              </Button>
              <Button className="m-3 bg-dark text-white btn" onClick={right}>
                Right
              </Button>
              <Button className="m-3 bg-dark text-white btn" onClick={go}>
                Go
              </Button>
            </Col>
          </Row>
          <Row>
            <Button className="mt-5 bg-dark text-white mx-auto home btn">
              <Link to="/">Home</Link>
            </Button>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

export default Robot;
