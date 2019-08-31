import React from "react";
import { View } from "react-native";

export const Container = ({ style, children }) => (
  <View style={{ marginHorizontal: 15, marginTop: 10, ...style }}>
    {children}
  </View>
);
