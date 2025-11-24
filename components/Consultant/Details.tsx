import { LanguagesData } from "@/constants/data";
import fonts from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LanguageButton from "../buttons/LanguageButton";

const Details = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Consultant Details</Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Fusce tempor sed et cursus
          justo. Ac mauris quam aliquam aenean euismod cursus vitae. Non mauris
          at parturient sagittis arcu elit vitae in magna.
        </Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Languages</Text>
      </View>
      <View style={styles.line}></View>

      <View style={styles.buttonRow}>
        {LanguagesData.map((element, index) => (
          <LanguageButton
            key={index}
            title={element.title}
            style={element.languageButton}
          />
        ))}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 14,
    padding: 18,
    marginTop: 18,
    backgroundColor: Colors.light.cardBackground,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  title: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    marginBottom: 2,
    color: Colors.light.text,
  },

  description: {
    fontSize: 14,
    color: Colors.light.silver,
    fontFamily: fonts.medium,
    lineHeight: 20,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    marginBottom: 5,
    color: Colors.light.text,
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  languageButton: {
    width: "100%",
  },
  line: {
    width: "17%",
    backgroundColor: Colors.dark.redishButton,
    height: 1,
    marginBottom: 12,
  },
});
