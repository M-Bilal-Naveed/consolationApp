import CustomButton from "@/components/buttons/CustomButton";

import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
import Colors from "@/constants/theme";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      
=======
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
        <CustomButton title="Log In" />
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center", color: "white" }}>
            or
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
      </View>
      <View style={styles.linecontainer}>
        <View style={styles.line} />
        <Text style={styles.linetext}>Hello</Text>
        <View style={styles.line} />
      </View>
>>>>>>> 7a3ec06b32373ef498c36e741aed829bc361e585
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
  linecontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  linetext: {
    width: 50,
    textAlign: "center",
  },
});
