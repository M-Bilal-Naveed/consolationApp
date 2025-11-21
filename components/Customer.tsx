import images from "@/constants/images"; // replace with your local image
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Customer = () => {
  return (
    <View style={styles.card}>
      {/* Top section: Image + Details */}
      <View style={styles.topSection}>
        <Image source={images.user} style={styles.avatar} />

        <View style={styles.details}>
          <Text style={styles.name}>John Doe</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Country: </Text>
            <Text style={styles.value}>Pakistan</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Spoken Languages: </Text>
            <Text style={styles.value}>Urdu, Hindi</Text>
          </View>
        </View>
      </View>

      {/* Bottom section: Description + Price */}
      <View style={styles.bottomSection}>
        <Text style={styles.description}>
          Lorem Ipsum is the dummy language of all the time just to show
          content...
        </Text>
        <Text style={styles.price}>$50</Text>
      </View>
    </View>
  );
};

export default Customer;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  label: {
    fontWeight: "500",
    color: "#555",
  },
  value: {
    color: "#333",
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF584C",
  },
});
