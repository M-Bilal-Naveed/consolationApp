import font from "@/constants/fonts";
import images from "@/constants/images";
import Colors from "@/constants/theme";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AuthLayout from "./authLayout";

const verification = () => {
  return (
    <AuthLayout type="Default" ButtonType={false} centerChildren>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.view}>
            <Image source={images.verify} style={styles.img} />
            <Text style={styles.heading}>Check Your Email And Verify</Text>
            <View>
              <Text style={styles.text}>
                Verification link have been sent to you added email
              </Text>
              <Text style={styles.email}>Loisbecket@gmail.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

export default verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginHorizontal: 20,
  },
  img: {
    width: 90,
    height: 90,
  },
  heading: {
    fontSize: 25,
    color: Colors.light.text,
    fontFamily: font.bold,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    color: Colors.light.Label,
    fontFamily: font.medium,
    textAlign: "center",
  },
  email: {
    fontSize: 12,
    color: Colors.light.Label,
    fontFamily: font.Bold,
    textAlign: "center",
  },
});
