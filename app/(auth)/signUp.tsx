import CustomButton from "@/components/buttons/CustomButton";
import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
import Colors from "@/constants/theme";
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

const signUp = () => {
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
        <AuthLayout type="signup">
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
              <Input
                placeholdertext="lois.becket@example.com"
                type="email-address"
              />
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <PasswordInput placeholdertext="*******" type="password" />
            </View>
            <CustomButton title="Sign Up" style={{ marginTop: 20 }} />
          </View>
        </AuthLayout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {},
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
