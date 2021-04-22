export const getRobot = (robot) => {
  return {
    type: "ADD_ROBOT",
    payload: robot,
  };
};
