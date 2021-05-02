import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { Link } from "react-router-dom";

const axios = require("axios").default;

const Home = () => {
  const inputRef = useRef();

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

  const createRobot = async () => {
    console.log(inputRef.current.value);
    try {
      axios
        .put("http://localhost:3001/create", { name: inputRef.current.value })
        .then((resp) => sendGetRequest());
      inputRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  const removeRobot = (idx) => {
    try {
      axios
        .delete("http://localhost:3001/delete", {
          data: { id: robots[idx].id },
        })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(robots);

  return (
    <Container className="text-white mt-5">
      <h1 className="text-center mt-5">Create Robot</h1>
      <h2 className="text-center">NAME:</h2>
      <InputGroup className="mb-3 input mt-5">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={createRobot}>
            Create
          </Button>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" ref={inputRef} />
      </InputGroup>

      <Row>
        <ul className="mx-auto">
          {robots
            ? robots.map((robot, idx) => (
                <div className="d-flex justify-content-between mt-3">
                  <li key={robot.id}>
                    <Link to={"/robot/" + idx}>
                      <i class="fab fa-android"></i>
                      <span> </span>
                      {robot.name}
                    </Link>
                  </li>
                  <Button
                    className="bg-dark text-white ml-5"
                    onClick={() => removeRobot(idx)}
                  >
                    Terminate Robot
                  </Button>
                </div>
              ))
            : null}
        </ul>
      </Row>
    </Container>
  );
};

export default Home;
