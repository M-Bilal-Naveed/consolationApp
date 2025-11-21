import fonts from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface CustomerProps {
  name: string;
  country: string;
  languages: string;
  price: number;
  image: any;
}

const Customer = ({
  name,
  country,
  languages,
  price,
  image,
}: CustomerProps) => {
  return (
    <View style={styles.card}>
      {/* Top section: Image + Details */}
      <View style={styles.topSection}>
        <Image source={image} style={styles.avatar} />

        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Country: </Text>
            <Text style={styles.value}>{country}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Spoken Languages: </Text>
            <Text style={styles.value}>{languages}</Text>
          </View>
        </View>
      </View>

      {/* Bottom section: Description + Price */}
      <View style={styles.bottomSection}>
        <Text style={styles.description}>
          Lorem Ipsum is the dummy language of all the time just to show
          content...
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

export default Customer;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
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
  bottomSection: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: Colors.light.Label,
    marginBottom: 5,
    width: "70%",
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: Colors.light.text,
    top: 30,
  },
});
