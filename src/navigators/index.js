import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SplashScreen from "../components/wellcome/SplashScreen";
import SplashTable from "../components/wellcome/SplashTable";
import HomeNavigator from "./HomeNavigator";

const AppNavigators = createSwitchNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  SplashTable: {
    screen: SplashTable
  },
  Home: {
    screen: HomeNavigator
  }
});

export default createAppContainer(AppNavigators);
