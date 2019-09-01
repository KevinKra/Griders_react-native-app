import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetails = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.imageStyle} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.details}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    maxWidth: 255
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 3,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  },
  details: {
    color: "grey",
    fontSize: 14
  }
});

export default ResultDetails;
