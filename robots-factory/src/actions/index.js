export const getRobot = (robot) => {
  return {
    type: "ADD_ROBOT",
    payload: robot,
  };
};

export const deleteRobot = (idx) => {
  return {
    type: "DELETE_ROBOT",
    payload: idx,
  };
};
