import images from "@/constants/images";
import Colors from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.light.text}
          style={styles.input}
        />
        <Image source={images.search} style={styles.icon} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },

  searchbar: {
    marginVertical: 20,
    position: "relative",
  },

  input: {
    borderWidth: 1,
    borderColor: Colors.light.AuthText,
    backgroundColor: Colors.light.AuthText,
    height: 50,
    borderRadius: 10,
    paddingLeft: 45,
    fontSize: 16,
    color: Colors.light.text,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    left: 15,
    top: 15,
  },
});
