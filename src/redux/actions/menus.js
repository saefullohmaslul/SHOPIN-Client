import { API_HOST } from "react-native-dotenv";
import axios from "axios";

export const menusGet = () => {
  return {
    type: "MENUS_GET",
    payload: axios.get(`${API_HOST}/api/v1/menu`)
  };
};
