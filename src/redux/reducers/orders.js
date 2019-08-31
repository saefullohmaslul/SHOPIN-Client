const initialState = {
  data: []
};

const orders = (state = initialState, actions) => {
  switch (actions.type) {
    case "ORDER_ADD":
      return {
        ...state,
        data: [...state.data, actions.payload]
      };
    case "CHANGE_QTY":
      return {
        data: actions.payload
      };
    case "ORDER_POST":
      return {
        ...state
      };
    case "ORDER_POST_FULFILLED":
      return {
        data: []
      };
    case "ORDER_POST_REJECTED":
      return {
        data: []
      };
    default:
      return state;
  }
};

export default orders;
