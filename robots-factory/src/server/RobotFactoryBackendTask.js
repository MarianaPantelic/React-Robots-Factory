const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// omit cors errors
app.use(cors());

let robotFactory = [];

// write function, which adds a json object with the robot name and the default position/heading to the robotFactory Array
createRobot = (robotName) => {
  robotFactory.push({
    name: robotName,
    posX: 0,
    posy: 0,
    heading: "NORTH",
    id: Math.floor(Math.random() * 1000),
  });
};

// write a functions which finds a robot by id and changes his direction clockwise
turnRight = (id) => {
  let robot = robotFactory.find((robot) => robot.id === id);
  switch (robot.heading) {
    case "NORTH":
      robot.heading = "EAST";
      break;
    case "EAST":
      robot.heading = "SOUTH";
      break;
    case "SOUTH":
      robot.heading = "WEST";
      break;
    case "WEST":
      robot.heading = "NORTH";
      break;
  }
};

// write a functions which finds a robot by id and changes his direction anti-clockwise
turnLeft = (id) => {
  let robot = robotFactory.find((robot) => robot.id === id);
  switch (robot.heading) {
    case "NORTH":
      robot.heading = "WEST";
      break;
    case "EAST":
      robot.heading = "NORTH";
      break;
    case "SOUTH":
      robot.heading = "EAST";
      break;
    case "WEST":
      robot.heading = "SOUTH";
      break;
  }
};

// write a functions which finds a robot by id and changes his position one step forward
moveForward = (id) => {
  let robot = robotFactory.find((robot) => robot.id === id);
  switch (robot.heading) {
    case "NORTH":
      robot.posY += 1;
      break;
    case "EAST":
      robot.posX += 1;
      break;
    case "SOUTH":
      robot.posY -= 1;
      break;
    case "WEST":
      robot.posX -= 1;
      break;
  }
};

// fill out the middleware function, which responds with the entire robotFactory array
app.get("/robots", (req, res) => {
  // TODO
});

// write a middleware, which creates a new robot using the function createRobot. Read the name from the request body
app.put("/create", (req, res) => {
  // TODO
});

// write a middleware, which rotates one robot right using the function rotateRight. Read the id from the request body
app.post("/right", (req, res) => {
  // TODO
});

// write a middleware, which rotates one robot left using the function rotateLeft. Read the id from the request body
app.post("/left", (req, res) => {
  // TODO
});

// write a middleware, which moves the robot using the function moveRobot. Read the id from the request body
app.post("/move", (req, res) => {
  // TODO
});

app.listen(port, () => {
  console.log(`Eddy is listening for commands at http://localhost:${port}`);
});
