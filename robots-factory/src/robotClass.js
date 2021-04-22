export default class TheRobot {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.direction = "NORTH";
  }

  turnLeft = (direction) => {
    switch (direction) {
      case "NORTH":
        this.direction = "WEST";
        break;
      case "EAST":
        this.direction = "NORTH";
        break;
      case "SOUTH":
        this.direction = "EAST";
        break;
      case "WEST":
        this.direction = "SOUTH";
        break;
    }
  };

  turnRight = (direction) => {
    switch (direction) {
      case "NORTH":
        this.direction = "EAST";
        break;
      case "EAST":
        this.direction = "SOUTH";
        break;
      case "SOUTH":
        this.direction = "WEST";
        break;
      case "WEST":
        this.direction = "NORTH";
        break;
    }
  };

  moveForward = (direction, posX, posY) => {
    console.log(this.posY);
    console.log(this.posX);

    switch (direction) {
      case "NORTH":
        this.posY = posY + 1;
        break;
      case "EAST":
        this.posX = posY + 1;
        break;
      case "SOUTH":
        this.posY = posY - 1;
        break;
      case "WEST":
        this.posX = posX - 1;
        break;
    }
  };
}
