import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import { convertIDR } from "../../utils/helper";
import { redColor, textColor } from "../../api/constant";
import { Text, Card } from "react-native-elements";

const { width } = Dimensions.get("screen");

const ProductCard = ({ item, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.7} onPress={onPress ? onPress : null}>
      <Card
        image={{ uri: item.uri }}
        containerStyle={{ marginHorizontal: 0, borderWidth: 0 }}
      >
        <Text h1 h1Style={styles.h1} numberOfLines={2}>
          {item.name}
        </Text>
        <Text h2 h2Style={styles.h2} style={styles.price}>
          Rp {convertIDR(item.price)}
        </Text>
      </Card>
    </TouchableOpacity>
  </View>
);

export default ProductCard;

const styles = StyleSheet.create({
  container: { flex: 0.5, marginHorizontal: 3, maxWidth: (width - 20) / 2 },
  image: { height: 150, flex: 1 },
  price: { color: redColor },
  h1: { fontSize: 16, color: textColor },
  h2: { fontSize: 15, color: redColor, fontWeight: "500" }
});
