import AuthButton from "@/components/buttons/AuthButton";
import CustomButton from "@/components/buttons/CustomButton";
import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
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
      <View style={{ marginTop: 30 }}>
        <Text style={styles.label}>Email</Text>
        <Input placeholdertext="Loisbecket@gmail.com" type="email-address" />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <PasswordInput placeholdertext="*******" type="password" />
      </View>
      <Text style={styles.ForgotPassword}>Forgot Password ?</Text>

      <View>
        <CustomButton title="Hello" />
        <AuthButton
          title="Hemllo"
          image={require("@/assets/SocialIcons/google.png")}
        />
      </View>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginTop: 50,
    backgroundColor: Colors.light.background,
  },
  label: {
    color: Colors.light.Label,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 25,
    padding: 2,
    marginTop: 10,
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
    padding: 2,
    marginTop: 10,
  },
  ForgotPassword: {
    textAlign: "right",
    color: Colors.light.redishButton,
    paddingHorizontal: 10,
  },
});
