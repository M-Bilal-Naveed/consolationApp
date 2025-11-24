import fonts from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../buttons/CustomButton";

interface ViewProfileProps {
  image: any;
  flag: any;
  name: string;
  country?: string;
}

const ViewProfile = ({ image, name, flag }: ViewProfileProps) => {
  return (
    <View style={styles.container}>
      {/* Top section */}
      <View style={styles.topSection}>
        <Image source={image} style={styles.avatar} />

        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Country: </Text>
            <Image source={flag} style={styles.flag} />
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonWrapper}>
        <CustomButton title="Book Now" style={styles.bookBtn} />
        <CustomButton title="Chat Now" style={styles.chatBtn} />
      </View>
    </View>
  );
};

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    borderRadius: 14,
    backgroundColor: Colors.light.cardBackground,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 18,
  },

  details: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontFamily: fonts.regular,
    color: Colors.light.text,
    marginBottom: 6,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontSize: 15,
    color: Colors.light.text,
  },

  flag: {
    width: 26,
    height: 26,
    resizeMode: "contain",
    marginLeft: 5,
  },

  buttonWrapper: {
    marginTop: 10,
    gap: 14,
  },

  bookBtn: {
    backgroundColor: Colors.light.AuthText,
    paddingVertical: 14,
  },

  chatBtn: {
    backgroundColor: Colors.dark.AuthText,
    borderColor: Colors.light.text,
    borderWidth: 0.6,
    paddingVertical: 14,
  },
});
