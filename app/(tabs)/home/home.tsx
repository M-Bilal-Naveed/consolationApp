import Cards from "@/components/card/crads";
import Customer from "@/components/Customer";
import SearchBar from "@/components/inputs/searchbar";
import { customers } from "@/constants/data";
import font from "@/constants/fonts";
import images from "@/constants/images";
import Colors from "@/constants/theme";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const cardTitles = ["Candidate", "Consultant", "Lawyer"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back, Danish</Text>

      <SearchBar />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{
          paddingHorizontal: 20,
          alignItems: "center",
          marginVertical: 50,
        }}
      >
        {cardTitles.map((title, index) => (
          <View
            key={index}
            style={{ marginRight: index < cardTitles.length - 1 ? 20 : 0 }}
          >
            <Cards
              image={images[title as keyof typeof images]}
              title={title}
              bool={selected === title}
              onPress={() => setSelected(title)}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.allCatehory}>
        <Text style={styles.Popular}>Popular Consultants</Text>
        <TouchableOpacity style={styles.ViewButton}>
          <Text style={styles.BtnText}> View All </Text>
          <Image
            source={images.Arrow}
            style={{
              width: 22,
              height: 14,
              resizeMode: "contain",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
      </View>

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

export default Home;

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
