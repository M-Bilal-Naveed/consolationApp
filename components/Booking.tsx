import Colors from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "./buttons/CustomButton";

interface BookingProps {
  image: any;
  flag: any;
  name: string;
  country: string;
}

const Booking = ({ image, name, flag }: BookingProps) => {
  return (
    <View style={styles.Container}>
      <View style={styles.topSection}>
        <Image source={image} style={styles.avatar} />

        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Country: </Text>
            {/* <Text style={styles.value}>{country}</Text> */}
            <Image source={flag} style={styles.flag} />
          </View>
        </View>
      </View>
      <View>
        <CustomButton title="Book Now" style={styles.BookingButton} />
        <CustomButton title="Chat Now" style={styles.chatButton} />
      </View>
    </View>
  );
};

export default Booking;
const styles = StyleSheet.create({
  Container: {
    width: "90%",
    height: "20%",
    borderRadius: 12,
    backgroundColor: Colors.light.cardBackground,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: Colors.light.text,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  label: {
    fontWeight: "500",
    color: Colors.light.Label,
  },
  value: {
    color: Colors.light.text,
  },
  chatButton: {
    backgroundColor: Colors.dark.AuthText,
    borderColor: Colors.light.text,
    borderWidth: 0.5,
  },
  BookingButton: {
    backgroundColor: Colors.dark.redishButton,
  },
  flag: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
