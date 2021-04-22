import React, { useRef } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getRobot, deleteRobot } from "../actions";

import { Link } from "react-router-dom";

import TheRobot from "../robotClass";

const Home = (props) => {
  const inputRef = useRef();

  const createRobot = () => {
    let Eddy = new TheRobot();
    Eddy.name = inputRef.current.value;
    Eddy.id = Math.floor(Math.random() * 1000);
    console.log(inputRef.current.value);
    props.getRobot(Eddy);
    inputRef.current.value = "";
  };

  const removeRobot = (idx) => {
    props.deleteRobot(idx);
  };

  return (
    <Container>
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
          {props.robotList
            ? props.robotList.map((robot, idx) => (
                <div className="d-flex mt-3">
                  <li key={idx}>
                    <Link to={"/robot/" + idx}>{robot.name}</Link>
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

const mapStateToProps = (state) => {
  return {
    robotList: state.robots,
  };
};

export default connect(mapStateToProps, { getRobot, deleteRobot })(Home);
