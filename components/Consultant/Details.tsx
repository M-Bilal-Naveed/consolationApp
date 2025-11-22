import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../buttons/CustomButton";

const Details = () => {
  return (
    <View style={styles.Container}>
      <View>
        <Text>Consultant Details</Text>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Fusce tempor sed et cursus
          justo. Ac mauris quam aliquam aenean euismod cursus vitae. Non mauris
          at parturient sagittis arcu elit vitae in magna.
        </Text>
      </View>
      <View>
        <Text>Language</Text>
      </View>
      <View>
        <CustomButton title="Urdu" style={styles.Button} />
        <CustomButton title="Hindi" style={styles.Button} />
        <CustomButton title="English" style={styles.Button} />
      </View>
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({
  Container: {
    width: "90%",
    height: "20%",
    borderRadius: 12,
    backgroundColor: Colors.light.cardBackground,
  },
  Button: {
    backgroundColor: Colors.dark.redishButton,
    width: "20%",
  },
});
