import { combineReducers } from "redux";

let robotsList = [];

const RobotReducer = (robot = robotsList, action) => {
  if (action.type === "ADD_ROBOT") {
    robotsList.push(action.payload);
    return [...robotsList];
  } else {
    if (action.type === "DELETE_ROBOT") {
      robotsList.splice(action.payload, 1);
      return [...robotsList];
    }
  }
  return robotsList;
};

export default combineReducers({
  robots: RobotReducer,
});
