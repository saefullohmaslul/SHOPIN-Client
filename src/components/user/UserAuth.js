import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";

import { primaryColor, secondaryColor } from "../../api/constant";

export default class UserAuth extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/signup.png")}
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />
        <View style={styles.loginSignup}>
          <Text style={{ textAlign: "center" }}>
            Kamu belum login, yuk login untuk mendapatkan beragam fitur lainnya
          </Text>
        </View>
        <Button
          title="LOGIN"
          buttonStyle={{ backgroundColor: secondaryColor }}
          onPress={() => navigate("Login")}
        />
        <View style={styles.loginSignup}>
          <Text>Atau</Text>
        </View>
        <Button
          title="SIGNUP"
          buttonStyle={{ backgroundColor: primaryColor }}
          onPress={() => navigate("Signup")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  loginSignup: {
    alignItems: "center",
    marginVertical: 10
  }
});
