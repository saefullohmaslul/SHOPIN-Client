import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { primaryColor } from "../../api/constant";
import Icons from "react-native-vector-icons/FontAwesome5";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("SplashTable");
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={primaryColor} barStyle={"light-content"} />
        <View style={styles.iconContainer}>
          <Icons name={"shopware"} size={130} style={styles.icon} />
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
    fontSize: 22,
    textTransform: "uppercase",
    letterSpacing: 3,
    marginTop: 20,
    fontWeight: "bold"
  }
});
