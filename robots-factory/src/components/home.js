import React, { useRef } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { getRobot } from "../actions";

import { Link } from "react-router-dom";

const Home = (props) => {
  const inputRef = useRef();

  const createRobot = () => {
    console.log(inputRef.current.value);
    props.getRobot(inputRef.current.value);
    inputRef.current.value = "";
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
                <li key={idx}>
                  <Link to={"/robot/" + idx}>{robot}</Link>
                </li>
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

export default connect(mapStateToProps, { getRobot })(Home);