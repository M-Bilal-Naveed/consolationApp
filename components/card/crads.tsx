import Colors from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardsProps {
  image: number | { uri: string };
  title: string;
  bool: boolean;
  onPress?: () => void;
}

const Cards = ({ image, title, bool, onPress }: CardsProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: bool
              ? Colors.light.redishButton
              : Colors.light.cardBackground,
            borderColor: bool
              ? Colors.light.reddishorange
              : Colors.light.Darkgray,
          },
        ]}
      >
        <Image source={image} style={styles.image} />
        <Text style={styles.label}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 105,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },

  image: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },

  label: {
    fontSize: 14,
    marginTop: 8,
    color: Colors.light.text,
  },
});
