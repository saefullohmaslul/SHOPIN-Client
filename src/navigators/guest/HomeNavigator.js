import { createStackNavigator } from "react-navigation";
import HomeScreen from "../../components/home/HomeScreen";
import { primaryColor } from "../../api/constant";
import orderList from "../../components/order/orderList";
import transactionList from "../../components/transaction/transactionList";
import transactionCaseer from "../../components/transaction/transactionCaseer";

const HomeNavigator = createStackNavigator(
  {
    HomeIndex: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomColor: "transparent"
        },
        title: "SHOPIN"
      }
    },
    Order: {
      screen: orderList,
      navigationOptions: {
        headerStyle: {
          elevation: 0,
          borderBottomColor: "transparent"
        },
        title: "ORDER"
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
