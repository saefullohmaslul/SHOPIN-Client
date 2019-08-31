import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { primaryColor } from "../../api/constant";

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={[styles.buttonContainer, style]}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 165,
    paddingVertical: 13,
    backgroundColor: primaryColor,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff"
  }
});
