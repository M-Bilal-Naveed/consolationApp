import CustomButton from "@/components/buttons/CustomButton";
import font from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthLayout from "./authLayout";

const forgetPassword = () => {
  return (
    <AuthLayout type="Default" ButtonType={false}>
      {/* <View style={styles.container}>
          
        </View> */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.view}>
          <View style={styles.btnView}>
            <Text style={styles.heading}>Forgot Your Password</Text>
            <View style={styles.textView}>
              <Text style={styles.text}>
                A recovery mail will be sent you your account
              </Text>
              <Text style={styles.email}>Loisbecket@gmail.com</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <CustomButton title="Recover Password" style={styles.btn} />
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

export default forgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: Colors.light.background,
  },
  view: {
    width: "100%",
  },
  btnView: {},
  heading: {
    fontSize: 30,
    color: Colors.light.text,
    fontFamily: font.bold,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    color: Colors.light.Label,
    fontFamily: font.medium,
    textAlign: "center",
    // lineHeight: 20,
  },
  email: {
    fontSize: 12,
    color: Colors.light.Label,
    fontFamily: font.semiBold,
    textAlign: "center",
  },
  textView: {
    marginBottom: 20,
    marginVertical: 5,
  },
  btn: {
    width: "100%",
  },
  btnContainer: {
    marginVertical: 40,
  },
});
