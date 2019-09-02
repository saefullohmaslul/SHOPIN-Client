import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Card, Image, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { convertIDR } from "../../utils/helper";
import {
  getTransaction,
  changeStatus,
  postTransaction
} from "../../redux/actions/transactions";
import { redColor, textColor, primaryColor } from "../../api/constant";

const { height, width } = Dimensions.get("screen");

class transactionList extends Component {
  state = {
    total: 0
  };
  async componentDidMount() {
    const transactionId = await AsyncStorage.getItem("@transactionId");
    await this.props.dispatch(getTransaction(transactionId));
    const data = {
      status: true
    };

    setTimeout(() => {
      this.props.dispatch(changeStatus(data, transactionId));
    }, 5 * 1000);
  }

  handleCheckout = async () => {
    try {
      this.props.transactions.data.orders.map(order => {
        if (!order.status) {
          throw err;
        }
      });
      const data = {
        subTotal: this.props.transactions.data.subTotal,
        discount: this.props.transactions.data.discount,
        serviceCharge: this.props.transactions.data.serviceCharge,
        tax: this.props.transactions.data.tax,
        totalPrice: this.props.transactions.data.totalPrice,
        finishedTime: `${this.props.time.jam}:${this.props.time.menit}:${this.props.time.detik}`,
        isPaid: false
      };
      const transactionId = await AsyncStorage.getItem("@transactionId");
      const response = await this.props.dispatch(
        postTransaction(data, transactionId)
      );
      this.props.navigation.replace("Caseer");
    } catch (err) {
      alert("tunggu waiting list");
    }
  };

  render() {
    if (this.props.transactions.data) {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView style={{ marginBottom: 45 }}>
            {this.props.transactions.data.orders.map((order, index) => {
              return (
                <Card
                  key={index}
                  containerStyle={{ marginBottom: 15, marginTop: 0 }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={{
                        uri: order.menuId.uri
                      }}
                      style={{ width: 100, height: 100 }}
                    />

                    <View style={{ marginLeft: 10 }}>
                      <Text h1 h1Style={{ fontSize: 16 }} style={{ flex: 1 }}>
                        {order.menuId.name}
                      </Text>
                      <Text>Quantity: {order.qty}</Text>
                      <Text>
                        {`Harga Satuan: Rp ${convertIDR(order.menuId.price)}`}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text>Status: </Text>
                        <Text
                          style={order.status ? styles.sent : styles.waiting}
                        >
                          {order.status ? "SENT" : "WAITING"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card>
              );
            })}
            <View style={{ backgroundColor: "#e2e8ea", padding: 18 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginBottom: 10, flex: 1 }}>Sub Total </Text>
                <Text>
                  {this.props.transactions.data.subTotal
                    ? convertIDR(this.props.transactions.data.subTotal)
                    : 0}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginBottom: 10, flex: 1 }}>Discount</Text>
                <Text>
                  {this.props.transactions.data.discount
                    ? convertIDR(this.props.transactions.data.discount)
                    : 0}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginBottom: 10, flex: 1 }}>
                  Service Charge
                </Text>
                <Text>
                  {this.props.transactions.data.serviceCharge
                    ? convertIDR(this.props.transactions.data.serviceCharge)
                    : 0}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginBottom: 10, flex: 1 }}>Tax</Text>
                <Text>
                  {this.props.transactions.data.tax
                    ? convertIDR(this.props.transactions.data.tax)
                    : 0}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginBottom: 10, flex: 1 }}>Total</Text>
                <Text>
                  {this.props.transactions.data.totalPrice
                    ? convertIDR(this.props.transactions.data.totalPrice)
                    : 0}
                </Text>
              </View>
            </View>
          </ScrollView>
          <View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                paddingVertical: 2.5,
                borderTopWidth: 1,
                flex: 1,
                width: width - 10,
                borderColor: "#ecf0f1",
                backgroundColor: "#ecf0f1",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ paddingHorizontal: 20 }}>
                {this.props.time.jam}:{this.props.time.menit}:
                {this.props.time.detik}
              </Text>
              <Button
                title="Order"
                containerStyle={{ flex: 1 }}
                style={{ borderRadius: 30 }}
                buttonStyle={{ backgroundColor: primaryColor }}
                onPress={() => this.handleCheckout()}
              />
            </View>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    time: state.time
  };
};

export default connect(mapStateToProps)(transactionList);

const styles = StyleSheet.create({
  waiting: {
    color: redColor
  },
  sent: {
    color: "#27ae60"
  }
});
