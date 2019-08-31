import React, { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { primaryColor, textColor } from "../../api/constant";

export default class UserLogin extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#fff" }}
        behavior="padding"
      >
        <View style={{ flex: 1, backgroundColor: primaryColor }}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 30
              }}
            >
              <Icon name={"login"} size={50} color={primaryColor} />
              <Text h1 h1Style={{ fontSize: 30, marginLeft: 10 }}>
                LOGIN
              </Text>
            </View>
            <Input
              placeholder={"Email"}
              inputStyle={{
                height: 10,
                fontSize: 14,
                color: textColor
              }}
              inputContainerStyle={{
                borderBottomWidth: 0.3,
                marginBottom: 10
              }}
              errorStyle={{ color: "red" }}
              returnKeyType="next"
              onSubmitEditing={() => this.password.focus()}
            />
            <Input
              placeholder={"Password"}
              inputStyle={{
                height: 10,
                fontSize: 14,
                color: textColor
              }}
              inputContainerStyle={{
                borderBottomWidth: 0.3,
                marginBottom: 10
              }}
              errorStyle={{ color: "red" }}
              returnKeyType="go"
              ref={input => (this.password = input)}
            />
            <Button
              title={"Login"}
              buttonStyle={{ backgroundColor: primaryColor }}
              containerStyle={{ marginHorizontal: 10 }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    borderTopRightRadius: 200,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 200,
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: primaryColor,
    height: 100,
    borderBottomLeftRadius: 100
  }
});
