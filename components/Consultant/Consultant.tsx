import Customer from "@/components/Customer";
import { customers } from "@/constants/data";
import font from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchBar from "../inputs/searchbar";

const Consultant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back, Danish</Text>

      <SearchBar />

      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Customer
            name={item.name}
            country={item.country}
            languages={item.languages}
            price={item.price}
            image={item.image}
          />
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Consultant;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    color: Colors.light.text,
    fontFamily: font.semiBold,
    marginBottom: 20,
  },
  allCatehory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  Popular: {
    fontSize: 20,
    fontFamily: font.medium,
    color: Colors.light.text,
  },
  ViewButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  BtnText: {
    color: Colors.light.redishButton,
    marginTop: 7,
  },
});
