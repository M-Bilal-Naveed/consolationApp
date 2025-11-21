import font from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import AuthLayout from "./authLayout";

const forgetPassword = () => {
  return (
    <AuthLayout  type="Default" ButtonType={false}>
        {/* <View style={styles.container}>
          <View style={styles.view}> 
            <View style={styles.btnView}>
              <Text style={styles.heading}>Forgot Your Password</Text>
              <Text style={styles.subHeading}>
                A recovery mail will be sent you your account
                Loisbecket@gmail.com
              </Text>
            </View>

            <CustomButton title="Recover Password" style={styles.btn} />
          </View>
        </View> */}
        <View style={{flex:1,backgroundColor:"pink"}}>

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
    backgroundColor:"pinks"
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
  subHeading: {
    fontSize: 12,
    color: Colors.light.shadow,
    fontFamily: font.medium,
    textAlign: "center",
  },
  btn: {
    width: "100%",
  },
});
