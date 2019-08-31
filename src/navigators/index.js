import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "../components/wellcome/SplashScreen";
import GuestNavigators from "./guest";
import SplashTable from "../components/wellcome/SplashTable";
import HomeNavigator from "./guest/HomeNavigator";

const AppNavigators = createSwitchNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  SplashTable: {
    screen: SplashTable
  },
  Guest: {
    screen: HomeNavigator
  }
});

export default createAppContainer(AppNavigators);
