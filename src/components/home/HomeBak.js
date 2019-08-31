import React, { Component } from "react";
import { FlatList, View, StatusBar } from "react-native";

import ProductCard from "../products/ProductCard";
import { primaryColor } from "../../api/constant";

export default class Home extends Component {
  state = {
    products: [
      {
        title: "Produk kecantikan dari putri mas",
        price: "125000",
        uri:
          "https://scstylecaster.files.wordpress.com/2018/11/old-school-products.jpg",
        id: 1
      },
      {
        title: "Produk untuk wanita yang terindah",
        price: "58500",
        uri:
          "https://media.allure.com/photos/5d124cc185f3b16beafcb9f3/16:9/w_1280%2Cc_limit/0625_cleanbty_lede.jpg",
        id: 2
      },
      {
        title: "Produk kecantikan super mewah",
        price: "342000",
        uri:
          "https://cdn0-production-images-kly.akamaized.net/im95HDeUhg2xDqFdEAFeYo6c268=/680x383/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2486994/original/047467600_1543332614-kelebihan-dan-kekurangan-produk-kecantikan-berukuran-mini.jpg",
        id: 3
      },
      {
        title: "Produk wanita dengan kesempurnaan yang terbaik",
        price: "230000",
        uri:
          "https://www.harpersbazaar.co.id/lkgallery/teaser/Web-Makeup-resize_41_20180705143423PSfwdo.jpg",
        id: 4
      },
      {
        title: "Produk wanita dengan kesempurnaan yang terbaik",
        price: "230000",
        uri:
          "https://www.harpersbazaar.co.id/lkgallery/teaser/Web-Makeup-resize_41_20180705143423PSfwdo.jpg",
        id: 5
      }
    ]
  };

  render() {
    return (
      <View style={{ marginHorizontal: 5 }}>
        <StatusBar backgroundColor={primaryColor} />
        <FlatList
          data={this.state.products}
          numColumns={2}
          extraData={this.state}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => <View style={{ marginBottom: 20 }}></View>}
          renderItem={({ item }) => {
            return (
              <ProductCard
                item={item}
                onPress={() => this.props.navigation.navigate("ProductDetail")}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
