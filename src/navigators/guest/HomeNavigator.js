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
      screen: orderList
    },
    Transaction: {
      screen: transactionList
    },
    Caseer: {
      screen: transactionCaseer
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: primaryColor
    }
  }
);

export default HomeNavigator;
