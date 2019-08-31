const initialState = {
  data: undefined
};

const transactions = (state = initialState, actions) => {
  switch (actions.type) {
    case "ORDER_GET":
      return {
        ...state,
        data: actions.payload.data
      };
    case "ORDER_GET_FULFILLED":
      return {
        ...state,
        data: actions.payload.data
      };
    case "ORDER_GET_REJECTED":
      return {
        ...state,
        data: actions.payload.data
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        data: actions.payload.data
      };
    case "CHANGE_STATUS_FULFILLED":
      return {
        ...state,
        data: actions.payload.data
      };
    case "CHANGE_STATUS_REJECTED":
      return {
        ...state,
        data: actions.payload.data
      };
    case "ORDER_POST":
      return {
        ...state,
        data: actions.payload.data
      };
    case "ORDER_POST_FULFILLED":
      return {
        ...state,
        data: undefined
      };
    case "ORDER_POST_REJECTED":
      return {
        ...state,
        data: undefined
      };
    default:
      return state;
  }
};

export default transactions;
