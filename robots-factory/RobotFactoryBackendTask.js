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
    posY: 0,
    heading: "NORTH",
    id: Math.floor(Math.random() * 1000),
  });
};

removeRobot = (id) => {
  robotFactory = robotFactory.filter((robot) => robot.id !== id);
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
  let posX = Number(robot.posX);
  let posY = Number(robot.posY);
  switch (robot.heading) {
    case "NORTH":
      robot["posY"] = posY + 1;
      break;
    case "EAST":
      robot["posX"] = posX + 1;
      break;
    case "SOUTH":
      robot["posY"] = posY - 1;
      break;
    case "WEST":
      robot["posX"] = posX - 1;
      break;
  }
};

// fill out the middleware function, which responds with the entire robotFactory array
app.get("/robots", (req, res) => {
  res.send(robotFactory);
});

// write a middleware, which creates a new robot using the function createRobot. Read the name from the request body
app.put("/create", (req, res) => {
  try {
    const robotName = req.body.name;
    createRobot(robotName);
    res.send(robotFactory);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

// write a middleware, which rotates one robot right using the function rotateRight. Read the id from the request body
app.post("/right", (req, res) => {
  try {
    let id = req.body.id;
    turnRight(id);
    res.send(robotFactory.find((robot) => robot.id === id));
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

// write a middleware, which rotates one robot left using the function rotateLeft. Read the id from the request body
app.post("/left", (req, res) => {
  try {
    let id = req.body.id;
    turnLeft(id);
    res.send(robotFactory.find((robot) => robot.id === id));
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

// write a middleware, which moves the robot using the function moveRobot. Read the id from the request body
app.post("/move", (req, res) => {
  try {
    let id = req.body.id;
    moveForward(id);
    res.send(robotFactory.find((robot) => robot.id === id));
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

app.delete("/delete", (req, res) => {
  try {
    let id = req.body.id;
    removeRobot(id);
    res.send(robotFactory);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Eddy is listening for commands at http://localhost:${port}`);
});
