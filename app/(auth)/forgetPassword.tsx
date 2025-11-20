import CustomButton from "@/components/buttons/CustomButton";
import font from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const forgetPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.btnView}>
          <Text style={styles.heading}>Forgot Your Password</Text>
          <Text style={styles.subHeading}>
            A recovery mail will be sent you your account Loisbecket@gmail.com
          </Text>
        </View>

        <CustomButton title="Recover Password" style={styles.btn} />
      </View>
    </View>
  );
};

export default forgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    width: "90%",
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 32,
    color: Colors.light.text,
    fontFamily: font.bold,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 12,
    color: Colors.light.text,
    fontFamily: font.medium,
    textAlign: "center",
  },
  btn: {
    width: "100%",
  },
});
