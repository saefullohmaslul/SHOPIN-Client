import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button, Text } from "react-native-elements";
import { primaryColor, redColor } from "../../api/constant";
import { resetTimer } from "../../redux/actions/time";
import { connect } from "react-redux";
import Barcode from "react-native-barcode-builder";

class transactionCaseer extends Component {
  state = {
    tableNumber: undefined,
    transactionId: undefined
  };

  async componentDidMount() {
    const tableNumber = await AsyncStorage.getItem("@tableNumber");
    const transactionId = await AsyncStorage.getItem("@transactionId");
    this.setState({
      tableNumber,
      transactionId: transactionId.toString()
    });
  }

  goHome = () => {
    this.props.navigation.navigate("SplashTable");
    this.props.resetTimer();
  };

  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <StatusBar backgroundColor={primaryColor} barStyle={"light-content"} />
        <View style={{ alignItems: "center" }}>
          <Text
            h1
            h1Style={{
              fontSize: 20,
              marginHorizontal: 20,
              textAlign: "center",
              color: primaryColor,
              marginBottom: 20
            }}
          >
            PLEASE BRING THE PHONE TO THE CASHIER TO PROCEED WITH THE PAYMENT
          </Text>
          {this.state.transactionId ? (
            <Barcode
              value={this.state.transactionId}
              format="CODE128"
              width={2}
              text={this.state.transactionId}
            />
          ) : null}
        </View>
        <Button
          title={"Back to Homepage"}
          onPress={this.goHome}
          buttonStyle={{ backgroundColor: primaryColor }}
          containerStyle={{ marginHorizontal: 20, marginTop: 30 }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetTimer: () => dispatch(resetTimer())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(transactionCaseer);
