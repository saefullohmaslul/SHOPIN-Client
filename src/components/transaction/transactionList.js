import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Card, Image, Text, Button } from "react-native-elements";

import { convertIDR } from "../../utils/helper";
import {
  getTransaction,
  changeStatus,
  postTransaction
} from "../../redux/actions/transactions";
import { redColor, primaryColor } from "../../api/constant";
import { timeUpdate } from "../../redux/actions/time";

const { width } = Dimensions.get("screen");

class transactionList extends Component {
  state = {
    total: 0,
    timer: setInterval(() => {
      this.props.dispatch(timeUpdate());
    }, 1000),
    transactions: undefined,
    tableNumber: undefined
  };
  async componentDidMount() {
    const transactionId = await AsyncStorage.getItem("@transactionId");
    const tableNumber = await AsyncStorage.getItem("@tableNumber");
    this.setState({ tableNumber });
    await this.props.dispatch(getTransaction(transactionId));
    const data = {
      status: true
    };

    setTimeout(() => {
      this.props.dispatch(changeStatus(data, transactionId));
    }, 5 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  handleCheckout = async () => {
    try {
      this.props.transactions.data.orders.map(order => {
        if (!order.status) {
          const error = new Error("Waiting");
          error.data = "Mohon menunggu sejenak, pesanan sedang disiapkan ^-^";
          throw error;
        }
      });
      const data = {
        subTotal: this.props.transactions.data.subTotal,
        discount: this.props.transactions.data.discount,
        serviceCharge: this.props.transactions.data.serviceCharge,
        tax: this.props.transactions.data.tax,
        totalPrice: this.props.transactions.data.totalPrice,
        finishedTime: `${
          this.props.time.jam < 10
            ? `0${this.props.time.jam}`
            : this.props.time.jam
        }:${
          this.props.time.menit < 10
            ? `0${this.props.time.menit}`
            : this.props.time.menit
        }:${
          this.props.time.detik < 10
            ? `0${this.props.time.detik}`
            : this.props.time.detik
        }`,
        isPaid: false
      };
      const transactionId = await AsyncStorage.getItem("@transactionId");
      await this.props.dispatch(postTransaction(data, transactionId));
      this.props.navigation.replace("Caseer");
    } catch (err) {
      alert(err.data);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.transactions !== this.props.transactions) {
      this.setState({
        transactions: nextProps.transactions.data
      });
    }
  }

  render() {
    const { time, transactions } = this.props;
    if (transactions.data) {
      return (
        <View style={styles.container}>
          <StatusBar
            backgroundColor={primaryColor}
            barStyle={"light-content"}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.transactions.orders}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={() => (
              <View style={{ marginBottom: 245 }}></View>
            )}
            renderItem={({ item, index }) => (
              <Card
                key={index}
                containerStyle={{ marginBottom: 15, marginTop: 0 }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{
                      uri: item.menuId.uri
                    }}
                    style={{ width: 100, height: 100 }}
                  />

                  <View style={{ marginLeft: 10 }}>
                    <Text h1 h1Style={{ fontSize: 16 }} style={{ flex: 1 }}>
                      {item.menuId.name}
                    </Text>
                    <Text>Quantity: {item.qty}</Text>
                    <Text>
                      {`Harga Satuan: Rp ${convertIDR(item.menuId.price)}`}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text>Status: </Text>
                      <Text style={item.status ? styles.sent : styles.waiting}>
                        {item.status ? "SENT" : "WAITING"}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            )}
          />
          <View style={styles.ordersContainer}>
            <View style={styles.ordersHeader}>
              <Text style={styles.ordersTime}>
                {time.jam < 10 ? `0${time.jam}` : time.jam}:
                {time.menit < 10 ? `0${time.menit}` : time.menit}:
                {time.detik < 10 ? `0${time.detik}` : time.detik}
              </Text>
              <Text style={styles.ordersTableNumber}>
                No. Meja: {this.state.tableNumber}
              </Text>
            </View>
            <View style={styles.orderListContainer}>
              <View style={styles.orderRowContainer}>
                <Text style={styles.orderTitle}>Sub Total </Text>
                <Text>
                  {transactions.data.subTotal
                    ? convertIDR(transactions.data.subTotal)
                    : 0}
                </Text>
              </View>
              <View style={styles.orderRowContainer}>
                <Text style={styles.orderTitle}>Discount</Text>
                <Text>
                  {transactions.data.discount
                    ? convertIDR(transactions.data.discount)
                    : 0}
                </Text>
              </View>
              <View style={styles.orderRowContainer}>
                <Text style={styles.orderTitle}>Service Charge</Text>
                <Text>
                  {transactions.data.serviceCharge
                    ? convertIDR(transactions.data.serviceCharge)
                    : 0}
                </Text>
              </View>
              <View style={styles.orderRowContainer}>
                <Text style={styles.orderTitle}>Tax</Text>
                <Text>
                  {transactions.data.tax
                    ? convertIDR(transactions.data.tax)
                    : 0}
                </Text>
              </View>
              <View style={styles.orderRowContainer}>
                <Text style={styles.orderTitle}>Total</Text>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {transactions.data.totalPrice
                    ? convertIDR(transactions.data.totalPrice)
                    : 0}
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="CALL BILL"
                containerStyle={{ flex: 1 }}
                style={{ borderRadius: 30 }}
                buttonStyle={{ backgroundColor: primaryColor, borderRadius: 0 }}
                onPress={this.handleCheckout}
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
  container: { flex: 1 },
  waiting: { color: redColor },
  sent: { color: "#27ae60" },
  ordersContainer: { position: "absolute", bottom: 0, flex: 1, width: width },
  ordersHeader: {
    backgroundColor: "#e2e8ea",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  ordersTime: { paddingRight: 15, color: "#7f8c8d", flex: 1 },
  ordersTableNumber: { color: "#7f8c8d", alignSelf: "flex-end" },
  orderListContainer: { padding: 10, backgroundColor: "#fff" },
  orderRowContainer: { flexDirection: "row" },
  orderTitle: { marginBottom: 10, flex: 1 },
  buttonContainer: { flexDirection: "row", alignItems: "center" }
});
