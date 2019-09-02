export const timeUpdate = () => {
  return {
    type: "TIME_UPDATE",
    payload: 1
  };
};

export const resetTimer = () => {
  return {
    type: "TIME_RESET",
    payload: 0
  };
};
