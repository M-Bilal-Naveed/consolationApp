import CustomButton from "@/components/buttons/CustomButton";
import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";
import Colors from "@/constants/theme";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";

import PhoneInput from 'react-native-international-phone-number';
import AuthLayout from "./authLayout";

const SignUp = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<any>(undefined);

  return (
    <AuthLayout type="signup" ButtonType={true}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AuthLayout type="signup" ButtonType={true}>
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
              <Text style={styles.label}>Phone Number</Text>
              <View style={{ marginVertical: 10 }}>
                <PhoneInput
                  value={phoneNumber}
                  onChangePhoneNumber={setPhoneNumber}
                  selectedCountry={selectedCountry}
                  onChangeSelectedCountry={setSelectedCountry}
                  defaultCountry="DK"
                  placeholder="726-0592"
                  phoneInputStyles={{
                    container: {
                      backgroundColor: Colors.light.shadow, 
                      borderWidth: 1,
                      borderColor: Colors.light.shadow,
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      height: 54,
                    },
                    input: {
                      color: Colors.dark.text,
                      fontSize: 16,
                      fontFamily: "Poppins-Medium",
                    },
                    flagContainer:{
                      backgroundColor: "#0000",                 
                      padding: 0, 
                      margin: 0, 
                    },
                    flag: {
                      fontSize: 24,
                    },
                    caret: {
                      color: Colors.dark.text,
                      fontSize: 10,
                    },
                    divider: {
                      height: 54,
                      backgroundColor: Colors.light.shadow,
                    },
                    callingCode: {
                      color: Colors.dark.text,
                    },
                }}

                />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <PasswordInput placeholdertext="*******" type="password" />
            </View>
            <CustomButton title="Register" style={styles.btnRegister} />
            {/* <View>
              <Link href={"/(auth)/signIn"}>
                <View style={{ flexDirection: "row", gap: 2 }}>
                  <Text style={styles.text}>Already have an account?</Text>
                  <Text style={styles.FooterText}>Login</Text>
                </View>
              </Link>
            </View> */}
          </View>
          <View style={styles.inputContainer}>
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
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Set Password</Text>
            <PasswordInput placeholdertext="*******" type="password" />
          </View>
          <CustomButton title="Register" style={styles.btnRegister} />
          <View>
            <Link href={"/(auth)/signIn"}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={styles.text}>Already have an account?</Text>
                <Text style={styles.FooterText}>Login</Text>
              </View>
            </Link>
          </View>
        </AuthLayout>
      </KeyboardAwareScrollView>
    </AuthLayout>
  );
};

export default SignUp;

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
  inputContainer: {
    marginVertical: 20,
  },
  btnRegister: {
    marginTop: 20,
  },
  FooterText:{},
});
