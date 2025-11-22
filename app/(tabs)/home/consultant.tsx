import ConsultantView from "@/components/Consultant/ConsultantView";
import CustomFilter from "@/components/inputs/customfilter";
import SearchBar from "@/components/inputs/searchbar";
import { customers } from "@/constants/data";
import font from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Consultant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultants</Text>
      <View style={styles.searchFilter}>
        <View style={{ width: "80%" }}>
          <SearchBar />
        </View>
        <View style={{ marginTop: 22 }}>
          <CustomFilter />
        </View>
      </View>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ConsultantView
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
  searchFilter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
