import { API_HOST } from "react-native-dotenv";
import axios from "axios";

export const orderAdd = data => {
  return {
    type: "ORDER_ADD",
    payload: data
  };
};

export const changeQty = data => {
  return {
    type: "CHANGE_QTY",
    payload: data
  };
};

export const postOrder = data => {
  return {
    type: "ORDER_POST",
    payload: axios.post(`${API_HOST}/api/v1/order`, data)
  };
};
