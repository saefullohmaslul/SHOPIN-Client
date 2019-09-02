import { createStackNavigator } from "react-navigation";
import { primaryColor } from "../api/constant";
import transactionList from "../components/transaction/transactionList";
import transactionCaseer from "../components/transaction/transactionCaseer";
import MenuNavigator from "./MenuNavigator";

const HomeNavigator = createStackNavigator(
  {
    HomeIndex: {
      screen: MenuNavigator,
      navigationOptions: {
        header: null
      }
    },
    Transaction: {
      screen: transactionList,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomColor: "transparent"
        },
        title: "VIEW BILL"
      }
    },
    Caseer: {
      screen: transactionCaseer,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomColor: "transparent"
        },
        title: "GOTO CASEER"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: primaryColor
    }
  }
);

export default HomeNavigator;
