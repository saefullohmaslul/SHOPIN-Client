import React, { Component } from "react";
import { Dimensions, StyleSheet, ScrollView, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { primaryColor, redColor, textColor } from "../../api/constant";
import { Container } from "../apps/Container";
import { convertIDR } from "../../utils/helper";
import { ListItem, Text } from "react-native-elements";
import Button from "../apps/Button";

const { height, width } = Dimensions.get("screen");

export default class ProductDetail extends Component {
  state = {
    images: [
      "https://scstylecaster.files.wordpress.com/2018/11/old-school-products.jpg",
      "https://media.allure.com/photos/5d124cc185f3b16beafcb9f3/16:9/w_1280%2Cc_limit/0625_cleanbty_lede.jpg"
    ]
  };

  render() {
    return (
      <View>
        <ScrollView
          style={{ marginBottom: 50 }}
          showsVerticalScrollIndicator={false}
        >
          <SliderBox
            sliderBoxHeight={0.52 * height}
            dotStyle={{ margin: 0, padding: 0 }}
            images={this.state.images}
            dotColor={primaryColor}
            circleLoop
          />
          <Container>
            <Text h1 h1Style={[styles.h1, { color: textColor }]}>
              Produk wanita dengan kesempurnaan yang terbaik
            </Text>
          </Container>
          <Container>
            <Text h1 h1Style={[styles.h1, { color: redColor }]}>
              Rp {convertIDR(25000)}
            </Text>
          </Container>
          <ListItem
            title={"Informasi Produk"}
            titleStyle={[styles.h2, { fontWeight: "500" }]}
            containerStyle={[styles.listItem, { marginTop: 10 }]}
          />
          <ListItem
            title={"Berat"}
            titleStyle={styles.listTitle}
            containerStyle={styles.listItem}
          />
          <ListItem
            title={"Kondisi"}
            titleStyle={styles.listTitle}
            containerStyle={{ paddingVertical: 0 }}
          />
          <ListItem
            title={"Pemesanan Minimal"}
            titleStyle={styles.listTitle}
            containerStyle={styles.listItem}
          />
          <ListItem
            title={"Deskripsi Produk"}
            titleStyle={[styles.h2, { fontWeight: "500" }]}
            containerStyle={[styles.listItem, { marginTop: 10 }]}
          />
          <View style={{ marginHorizontal: 16, marginBottom: 20 }}>
            <Text>
              Ini adalah deskripsi produk, deskripsi produk adalah tempat untuk
              mendeskripsikan produk
            </Text>
          </View>
        </ScrollView>
        <View>
          <View style={styles.shopButton}>
            <Button title="Tambahkan Keranjang" style={{ borderRadius: 30 }} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20
  },
  h2: {
    fontSize: 17,
    color: textColor
  },
  listItem: {
    paddingVertical: 5
  },
  listTitle: {
    fontSize: 15
  },
  shopButton: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    flex: 1,
    width: width,
    borderColor: "#ecf0f1"
  }
});
