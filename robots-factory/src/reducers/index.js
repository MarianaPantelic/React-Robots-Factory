import { combineReducers } from "redux";

let robotsList = [];

const addRobotReducer = (robot = robotsList, action) => {
  if (action.type === "ADD_ROBOT") {
    robotsList.push(action.payload);
    return [...robotsList];
  }
  return robotsList;
};

export default combineReducers({
  robots: addRobotReducer,
});
