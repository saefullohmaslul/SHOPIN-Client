import { createStackNavigator } from "react-navigation";

import { primaryColor } from "../../api/constant";
import UserAuth from "../../components/user/UserAuth";
import UserLogin from "../../components/user/UserLogin";
import UserSignup from "../../components/user/UserSignup";

const AccountNavigator = createStackNavigator(
  {
    AccountIndex: {
      screen: UserAuth,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: UserLogin
    },
    Signup: {
      screen: UserSignup
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: primaryColor,
      headerTransparent: {
        position: "absolute",
        backgroundColor: "transparent",
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      },
      headerStyle: {
        backgroundColor: "transparent",
        elevation: 0
      }
    }
  }
);

AccountNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default AccountNavigator;
