import React from "react";
import { Provider } from "react-redux";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["ViewPagerAndroid"]);

import AppNavigations from "./src/navigators/index";
import store from "./src/redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigations />
    </Provider>
  );
};

export default App;
