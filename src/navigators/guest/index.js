import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "react-navigation";

import { primaryColor } from "../../api/constant";
import HomeNavigator from "./HomeNavigator";
import orderList from "../../components/order/orderList";
import transactionList from "../../components/transaction/transactionList";

const GuestNavigators = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"home"} size={25} color={tintColor} />
        )
      }
    },
    Order: {
      screen: orderList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"cart"} size={25} color={tintColor} />
        )
      }
    },
    Transaction: {
      screen: transactionList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"account"} size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: primaryColor,
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default GuestNavigators;
