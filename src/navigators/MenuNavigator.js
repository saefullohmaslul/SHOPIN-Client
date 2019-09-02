import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import Drink from "../components/home/Drink";

import Entypo from "react-native-vector-icons/Entypo";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { primaryColor } from "../api/constant";
import Food from "../components/home/Food";

const MenuNavigator = createMaterialTopTabNavigator(
  {
    Minuman: {
      screen: Drink,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="drink" color={tintColor} size={20} />
        )
      }
    },
    Makanan: {
      screen: Food,
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
        backgroundColor: "#e2e8ea"
      },
      labelStyle: {
        fontSize: 10
      }
    }
  }
);

export default MenuNavigator;
