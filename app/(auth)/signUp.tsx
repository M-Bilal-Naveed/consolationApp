import CustomButton from "@/components/buttons/CustomButton";
import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
import SocialButtons from "@/components/social-buttons";
import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const signUp = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}> Sign Up</Text>
        <Text style={styles.text}>Create an account to continue!</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Full Name</Text>
        <Input placeholdertext="Lois Becket" type="default" />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <Input placeholdertext="lois.becket@example.com" type="email-address" />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <PasswordInput placeholdertext="*******" type="password" />
      </View>
      <View>
        <CustomButton title="Sign Up" style={{ marginTop: 20 }} />
      </View>
      <View>
        <SocialButtons title="Login" />
      </View>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
  },
  label: {
    color: Colors.light.Label,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 25,
    padding: 2,
    // marginTop: 10,
  },
  heading: {
    color: Colors.dark.text,
    fontFamily: "Poppins-Bold",
    fontSize: 27,
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
});
