import CustomButton from "@/components/buttons/CustomButton";

import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
import Colors from "@/constants/theme";

import { Link } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AuthLayout from "./authLayout";

const SignIn = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <AuthLayout type="signin" ButtonType={true}>
          <View style={styles.container}>
            <View>
              <Text style={styles.heading}>Sign in to your Account</Text>
              <Text style={styles.text}>
                Enter your email and password to log in
              </Text>
            </View>

            <View style={{ marginTop: 30 }}>
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
            <Link href={"/(auth)/forgetPassword"}>
              <Text style={styles.ForgotPassword}>Forgot Password ?</Text>
            </Link>
            <View style={{ marginTop: 10 }}>
              <CustomButton title="Log In" />
            </View>
          </View>
        </AuthLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {},
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
    margin: 25,
  },
});
