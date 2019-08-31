import axios from "axios";
import { API_HOST } from "react-native-dotenv";

export const postTableNumber = async number => {
  const data = {
    tableNumber: number
  };

  const transactionId = await axios.post(
    `${API_HOST}/api/v1/transaction`,
    data
  );

  return transactionId;
};
