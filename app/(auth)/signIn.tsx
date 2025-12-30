import CustomButton from "@/components/buttons/CustomButton";
import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
import Colors from "@/constants/theme";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthLayout from "./authLayout";

const SignIn = () => {
  return (
    <AuthLayout type="signin" ButtonType={true}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Sign in to your Account</Text>
            <Text style={styles.text}>
              Enter your email and password to log in
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <Input
              placeholdertext="Loisbecket@gmail.com"
              type="email-address"
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <PasswordInput placeholdertext="*******" type="password" />
          </View>
          <View style={styles.passwordContainer}>
            <Link href={"/(auth)/forgetPassword"}>
              <Text style={styles.ForgotPassword}>Forgot Password ?</Text>
            </Link>
          </View>
          <View style={styles.customButton}>
            <CustomButton title="Log In" />
          </View>
        </View>
        <View style={styles.loginContainer}>
                    <Link href={"/(auth)/signUp"}>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 2,
                        }}
                      >
                        <Text style={styles.text}>Don’t have an account?</Text>
                        <Text style={styles.FooterText}>SignUP</Text>
                      </View>
                    </Link>
                  </View>
      </KeyboardAwareScrollView>
    </AuthLayout>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 12,
    fontFamily: "Poppins-semiBold",
  },
  inputContainer: {
    marginVertical: 15,
  },
  passwordContainer: {
    marginVertical: 15,
  },
  customButton: {
    marginTop: 30,
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  FooterText: {
    color: Colors.light.redishButton,
    fontFamily: "Poppins-Large",
    fontSize: 12,
    lineHeight: 20,
    padding: 2,
    marginTop: 10,
  }
});
