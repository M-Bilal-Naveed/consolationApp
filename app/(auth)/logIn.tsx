import Input from "@/components/input";
import React from "react";
import { StyleSheet, View } from "react-native";

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Input placeholdertext="Email" type="email-address" />
    </View>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
});
