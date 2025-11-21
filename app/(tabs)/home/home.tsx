import Cards from "@/components/card/crads";
import Customer from "@/components/Customer";
import SearchBar from "@/components/inputs/searchbar";
import font from "@/constants/fonts";
import images from "@/constants/images";
import Colors from "@/constants/theme";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back, Danish</Text>

      <SearchBar />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.row}>
          <Cards
            image={images.Candidate}
            title="Candidate"
            bool={selected === "Candidate"}
            onPress={() => setSelected("Candidate")}
          />

          <Cards
            image={images.Consultant}
            title="Consultant"
            bool={selected === "Consultant"}
            onPress={() => setSelected("Consultant")}
          />

          <Cards
            image={images.Lawyer}
            title="Lawyer"
            bool={selected === "Lawyer"}
            onPress={() => setSelected("Lawyer")}
          />
        </View>
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
      <View>
        <Customer />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  title: {
    fontSize: 24,
    color: Colors.light.text,
    fontFamily: font.semiBold,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  Popular: {
    fontSize: 20,
    fontFamily: font.medium,
    color: Colors.light.text,
  },
  BtnText: {
    color: Colors.light.redishButton,
    marginTop: 7,
  },
  allCatehory: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ViewButton: {
    flexDirection: "row",
    gap: 10,
  },
});
