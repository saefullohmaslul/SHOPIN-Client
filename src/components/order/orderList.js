import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Card, Button, Text, Image } from "react-native-elements";
import { connect } from "react-redux";

import { primaryColor } from "../../api/constant";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { changeQty, postOrder } from "../../redux/actions/orders";
import { convertIDR } from "../../utils/helper";
import AsyncStorage from "@react-native-community/async-storage";

class orderList extends Component {
  state = {
    qty: 0
  };

  plusQty = item => {
    let orders = this.props.orders;
    const menuIndex = orders.data.findIndex(order => {
      return order.menu._id == item.menu._id;
    });

    orders.data[menuIndex].qty += 1;

    this.props.dispatch(changeQty(orders.data));
  };

  minusQty = item => {
    let orders = this.props.orders;
    const menuIndex = orders.data.findIndex(order => {
      return order.menu._id == item.menu._id;
    });
    if (orders.data[menuIndex].qty > 1) {
      orders.data[menuIndex].qty -= 1;
      this.props.dispatch(changeQty(orders.data));
    }
  };

  deleteOrder = item => {
    let orders = this.props.orders;
    const menuIndex = orders.data.findIndex(order => {
      return order.menu._id == item.menu._id;
    });

    orders.data.splice(menuIndex, 1);

    this.props.dispatch(changeQty(orders.data));
  };

  handleOrder = async () => {
    let data = [];
    const transactionId = await AsyncStorage.getItem("@transactionId");
    this.props.orders.data.map(order => {
      const dataItem = {
        menuId: order.menu._id,
        transactionId,
        qty: order.qty,
        status: "false"
      };
      data.push(dataItem);
    });

    await this.props.dispatch(postOrder(data));
    this.props.navigation.replace("Transaction");
  };

  render() {
    return this.props.orders.data ? (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {this.props.orders.data.map(order => {
            return (
              <Card key={order.menu._id}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{
                      uri: order.menu.uri
                    }}
                    style={{ width: 100, height: 100 }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text h1 h1Style={{ fontSize: 16 }} style={{ flex: 1 }}>
                      {order.menu.name}
                    </Text>
                    <Text>
                      {`Harga Satuan: Rp ${convertIDR(order.menu.price)}`}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Button
                        icon={<Icon name="minus" size={15} color="white" />}
                        onPress={() => this.minusQty(order)}
                        buttonStyle={{ backgroundColor: primaryColor }}
                      />
                      <Text
                        style={{ alignSelf: "center", paddingHorizontal: 10 }}
                      >
                        {order.qty}
                      </Text>
                      <Button
                        icon={<Icon name="plus" size={15} color="white" />}
                        onPress={() => this.plusQty(order)}
                        buttonStyle={{ backgroundColor: primaryColor }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Button
                    icon={
                      <Icon name="trash-can-outline" size={15} color="white" />
                    }
                    onPress={() => this.deleteOrder(order)}
                    buttonStyle={{ backgroundColor: primaryColor }}
                  />
                </View>
              </Card>
            );
          })}
        </ScrollView>
        <View>
          <Button
            title={"Order"}
            onPress={this.handleOrder}
            buttonStyle={{ backgroundColor: primaryColor }}
          />
        </View>
      </View>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    menus: state.menus
  };
};

export default connect(mapStateToProps)(orderList);
