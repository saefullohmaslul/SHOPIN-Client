const initialState = {
  data: undefined
};

const menus = (state = initialState, actions) => {
  switch (actions.type) {
    case "MENUS_GET":
      return {
        ...state,
        data: actions.payload.data
      };
    case "MENUS_GET_FULFILLED":
      return {
        ...state,
        data: actions.payload.data
      };
    case "MENUS_GET_REJECTED":
      return {
        ...state,
        data: actions.payload.data
      };

    default:
      return state;
  }
};

export default menus;
