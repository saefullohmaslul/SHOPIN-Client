import { API_HOST } from "react-native-dotenv";
import axios from "axios";

export const getTransaction = transactionId => {
  return {
    type: "ORDER_GET",
    payload: axios.get(`${API_HOST}/api/v1/order/${transactionId}`)
  };
};

export const changeStatus = (data, transactionId) => {
  return {
    type: "CHANGE_STATUS",
    payload: axios.patch(`${API_HOST}/api/v1/order/${transactionId}`, data)
  };
};

export const postTransaction = (data, transactionId) => {
  return {
    type: "ORDER_POST",
    payload: axios.patch(
      `${API_HOST}/api/v1/transaction/${transactionId}`,
      data
    )
  };
};
