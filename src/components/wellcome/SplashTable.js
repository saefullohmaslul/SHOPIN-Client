import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { primaryColor, textColor } from "../../api/constant";
import { Input, Button } from "react-native-elements";
import { postTableNumber } from "../../api/explore";

export default class SplashTable extends Component {
  state = {
    tableNumber: undefined,
    validation: undefined,
    isLoading: false
  };
  postTransaction = async tableNumber => {
    this.setState({ isLoading: true });
    try {
      const response = await postTableNumber(tableNumber);
      const data = response.data;
      await AsyncStorage.setItem("@transactionId", data._id.toString());
      await AsyncStorage.setItem("@tableNumber", data.tableNumber.toString());
      this.props.navigation.navigate("Home");
    } catch (err) {
      this.setState({ isLoading: false });
      alert("Something wrong, please try again...");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={primaryColor} barStyle={"light-content"} />
        <View style={styles.iconContainer}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../assets/table-number.png")}
              style={{
                height: 200,
                width: 200,
                marginBottom: 15
              }}
            />
          </View>
          <Input
            placeholder={"Masukkan nomor meja"}
            inputStyle={{
              height: 10,
              fontSize: 14,
              color: textColor,
              backgroundColor: "#fff"
            }}
            inputContainerStyle={{
              borderBottomWidth: 0.5,
              marginBottom: 10
            }}
            errorStyle={{ color: "red" }}
            returnKeyType="go"
            onSubmitEditing={() => this.postTransaction(this.state.tableNumber)}
            keyboardType="number-pad"
            onChangeText={text => this.setState({ tableNumber: text })}
          />
          {this.state.isLoading ? (
            <ActivityIndicator size={"large"} color={primaryColor} />
          ) : (
            <Button
              title={"SUBMIT"}
              buttonStyle={{ backgroundColor: primaryColor }}
              containerStyle={{ marginHorizontal: 10 }}
              onPress={() => this.postTransaction(this.state.tableNumber)}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
