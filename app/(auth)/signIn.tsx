import CustomButton from "@/components/buttons/CustomButton";

import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
import SocialButtons from "@/components/social-buttons";
import Colors from "@/constants/theme";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}> Sign in to your Account</Text>
        <Text style={styles.text}>Enter your email and password to log in</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.label}>Email</Text>
        <Input placeholdertext="Loisbecket@gmail.com" type="email-address" />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <PasswordInput placeholdertext="*******" type="password" />
      </View>
      <Text style={styles.ForgotPassword}>Forgot Password ?</Text>

      <View>
        <CustomButton title="Log In" style={styles.loginbutton} />
      </View>
      <View>
        <SocialButtons title="SignUp" />
      </View>

      {/* <View style={styles.linecontainer}>
        <View style={styles.line} />
        <Text style={styles.linetext}>or</Text>
        <View style={styles.line} />
      </View>
      <View>
        <AuthButton title="Continue With Google" image={images.Google} />
        <View style={{ marginBottom: 20 }} />
        <AuthButton title="Continue With Facebook" image={images.facebook} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Text style={styles.text}>Don’t have an account? </Text>
        <Text style={{ color: Colors.light.redishButton, marginVertical: 8 }}>
          Sign Up
        </Text>
      </View> */}
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  label: {
    color: Colors.light.Label,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 25,
    padding: 2,
  },
  heading: {
    color: Colors.dark.text,
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    width: "100%",
  },
  text: {
    color: Colors.light.Label,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 20,
    padding: 10,

    textAlign: "left",
  },
  ForgotPassword: {
    textAlign: "right",
    color: Colors.light.redishButton,
    paddingHorizontal: 10,
  },
  loginbutton: {
    marginTop: 20,
  },
  // linecontainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   paddingVertical: 20,
  // },
  // line: {
  //   flex: 1,
  //   height: 1,
  //   backgroundColor: Colors.light.text,
  // },
  // linetext: {
  //   width: 50,
  //   textAlign: "center",
  //   color: Colors.light.text,
  // },
  // loginbutton: {
  //   marginTop: 20,
  // },
});
