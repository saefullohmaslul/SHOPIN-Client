import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { primaryColor } from "../../api/constant";
import Icons from "react-native-vector-icons/Ionicons";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("SplashTable");
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={primaryColor} barStyle={"light-content"} />
        <View style={styles.iconContainer}>
          <Icons name={"md-rocket"} size={130} style={styles.icon} />
          <Text style={styles.brand}>ShopIn</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: "#fff"
  },
  brand: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 3
  }
});
