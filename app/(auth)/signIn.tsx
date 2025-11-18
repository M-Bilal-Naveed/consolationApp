import React from "react";
import { StyleSheet, View } from "react-native";
import Color from '@/constants/theme';
import CustomButton from "@/components/buttons/CustomButton";
import AuthButton from "@/components/buttons/AuthButton";

const LogIn = () => {
  return (
    <View style={styles.container}>
      <CustomButton title="Hello"/>
    </View>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: Color.light.background
  },
});
