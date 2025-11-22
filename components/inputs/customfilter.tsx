import images from "@/constants/images";
import Colors from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
const CustomFilter = () => {
  return (
    <View style={style.filter}>
      <Image source={images.filter} style={style.image} />
    </View>
  );
};

export default CustomFilter;
const style = StyleSheet.create({
  filter: {
    width: 56,
    height: 45,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.light.AuthText,
    borderWidth: 0.5 ,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: 18,
    height: 18,
  },
});
