import React, { Component } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements";

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
      <View>
        <Text> SILAKAN KE KASIR </Text>
        <Text> {this.state.tableNumber} </Text>
        <Button
          title={"Ke Home"}
          onPress={() => this.props.navigation.replace("HomeIndex")}
        />
      </View>
    );
  }
}
