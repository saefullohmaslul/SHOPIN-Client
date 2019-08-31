import React, { Component } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, Text } from "react-native-elements";
import { primaryColor, redColor } from "../../api/constant";

export default class transactionCaseer extends Component {
  state = {
    tableNumber: undefined
  };

  async componentDidMount() {
    const tableNumber = await AsyncStorage.getItem("@tableNumber");
    this.setState({
      tableNumber
    });
  }

  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            h1
            h1Style={{
              fontSize: 20,
              marginHorizontal: 20,
              textAlign: "center",
              color: primaryColor
            }}
          >
            PLEASE BRING THE IPAD TO THE CASHIER TO PROCEED WITH THE PAYMENT
          </Text>
          <Text
            style={{ marginTop: 20 }}
            h1
            h1Style={{ fontSize: 40, color: redColor }}
          >
            #{this.state.tableNumber}
          </Text>
        </View>
        <Button
          title={"Goto Home"}
          onPress={() => this.props.navigation.replace("HomeIndex")}
          buttonStyle={{ backgroundColor: primaryColor }}
          containerStyle={{ marginHorizontal: 20, marginTop: 20 }}
        />
      </View>
    );
  }
}