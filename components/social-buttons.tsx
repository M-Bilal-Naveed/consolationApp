import AuthButton from "@/components/buttons/AuthButton";
import images from "@/constants/images";
import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface SocialButtonsProps {
  title: string;
}

const SocialButtons = (props: SocialButtonsProps) => {
  return (
    <View>
      <View style={styles.linecontainer}>
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
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default SocialButtons;
const styles = StyleSheet.create({
  linecontainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light.text,
  },
  linetext: {
    width: 50,
    textAlign: "center",
    color: Colors.light.text,
  },
  loginbutton: {
    marginTop: 20,
  },
  text: {
    color: Colors.light.Label,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 20,
    padding: 10,
    textAlign: "left",
  },
});
