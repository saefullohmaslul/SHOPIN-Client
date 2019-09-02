import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import HomeScreen from "../components/home/HomeScreen";

import Entypo from "react-native-vector-icons/Entypo";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { primaryColor, textColor } from "../api/constant";

const MenuNavigator = createMaterialTopTabNavigator(
  {
    Minuman: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="drink" color={tintColor} size={20} />
        )
      }
    },
    Makanan: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Material name="food" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    defaultNavigationOptions: {},
    tabBarOptions: {
      style: {
        backgroundColor: primaryColor
      },
      showIcon: true,
      indicatorStyle: {
        backgroundColor: "#fff"
      },
      labelStyle: {
        fontSize: 10
      }
    }
  }
);

export default MenuNavigator;
