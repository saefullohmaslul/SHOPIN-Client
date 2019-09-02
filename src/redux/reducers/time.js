const initialState = {
  jam: 0,
  menit: 0,
  detik: 0
};

const time = (state = initialState, actions) => {
  switch (actions.type) {
    case "TIME_UPDATE":
      if (state.menit === 59) {
        return {
          ...state,
          detik: 0,
          menit: 0,
          jam: state.jam + 1
        };
      }
      if (state.detik === 59) {
        return {
          ...state,
          detik: 0,
          menit: state.menit + 1
        };
      }
      return {
        ...state,
        detik: state.detik + actions.payload
      };
    default:
      return state;
  }
};

export default time;
